import * as yup from "yup";


export const StudentsSchema = yup.object().shape({
    
    firstName: yup
        .string()
        .min(3, 'Campo Nome deve ter no mínimo 3 caracteres')
        .required('Campo Nome é obrigatório'),
    lastName: yup
        .string()
        .min(3, 'Campo Sobrenome deve ter no mínimo 3 caracteres.')
        .required('Campo Sobrenome é obrigatório'),
    cpf: yup
        .string()
        .nullable() // Campo pode ser null ou vazio
        .test('valid-cpf', 'O número do cpf deve ter 11 dígitos.', (value) => {
            if (!value) return true; // Se o campo for vazio ou null, não validar
            const cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            return cleanedValue.length === 11; // Verifica se tem 11 dígitos
        }),
    rg: yup
        .string()
        .nullable() // Campo pode ser null ou vazio
        .test('valid-rg', 'O número do rg deve ter 11 dígitos.', (value) => {
            if (!value) return true; // Se o campo for vazio ou null, não validar
            const cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            return cleanedValue.length === 10; // Verifica se tem 11 dígitos
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
    email: yup
        .string()
        .nullable() // Permite que o campo seja null ou vazio
        .notRequired() // O campo não é obrigatório
        .test('valid-email', 'E-mail inválido.', (value) => {
        if (!value) return true; // Se o campo for vazio ou null, não validar
        return yup.string().email().isValidSync(value); // Verifica se o valor segue o formato de e-mail
        }),
    cellPhone: yup
        .string()
        .nullable() // Campo pode ser null ou vazio
        .test('valid-phone', 'O número de celular deve ter 11 dígitos.', (value) => {
            if (!value) return true; // Se o campo for vazio ou null, não validar
            const cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            return cleanedValue.length === 11; // Verifica se tem 11 dígitos
        }),
    status: yup
        .string()
        .notOneOf([''], 'Selecione um Status válido')
        .required('Campo Status é obrigatório'),
    // fullName: yup
    //     .string()
    //     .nullable() // Campo pode ser null ou vazio
    //     .test('fullName', 'Complete o seu nome.', (value) => {
    //         if (!value) return true; // Se o campo for vazio ou null, não validar
    //         const cleanedValue = value.trim(); // Remove espaços em branco no início e no final
    //         return cleanedValue.length > 2; // Verifica se tem mais de 3 caracteres
    //     }),
    // relationshipLevel: yup
    //     .string()
    //     .nullable()
    //     .when('fullName', (fullName, schema) => {
    //         const cleanedFullName = Array.isArray(fullName) && fullName.length > 0 ? fullName[0].trim() : ''; // Acessa o primeiro elemento do array
    //         return cleanedFullName.length > 0
    //             ? schema
    //                 .required('A seleção do nível de parentesco é obrigatória quando o nome completo é preenchido.')
    //                 .notOneOf(['Selecione Parente'], 'Selecione um parente válido.')
    //             : schema.nullable();
    //     }),
    // responsibleBirthDate: yup
    //     .date()
    //     .nullable()
    //     .transform((value, originalValue) => {
    //         // Se o campo for uma string vazia, transforma em null para não gerar erro de cast
    //         return originalValue === '' ? null : value;
    //     })
    //     .min(new Date(1900, 0, 1), 'A data deve ser posterior a 01/01/1900')
    //     .max(new Date(), 'A data não pode ser no futuro'),
    // responsibleEmail: yup
    //     .string()
    //     .nullable() // Permite que o campo seja null ou vazio
    //     .notRequired() // O campo não é obrigatório
    //     .test('valid-responsibleEmail', 'E-mail inválido.', (value) => {
    //     if (!value) return true; // Se o campo for vazio ou null, não validar
    //     return yup.string().email().isValidSync(value); // Verifica se o valor segue o formato de e-mail
    //     }),
    // newPassword: yup
    //     .string()
    //     .min(6, 'Campo Nova Senha deve ter no mínimo 6 caracteres.')
    //     .required('Campo Nova Senha é obrigatório'),
    // confirmPassword: yup
    //     .string()
    //     .oneOf([yup.ref('newPassword'), null], 'As senhas devem ser iguais.')
    //     .min(6, 'Campo Confirma Senha deve ter no mínimo 6 caracteres.')
    //     .required('Campo Confirma Senha é obrigatório'),
});
