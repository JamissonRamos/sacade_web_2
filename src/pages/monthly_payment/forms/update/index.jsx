import React from 'react'
import Fields from '../../components/fields';

const FormUpdate = (props) => {
    const { register, errors, setValue, setValueDiscount, setValueIncrease, setValuePayments} = props;
    
    return (

        <div>
            <Fields 
                register = {register}
                errors = {errors}
                setValue = {setValue}
                setValueDiscount = {setValueDiscount}
                setValueIncrease = {setValueIncrease}
                setValuePayments = {setValuePayments}

            />
        </div>
    )
}

export default FormUpdate