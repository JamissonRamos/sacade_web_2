import { mask } from 'remask';
import { useSearchCep } from '../../../../../../../services/cep';

export const FormattedDate = (birthDate) => {
    const newDate = new Date(birthDate);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = newDate.getFullYear();
    
    return `${day}/${month}/${year}`;
}

export const ApplyMask = (key, value) => {
    //Função para aplicar as mascara nos campos
    let maskedValue = value;
    let field = key;

    if (field === 'phone')
    {
        maskedValue = mask(maskedValue, ['(99) 9 9999-9999']);
    }else if(field === "cep"){
        maskedValue = mask(maskedValue, ['99999-999']);        
    }
    return(field, maskedValue)
}

export const CapitalizedValue = (value) => {
    const inputValue = value;
    // Capitaliza a primeira letra de cada palavra
    const capitalizedWords = inputValue.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    const newValue = capitalizedWords.join(' ');
    return newValue
};

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

export const GetAddressLocalStorage = () => {
    // Obtendo os dados do local storage
    const addressData = JSON.parse(localStorage.getItem('student'));
    const { cep, logadouro, residenceNumber, city, neighborhood, federativeUnit } = addressData[0]
    // Verificando se os dados existem
    if (addressData) {
        // Convertendo a string JSON de volta para um objeto
        return { cep, logadouro, residenceNumber, city, neighborhood, federativeUnit } 
    }else{
        return false;
    }
}

export const GetUidLocalStorage = () => {
    // Obtendo os dados do local storage
    const uidStudent = JSON.parse(localStorage.getItem('student'));
    const { uid } = uidStudent[0]
    // Verificando se os dados existem
    if (uidStudent) {
        // Convertendo a string JSON de volta para um objeto
        return uid
    }else{
        return false;
    }
}

export const AddUidResponsibleStudentArray = (key, value) => {
    
    // Verifica se já existe um array no localStorage
    const storedArray = JSON.parse(localStorage.getItem(key)) || [];
    
    // Adiciona o novo valor ao array apenas se ele ainda não existir
    if (!storedArray.includes(value)) {
        storedArray.push(value);
        localStorage.setItem(key, JSON.stringify(storedArray));
    } else {
        console.log(`O valor "${value}" já existe no array.`);
    }
}



