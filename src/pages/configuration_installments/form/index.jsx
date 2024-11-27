import * as S from "./styled"
import Fields from "./fields"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../validations/index'

const Form = () => {

    const { register, handleSubmit, setValue, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ConfigurationInstallmentsSchema)
    }); 

    const handleOnSubmit = (data) => {
        console.log(data);
        
    }
    return (
        <S.Form onSubmit={handleSubmit(handleOnSubmit)} >
            <Fields 
                register={register}
                setValue={setValue}
                errors={errors}
            />
        </S.Form>
    )
}

export default Form