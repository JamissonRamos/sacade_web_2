import * as yup from "yup";


export const RegisterStudentSchema = yup.object().shape({
    
    dateUpdate: yup
        .date()
        .transform((value, originalValue) => {
            // Se o campo for uma string vazia, transforma em null para não gerar erro de cast
            return originalValue === '' ? null : value;
        })
        .min(new Date(1900, 0, 1), 'A data deve ser posterior a 01/01/1900')
        .max(new Date(), 'A data não pode ser no futuro')
        .required('Campo Data Atualização é obrigatório'),
    graduation: yup
        .string()
        .notOneOf(['Selecione o tipo de graduação'], 'Selecione uma graduação válido.')
        .required('Campo Selecione o tipo de graduação é obrigatório'),
    range: yup
        .string()
        .notOneOf(['Selecione Faixa'], 'Selecione uma Faixa válido.')
        .required('Campo Selecione Faixa é obrigatório'),
    studentWeight: yup
        .string()
        .required('O campo Peso do Aluno é obrigatório e não pode ficar vazio'),
    studentHeight: yup
        .string()
        .required('Campo Altura Aluno é obrigatório e não pode ficar vazio.'),
});
