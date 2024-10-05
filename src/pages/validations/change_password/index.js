import * as yup from "yup";


export const ChangePasswordSchema = yup.object().shape({
    
    currentPassword: yup
        .string()
        .min(6, 'Campo Senha Atual deve ter no mínimo 6 caracteres.')
        .required('Campo Senha Atual é obrigatório'),
    newPassword: yup
        .string()
        .min(6, 'Campo Nova Senha deve ter no mínimo 6 caracteres.')
        .required('Campo Nova Senha é obrigatório'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), null], 'As senhas devem ser iguais.')
        .min(6, 'Campo Confirma Senha deve ter no mínimo 6 caracteres.')
        .required('Campo Confirma Senha é obrigatório'),
});
