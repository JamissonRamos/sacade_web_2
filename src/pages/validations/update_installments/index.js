import * as yup from "yup";

export const UpdateInstallmentsSchema = yup.object().shape({
    dueDate: yup
        .date()
        .nullable()
        .transform((value, originalValue) => {
            // Se o campo for uma string vazia, transforma em null para não gerar erro de cast
            return originalValue === '' ? null : value;
        })
        .min(new Date(), 'A data deve ser no futuro')
        .required('Campo é obrigatório'),
    valueInstallment: yup
        .string()
        .typeError('O campo deve ser um número') // Caso o valor não seja numérico
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo é obrigatório')
        .test('not-zero', 'O valor deve ser diferente de R$ 0,00', (value) => {
            if (!value) return false; // Verifica se o valor está vazio
            const unformattedValue = value.replace(/[^\d,]/g, '').replace(',', '.'); // Remove formatação para comparação numérica
            return parseFloat(unformattedValue) !== 0; // Verifica se o valor é diferente de zero
        }),
    fees: yup
        .string()
        .typeError('O campo deve ser um número') // Caso o valor não seja numérico
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo não pode ser vazio'),
    interestDaily: yup
        .string()
        .typeError('O campo deve ser um número') // Caso o valor não seja numérico
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo não pode ser vazio'),
    interestMonthly: yup
        .string()
        .typeError('O campo deve ser um número') // Caso o valor não seja numérico
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo não pode ser vazio'),
    interestAnnual: yup
        .string()
        .typeError('O campo deve ser um número') // Caso o valor não seja numérico
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo não pode ser vazio'),

});
