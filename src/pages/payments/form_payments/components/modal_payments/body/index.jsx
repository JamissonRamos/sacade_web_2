import { yupResolver } from '@hookform/resolvers/yup'
import Buttons from '../buttons'
import Fields from '../fields'
import * as S from './styled'
import { useForm } from 'react-hook-form'
import { Validations } from '../../../../../validations'
const Body = (props) => {
    const { showModal, setValueDiscount, setValueIncrease, setValuePayments } = props

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.PaymentsSchema),
        defaultValues: {
            paymentDate: new Date().toISOString().split('T')[0],
            installmentDiscount: 0,
            installmentIncrease: 0,
            amountPaid: 0,
        }
    });

    const onSubmit = (data) => {    
        console.log(data)

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