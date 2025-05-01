import { yupResolver } from '@hookform/resolvers/yup'
import Buttons from '../buttons'
import Fields from '../fields'
import * as S from './styled'
import { useForm } from 'react-hook-form'
import { Validations } from '../../../../../validations'
const Body = (props) => {
    const { showModal, setValueDiscount, setValueIncrease, setValuePayments, statusPayments } = props

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.PaymentsSchema),
        defaultValues: {
            paymentDate: new Date().toISOString().split('T')[0],
            installmentDiscount: 'R$ 0,00',
            installmentIncrease: 'R$ 0,00',
            amountPaid: 'R$ 0,00',
        }
    });

    const onSubmit = (data) => {    
        // 1 passar para o pagamento o uid da parcela
        console.log(data)
        //Mudar status da entidade de parcela se quitado ou não 
        console.log('statusPayments', statusPayments);
        

    }


    return (
        <S.Container>
            
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <Fields 
                    register={register}
                    errors={errors}
                    setValue={setValue}
                    setValueDiscount={setValueDiscount}
                    setValueIncrease={setValueIncrease}
                    setValuePayments={setValuePayments}
                />

                <Buttons showModal={showModal}/>

            </S.Form>

        </S.Container>
    )
}

export default Body