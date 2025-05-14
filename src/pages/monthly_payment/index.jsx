import * as S from './styled';
import { WrapPages } from '../../components/Wrappe/pages'
import { useLocation, useNavigate } from 'react-router-dom';
import FormCreate from './forms/create';
import FormUpdate from './forms/update';
import Header from './header';
import Footer from './footer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../validations';
import WrapButtons from './components/buttons';
import { useState } from 'react';
import { FormattedDate, ParseCurrencyToNumber } from './scripts';
import { useMonthlyFee } from '../../hooks/monthlyFee';

const MonthlyPayment = () => {
    const [valueDiscount, setValueDiscount] = useState(0); // Recebe o valor de desconto na parcela
    const [valueIncrease, setValueIncrease] = useState(0); // Recebe o valor de acrecimo na parcela
    const [valuePayments, setValuePayments] = useState(0); // Recebe o valor de pagamento na parcela
    const [blockPaymentProcess, setBlockPaymentProcess] = useState(false) //Bloquear btn de pagar parcela caso alguma regra não seja atendida

    const navigation = useNavigate();
    const location = useLocation();  // Captura o UID da URL
    // Captura os atributos do useLocation, typeForm: 1 = pagamento, update, 2 = pagamento
    const { uidMonthlyFee, idForm } = location.state || {};  

    const {createDocuments, loading} = useMonthlyFee.usePostDocumentsCreate();
    
    //Validaçoes dos Campos;
    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
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
                navigation(-1);
                break;
            case 'delete':
                // vou passar o modal de delete 
                break;
            default:
                console.log('Não foi escolhido um botão');
                break;
        }
    }


    const handleSubmitForm = async (data) => {
        // - Ao Pagar ser redirencionado para pagina de notificação;
        // - Tenho que mudar o status da parcela, alterar o status de parcela, como data de pagamento com a data em abeto;
        // - add o uid da parcela, para ficar vinculado;

        data.paymentMethod = Number(data.paymentMethod);
        data.paymentDate = FormattedDate(data.paymentDate);
        data.installmentDiscount = ParseCurrencyToNumber(data.installmentDiscount);
        data.installmentIncrease = ParseCurrencyToNumber(data.installmentIncrease);
        data.amountPaid = ParseCurrencyToNumber(data.amountPaid);
        data.uidMonthlyFee = uidMonthlyFee;

        console.log('data', data);
        const result = await createDocuments(data);
        const {success, message} = result;
        
        if(success){
            console.log('Pagamento feito com sucesso!');
            
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
                        :   <FormUpdate 
                                register = {register}
                                errors = {errors}
                                setValue = {setValue}
                                setValueDiscount = {setValueDiscount}
                                setValueIncrease = {setValueIncrease}
                                setValuePayments = {setValuePayments}
                            />
                    }

                    <WrapButtons 
                        idForm={Number(idForm)}
                        blockPaymentProcess = {blockPaymentProcess}
                        clickButton = {handleClickButton}
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