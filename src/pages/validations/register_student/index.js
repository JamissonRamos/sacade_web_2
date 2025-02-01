import * as yup from "yup";


export const RegisterStudentSchema = yup.object().shape({
    
    startDate: yup
        .date()
        .transform((value, originalValue) => {
            // Se o campo for uma string vazia, transforma em null para não gerar erro de cast
            return originalValue === '' ? null : value;
        })
        .min(new Date(1900, 0, 1), 'A data deve ser posterior a 01/01/1900')
        .max(new Date(), 'A data não pode ser no futuro')
        .required('Campo Data Início é obrigatório'),
    trackStart: yup
        .string()
        .notOneOf(['Selecione Faixa'], 'Selecione uma Faixa válido.')
        .required('Campo Selecione Faixa é obrigatório'),
    degreesRange: yup
        .string()
        .required('Campo Graus Faixa é obrigatório'),
});
