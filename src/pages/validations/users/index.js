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
    phoneUsers: yup
        .string()
        .nullable() // Campo pode ser null ou vazio
        .test('valid-phone', 'O número de celular deve ter 11 dígitos.', (value) => {
            if (!value) return true; // Se o campo for vazio ou null, não validar
            const cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            return cleanedValue.length === 11; // Verifica se tem 11 dígitos
        }),
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
        .oneOf([yup.ref('newPassword'), null], 'As senhas devem ser iguais ao campo Nova Senha.')
        .min(6, 'Campo Confirma Senha deve ter no mínimo 6 caracteres.')
        .required('Campo Confirma Senha é obrigatório'),
        
});
