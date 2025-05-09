import React from 'react'
import Fields from '../../components/fields';

const FormUpdate = (props) => {
    const { register, errors } = props;


    
    return (
        <div>
            <Fields 
                register = {register}
                errors = {errors}
            />
        </div>
    )
}

export default FormUpdate