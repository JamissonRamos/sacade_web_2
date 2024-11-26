import * as S from "./styled"
import Fields from "./fields"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../validations/index'

const Form = () => {

    const { register, handleSubmit, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ChangePasswordSchema)
    }); 

    return (
        <S.Form>
            <Fields />
        </S.Form>
    )
}

export default Form