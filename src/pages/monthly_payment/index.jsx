import * as S from './styled';
import { WrapPages } from '../../components/Wrappe/pages'
import { useParams } from 'react-router-dom';
import FormCreate from './forms/create';
import FormUpdate from './forms/update';
import Header from './header';
import Footer from './footer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../validations';
import WrapButtons from './components/buttons';

const MonthlyPayment = () => {
    const { idForm } = useParams() || {}; 

    /* 
        - Manipular o campos form hoocks
        - Controle do form
            * useEffetc para selecionar o form a ser alterado;
        - Função de Busca dados ja cadastrado caso o form seja update;
    
    */
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


    
    return (
        <WrapPages>
            <S.Content>
                <Header idForm={idForm}/>

                <S.Form >
                    {
                        idForm == 1
                        ?   <FormCreate 
                                register = {register}
                                errors = {errors}
                            /> 
                        :   <FormUpdate 
                                register = {register}
                                errors = {errors}
                            />
                    }

                    <WrapButtons idForm={Number(idForm)}/>
                </S.Form>

                {/* Passar vores dos campo de acresimo e descontos */}
                <Footer />
            </S.Content>
        </WrapPages>
    )
}

export default MonthlyPayment