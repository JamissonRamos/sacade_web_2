import * as yup from "yup";


export const ModalResponsibleSchema = yup.object().shape({
    
    fullName: yup
        .string()
        .min(3, 'Campo Nome Completo deve ter no mínimo 3 caracteres')
        .required('Campo Nome Completo é obrigatório'),
    relationshipLevel: yup
        .string()
        .notOneOf(['Selecione Parente'], 'Selecione um parente válido.')
        .required('Campo Nível de Parentesco é obrigatório'),
    responsibleBirthDate: yup
        .date()
        .nullable()
        .transform((value, originalValue) => {
            // Se o campo for uma string vazia, transforma em null para não gerar erro de cast
            return originalValue === '' ? null : value;
        })
        .min(new Date(1900, 0, 1), 'A data deve ser posterior a 01/01/1900')
        .max(new Date(), 'A data não pode ser no futuro'),
    responsibleEmail: yup
        .string()
        .nullable() // Permite que o campo seja null ou vazio
        .notRequired() // O campo não é obrigatório
        .test('valid-responsibleEmail', 'E-mail inválido.', (value) => {
        if (!value) return true; // Se o campo for vazio ou null, não validar
        return yup.string().email().isValidSync(value); // Verifica se o valor segue o formato de e-mail
        }),
    responsibleCellPhone: yup
        .string()
        .nullable() // Campo pode ser null ou vazio
        .test('valid-phone', 'O número de celular deve ter 11 dígitos.', (value) => {
            if (!value) return true; // Se o campo for vazio ou null, não validar
            const cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            return cleanedValue.length === 11; // Verifica se tem 11 dígitos
        }),
});
