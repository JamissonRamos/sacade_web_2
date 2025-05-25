import * as S from './styled';
import { WrapPages } from '../../components/Wrappe/pages'
import FormCreate from './forms/create';
import Header from './header';
import Footer from './footer';
import WrapButtons from './components/buttons';

import { useState } from 'react';
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
    const [wasPaid, setWasPaid] = useState(false); // Indica se a mensalidade foi paga
    const [blockPaymentProcess, setBlockPaymentProcess] = useState(false) //Bloquear btn de pagar parcela caso alguma regra não seja atendida

    const navigate = useNavigate();
    const location = useLocation();  // Captura o UID da URL
    // Captura os atributos do useLocation, typeForm: 1 = pagamento, update, 2 = pagamento
    const { uidMonthlyFee, idForm } = location.state || {};  
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
        data.paymentDate = FormattedDate(data.paymentDate);
        data.installmentDiscount = ParseCurrencyToNumber(data.installmentDiscount);
        data.installmentIncrease = ParseCurrencyToNumber(data.installmentIncrease);
        data.amountPaid = ParseCurrencyToNumber(data.amountPaid);
        data.uidMonthlyFee = uidMonthlyFee;

        console.log('wasPaid', wasPaid);
        
        // Obj de atualização de dados da mensalidade
        const dataUpdateInstallments = {
            uid: uidMonthlyFee,
            dataPayment: data.paymentDate,
            statusPayment: wasPaid,
        }

        const result = await createDocuments(data);
        const {success, message} = result;
        
        if(success){
            // Aqui vou fazer alteração no status da mensalidade;
            const resultUpdate = await monthlyDataUpdate(dataUpdateInstallments);
            const {success, message} = resultUpdate;
            if(success){
                const path = `/notifications/monthlyPayment`;
                reset();
                navigate(path)
            }else{
                console.log('Erro ao atualizar mensalidade', message);
            }
        }else{
            console.log('error no pagamento de mensalidade', message);
        }
    }

    return (
        <WrapPages>
            <S.Content>

                <Header idForm={idForm}/>

                <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
                    {
                        idForm == 1
                        ?   <FormCreate 
                                register = {register}
                                errors = {errors}
                                setValue = {setValue}
                                setValueDiscount = {setValueDiscount}
                                setValueIncrease = {setValueIncrease}
                                setValuePayments = {setValuePayments}
                            /> 
                        :   null
                    }

                    <WrapButtons 
                        idForm={Number(idForm)}
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
                    setWasPaid={setWasPaid}
                />
            </S.Content>
        </WrapPages>
    )
}

export default MonthlyPayment