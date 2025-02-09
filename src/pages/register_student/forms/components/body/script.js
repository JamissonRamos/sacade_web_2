import { mask } from 'remask';
import { MaskList } from '../../../../../constants/mask';
// import { useSearchCep } from '../../../../../services/cep';

export const MaskInput = (fieldName, fieldValue) => {
    let maskedValue;
    console.log('fieldName script', fieldName);
    console.log('fieldValue script', fieldValue);

    if (fieldName === false || fieldValue === false) return;
    
    switch (fieldName) {
        case 'studentHeight':
            console.log('pasosou');
            // console.log('fieldValue', fieldValue);
            maskedValue = mask(fieldValue, MaskList.height);
            break;
        case 'studentWeight':
            maskedValue = mask(fieldValue, MaskList.weight);
            break;
        default:
            break;
    }

    console.log('pasosou');
    console.log('maskedValue:', maskedValue);
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

export const ConvertDate = (dateString) => {
    // Função para converter a data YYYY-MM-DD
    const parts = dateString.split("/");
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Retorna no formato "YYYY-MM-DD"
};

export const FormattedDate = (birthDate) => {
    const newDate = new Date(birthDate);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = newDate.getFullYear();
    
    return `${day}/${month}/${year}`;
}

export const AgeCalculation = (birth) => {
    //Função para calcular idade, retorna true >= 18 e false < 18
    const currentDate = new Date(); // Data atual
    const birthDate = new Date(ConvertDate(birth)); // Converter a data recebida em objeto Date

    // Calcular a idade
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    // Ajustar a idade caso o mês ou dia atual seja antes do aniversário
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    // Retornar true se maior ou igual a 18, false caso contrário
    return age >= 18;
}






// export const FetchCep = () => {
    
//     const { fetchCep, isLoading: loadingCep} =  useSearchCep();

    
//     const searchCep = async (cep) => {
//         const cepValue = cep;

//         try {
            
//             if (!cepValue) return{success: false, message: "Cep não foi fornecido."}
//             if (cepValue.length <= 8) return{success: false, message: "Cep não foi digitado corretamente."}
            
//             const result = await fetchCep(cep);
//             const { success, data } = result
            
//             if (success){
//                 return{
//                     success: true,
//                     message: 'Cep Encontrado',
//                     data: data
//                 }
//             }else{
//                 return{
//                     success: false,
//                     message: 'Cep não foi encontrado'
//                 }
//             }
//         } catch (error) {
//             console.log('Erro na busca do cep: ', error.message);
    
//             return{
//                 success: false,
//                 message: 'Deu um erro na busca do cep'
//             }
            
//         }

//     }

//     return {
//         searchCep,
//         loadingCep
//     }

// };

// export const CreateDataStudentLocalStorage = (nameDocument, data) => {
    
//     //Obtendo o obj do alunos que foi selecionado
//     localStorage.setItem(nameDocument, JSON.stringify([data]));
// }

// export const AddUidArray = (key, value) => {
//     /* Função para add uid de quem foi cadastrado */
    
//     // Verifica se já existe um array no localStorage
//     const storedArray = JSON.parse(localStorage.getItem(key)) || [];
    
//     // Adiciona o novo valor ao array apenas se ele ainda não existir
//     if (!storedArray.includes(value)) {
//         storedArray.push(value);
//         localStorage.setItem(key, JSON.stringify(storedArray));
//     } else {
//         console.log(`O valor "${value}" já existe no array.`);
//     }
// }

