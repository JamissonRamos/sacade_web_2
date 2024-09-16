import * as yup from "yup";


export const UserSchema = yup.object().shape({
    
    firstName: yup
        .string()
        .min(3, 'Campo Nome deve ter no mínimo 3 caracteres')
        .required('Campo Nome é obrigatório'),
    lastName: yup
        .string()
        .min(3, 'Campo Sobrenome deve ter no mínimo 3 caracteres.')
        .required('Campo Sobrenome é obrigatório'),
    emailUser: yup
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'E-mail inválido')
        .required('Campo Email é obrigatório'),
    birthDate: yup
        .date()
        .min(new Date(1900, 0, 1), 'A data deve ser posterior a 01/01/1900')
        .max(new Date(), 'A data não pode ser no futuro')
        .required('Campo Data Nascimento é obrigatório'),
    gender: yup
        .string()
        .notOneOf([''], 'Selecione um Gênero válido')
        .required('Campo Gênero é obrigatório'),
    newPassword: yup
        .string()
        .min(6, 'Campo Nova Senha deve ter no mínimo 6 caracteres.')
        .required('Campo Nova Senha é obrigatório'),
    confirmPassword: yup
        .string()
        .min(6, 'Campo Confirma Senha deve ter no mínimo 6 caracteres.')
        .required('Campo Confirma Senha é obrigatório'),
    // adicione outros campos conforme necessário
    // phone: yup
    //     .string()
    //     .nullable()
    //     .notRequired()
    //     .min(11, 'Campo Celular deve ter no mínimo 11 caracteres.')
    //     .max(16, 'Campo Celular deve ter no máximo 16 caracteres.')
    //     .matches(/^\(\d{2}\) \d \d{4}-\d{4}$/, 'Número de telefone inválido'),
    // cep: yup
    //     .string()
    //     .nullable()
    //     .notRequired()
    //     .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
    // uf: yup
    //     .string()
    //     .nullable()
    //     .notRequired()
    //     .length(2, 'Campo UF deve ter exatamente 2 caracteres.')
    //     .matches(/^[a-zA-Z]+$/, 'Campo UF deve conter apenas letras.')
});