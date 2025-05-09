import React from 'react'
import Fields from '../../components/fields';

const FormCreate = (props) => {
    
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

export default FormCreate