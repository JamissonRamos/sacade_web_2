import { Button } from 'react-bootstrap'
import Fields from '../fields'
import * as S from '../styled'

const CreateForm = (props) => {
    const { register, errors } = props ///setValue, setValueDiscount, setValueIncrease, setValuePayments


    return (
        <S.Container>
            <Fields 
                register={register}
                errors={errors}
                // setValue={setValue}
                // setValueDiscount={setValueDiscount}
                // setValueIncrease={setValueIncrease}
                // setValuePayments={setValuePayments}
            />




        </S.Container>
    )
}

export default CreateForm