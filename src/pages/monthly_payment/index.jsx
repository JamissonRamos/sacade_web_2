import * as S from './styled';
import { WrapPages } from '../../components/Wrappe/pages'
import FormCreate from './forms/create';
import Header from './header';
import Footer from './footer';
import WrapButtons from './components/buttons';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../validations';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormattedDate, ParseCurrencyToNumber } from './scripts';
import { useMonthlyFee } from '../../hooks/monthlyFee';
import { useInstallments } from '../../hooks/installments';

const MonthlyPayment = () => {
    const [valueDiscount, setValueDiscount] = useState(0); // Recebe o valor de desconto na parcela
    const [valueIncrease, setValueIncrease] = useState(0); // Recebe o valor de acrecimo na parcela
    const [valuePayments, setValuePayments] = useState(0); // Recebe o valor de pagamento na parcela
    const [subTotalFixed, setSubTotalFixed] = useState(0) // Esse Vai ser o valor total da parcela vindo de detalhe
    //const [wasPaid, setWasPaid] = useState(false); // Indica se a mensalidade foi paga
    const [blockPaymentProcess, setBlockPaymentProcess] = useState(false) //Bloquear btn de pagar parcela caso alguma regra não seja atendida
    
    const navigate = useNavigate();
    const location = useLocation();  // Captura o UID da URL
    const { uidMonthlyFee, maxPaymentDate } = location.state || {};  // Captura os atributos do useLocation

    const {createDocuments, loading: loadingCreate} = useMonthlyFee.usePostDocumentsCreate();
    const {updateInstallments, loading: loadingInstallmentsUpdate} = useInstallments.usePostDocumentsUpdate();
    
    //Validaçoes dos Campos;
    const { register, handleSubmit, setValue, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.PaymentsSchema),
        defaultValues: {
            paymentDate: new Date().toISOString().split('T')[0],
            installmentDiscount: 'R$ 0,00',
            installmentIncrease: 'R$ 0,00',
            amountPaid: 'R$ 0,00',
        }
    });

    //Função para volta a lista de parcela mais tamebm limpar o local storage
    const handleClickButton = (e) => {
        const { name } = e.currentTarget

        switch (name) {
            case 'cancel':
                navigate(-1);
                break;
            case 'delete':
                // vou passar o modal de delete 
                break;
            default:
                console.log('Não foi escolhido um botão');
                break;
        }
    }

    const monthlyDataUpdate = async (data) => {
        const result = await updateInstallments(data);
        return result;
    }

    const handleSubmitForm = async (data) => {
        data.paymentMethod = Number(data.paymentMethod);
        //Compara maior data de pagamento com a data a ser salvo e pegar a maior data 
        const PaymentDateToBbeSaved = maxPaymentDate > data.paymentDate ? maxPaymentDate : data.paymentDate;

        console.log('subTotalFixed', subTotalFixed);
        const discountValue = ParseCurrencyToNumber(data.installmentDiscount);
        const increaseValue = ParseCurrencyToNumber(data.installmentIncrease);
        const amountPaidValue = ParseCurrencyToNumber(data.amountPaid);
        
        const realInstallmentValue = subTotalFixed - (amountPaidValue + increaseValue + discountValue);

        const wasPaid = realInstallmentValue > 0 ? false : true;

        data.paymentDate = FormattedDate(PaymentDateToBbeSaved) //FormattedDate(data.paymentDate);
        data.installmentDiscount = ParseCurrencyToNumber(data.installmentDiscount);
        data.installmentIncrease = ParseCurrencyToNumber(data.installmentIncrease);
        data.amountPaid = ParseCurrencyToNumber(data.amountPaid);
        data.uidMonthlyFee = uidMonthlyFee;
        
        // Obj de atualização de dados da mensalidade
        const dataUpdateInstallments = {
            uid: uidMonthlyFee,
            dataPayment: wasPaid ? FormattedDate(PaymentDateToBbeSaved) : "", 
            statusPayment: wasPaid,
        }

        const result = await createDocuments(data); //{success: true, message: 'erro de teste'}
        const {success, message} = result;
        
        if(success){
            // Aqui vou fazer alteração no status da mensalidade;
            const resultUpdate = await monthlyDataUpdate(dataUpdateInstallments); //{success: true, message: 'erro de teste'} //
            const {success, message} = resultUpdate;
            if(success){               
                const path = `/notifications/monthlyPayment`;
                reset();
                navigate(path)
                //Limpar o local storage ao renderizar o component
                localStorage.removeItem('cardParcelData');
                localStorage.removeItem('parcelData');
            }else{
                console.log('Erro ao atualizar mensalidade', message);
                navigate('/notifications/error');
            }
        }else{
            console.log('error no pagamento de mensalidade', message);
            navigate('/notifications/error');
        }
    }

    useEffect(() => {
        /* 
            -Carregar e atualizar staetes de valores da mensalidade;
            -Valores fixos
        */
        const dataPay = JSON.parse(localStorage.getItem('cardParcelData')) || [];
        
        if (dataPay.length === 0) return;

        //Verificar se vou precisar de todos esses valores, ou somente do subtotal
        const { subTotal } = dataPay;

        //SubTotal traz o valor que resta a pagar
        setSubTotalFixed(Math.round((subTotal) * 100 ) / 100 );        

    }, []); // Executa apenas na 1ª renderização

    return (
        <WrapPages>
            <S.Content>

                <Header />

                <S.Form onSubmit={handleSubmit(handleSubmitForm)}>

                    <FormCreate 
                        register = {register}
                        errors = {errors}
                        setValue = {setValue}
                        setValueDiscount = {setValueDiscount}
                        setValueIncrease = {setValueIncrease}
                        setValuePayments = {setValuePayments}
                    /> 

                    <WrapButtons 
                        blockPaymentProcess = {blockPaymentProcess}
                        clickButton = {handleClickButton}
                        loadingCreate={loadingCreate || loadingInstallmentsUpdate}
                    />
                </S.Form>

                {/* Passar vores dos campo de acresimo e descontos */}
                <Footer
                    valueDiscount={valueDiscount}
                    valueIncrease={valueIncrease}
                    valuePayments={valuePayments}
                    setBlockPaymentProcess={setBlockPaymentProcess}
                />
            </S.Content>
        </WrapPages>
    )
}

export default MonthlyPayment