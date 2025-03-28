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
        .transform((value, originalValue) => {
            // Se o campo for uma string vazia, transforma em null para não gerar erro de cast
            return originalValue === '' ? null : value;
        })
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
    cep: yup
        .string()
        .nullable() // Campo pode ser null ou vazio
        .test('valid-cep', 'O cep deve ter 8 dígitos.', (value) => {            
            if (!value) return true; // Se o campo for vazio ou null, não validar
            if(value.includes(undefined)) return;
            const cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            return cleanedValue.length === 8; // Verifica se tem 11 dígitos
        }),
    logadouro: yup
        .string()
        .nullable()
        .when('cep', (cep, schema) => {
            if(cep.includes(undefined)) return;
            const cleanedCep = Array.isArray(cep) && cep.length ? cep[0].replace(/\D/g, '') : ''; // Verifica se cep é um array e extrai o valor
            return cleanedCep.length === 8 
                ? schema.required('O logadouro é obrigatório quando o CEP está preenchido.') 
                : schema.nullable();
            }),
    residenceNumber: yup
        .string()
        .nullable()
        .when('cep', (cep, schema) => {
            if(cep.includes(undefined)) return;
            const cleanedCep = Array.isArray(cep) && cep.length ? cep[0].replace(/\D/g, '') : ''; // Verifica se cep é um array e extrai o valor
            return cleanedCep.length === 8 
                ? schema.required('O número da residência é obrigatório quando o CEP está preenchido.') 
                : schema.nullable();
            }),
    neighborhood: yup
        .string()
        .nullable()
        .when('cep', (cep, schema) => {
            if(cep.includes(undefined)) return;
            const cleanedCep = Array.isArray(cep) && cep.length ? cep[0].replace(/\D/g, '') : ''; // Verifica se cep é um array e extrai o valor
            return cleanedCep.length === 8 
                ? schema.required('O campo bairro é obrigatório quando o CEP está preenchido.') 
                : schema.nullable();
            }),
    federativeUnit: yup
        .string()
        .nullable()
        .when('cep', (cep, schema) => {
            if(cep.includes(undefined)) return;
            const cleanedCep = Array.isArray(cep) && cep.length ? cep[0].replace(/\D/g, '') : []; // Verifica se cep é um array e extrai o valor
            return cleanedCep.length === 8 
                ? schema.required('O campo UF é obrigatório quando o CEP está preenchido.') 
                : schema.nullable();
            }),
    city: yup
        .string()
        .nullable()
        .when('cep', (cep, schema) => {            
            if(cep.includes(undefined)) return;
            const cleanedCep = Array.isArray(cep) && cep.length ? cep[0].replace(/\D/g, '') : ''; // Verifica se cep é um array e extrai o valor
            return cleanedCep.length === 8 
                ? schema.required('O campo Cidade é obrigatório quando o CEP está preenchido.') 
                : schema.nullable();
            }),
        
});
