import * as yup from "yup";


export const ConfigurationInstallmentsSchema = yup.object().shape({
    
    dayGenerateInstallment: yup
        .number()
        .typeError('O campo deve ser um número') // Caso o valor não seja numérico
        .min(1, 'O dia deve ser no mínimo 1')
        .max(31, 'O dia deve ser no máximo 31')
        .required('Campo é obrigatório'),
    valueInstallment: yup
        .string()
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo é obrigatório')
        .test('not-zero', 'O valor deve ser diferente de R$ 0,00', (value) => {
            if (!value) return false; // Verifica se o valor está vazio
            const unformattedValue = value.replace(/[^\d,]/g, '').replace(',', '.'); // Remove formatação para comparação numérica
            return parseFloat(unformattedValue) !== 0; // Verifica se o valor é diferente de zero
        }),
    fees: yup
        .string()
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo não pode ser vazio'),
    interestDaily: yup
        .string()
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo não pode ser vazio'),
    interestMonthly: yup
        .string()
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo não pode ser vazio'),
    interestAnnual: yup
        .string()
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo não pode ser vazio'),

});
