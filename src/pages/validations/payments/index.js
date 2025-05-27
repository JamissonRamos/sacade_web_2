import * as yup from "yup";

export const PaymentsSchema = yup.object().shape({
    
    paymentMethod: yup
        .string()
        .notOneOf(['Selecione Forma Pagamento'], 'Selecione um Forma Pagamento válido.')
        .required('Campo Forma Pagamento é obrigatório'),
    
    paymentDate: yup
        .date()
        .nullable()
        .transform((value, originalValue) => {
            // Se o campo for uma string vazia, transforma em null para não gerar erro de cast
            return originalValue === '' ? null : value;
        })
        .min(new Date(1900, 0, 1), 'A data deve ser posterior a 01/01/1900')
        .max(new Date(), 'A data não pode ser no futuro')
        .required('Campo Data Pagamento é obrigatório'),
    installmentDiscount: yup
        .string()
        .required('Campo não pode ser vazio'),
    installmentIncrease: yup
        .string()
        .required('Campo não pode ser vazio'),
    amountPaid: yup
        .string()
        .required('Campo não pode ser vazio')
        .test('not-zero', 'O valor deve ser diferente de R$ 0,00', (value) => {
            if (!value) return false; // Verifica se o valor está vazio
            const unformattedValue = value.replace(/[^\d,]/g, '').replace(',', '.'); // Remove formatação para comparação numérica
            return parseFloat(unformattedValue) !== 0; // Verifica se o valor é diferente de zero
        }),
});
