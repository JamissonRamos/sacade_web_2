import { mask } from 'remask';
import { MaskList } from '../../../../../constants/mask';
import { useSearchCep } from '../../../../../services/cep';

export const MaskInput = (fieldName, fieldValue) => {
    let maskedValue;
    switch (fieldName) {
        case 'cellPhone':
            maskedValue = mask(fieldValue, MaskList.phone);
            break;
        case 'cpf':
            maskedValue = mask(fieldValue, MaskList.cpf);
            break;
        case 'rg':
            maskedValue = mask(fieldValue, MaskList.rg);
            break;
        case 'responsibleCellPhone':
            maskedValue = mask(fieldValue, MaskList.phone);
            break;
        case 'cep':
            maskedValue = mask(fieldValue, MaskList.cep);
            break;
        default:
            break;
    }
    return maskedValue;
}

export const CapitalizedValue = (fieldValue) => {
    const inputValue = fieldValue;

    // Capitaliza a primeira letra de cada palavra
    const capitalizedWords = inputValue.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    const newValue = capitalizedWords.join(' ');
    return(newValue); // Atualiza o valor no React Hook Form
};

export const FormattedDate = (birthDate) => {
    const newDate = new Date(birthDate);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = newDate.getFullYear();
    
    return `${day}/${month}/${year}`;
}


export const FetchCep = () => {
    
    const { fetchCep, isLoading: loadingCep} =  useSearchCep();

    
    const searchCep = async (cep) => {
        const cepValue = cep;

        try {
            
            if (!cepValue) return{success: false, message: "Cep não foi fornecido."}
            if (cepValue.length <= 8) return{success: false, message: "Cep não foi digitado corretamente."}
            
            const result = await fetchCep(cep);
            const { success, data } = result
            
            if (success){
                return{
                    success: true,
                    message: 'Cep Encontrado',
                    data: data
                }
            }else{
                return{
                    success: false,
                    message: 'Cep não foi encontrado'
                }
            }
        } catch (error) {
            console.log('Erro na busca do cep: ', error.message);
    
            return{
                success: false,
                message: 'Deu um erro na busca do cep'
            }
            
        }

    }

    return {
        searchCep,
        loadingCep
    }

};
