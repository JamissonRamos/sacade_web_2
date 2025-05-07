import * as S from './styled'
import { useParams } from 'react-router-dom';
import CreateForm from './create';
import UpdateForm from './update';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../validations';
import { WrapPages } from '../../../components/Wrappe/pages';
import Header from './header';


const FormPay = () => {
    const { typeForm } = useParams() || {};  // Captura o UID do estado de navegação checkForm = true para cadastro false para atualizar

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
    //Recuperar pagamento caso seja update;
    //onsubmit vai ser aqui;
    //ao ser desmontado remover cardParcelData; parcelData
    
    const handleOnSubmit = (data) => {
        console.log('data', data);
        
    }

    return (

        <WrapPages>
            <Header />
            
            <S.Form onSubmit={handleSubmit(handleOnSubmit)}>
                {
                    typeForm === "create"
                    ?  <CreateForm
                            register={register}
                            errors={errors}
                            // setValue={setValue}
                            // setValueDiscount={getValues}
                            // setValueIncrease={getValues}
                            // setValuePayments={getValues}
                        />
                    :  <UpdateForm />
                }



            </S.Form>
        </WrapPages>
    )
}

export default FormPay