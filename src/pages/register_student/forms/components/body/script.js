import { mask } from 'remask';
import { MaskList } from '../../../../../constants/mask';

export const ApplyChew = (fieldName, fieldValue) => {
    let maskedValue;

    switch (fieldName) {
        case 'studentHeight':
            maskedValue = mask(fieldValue, MaskList.height);
            break;
        case 'studentWeight':
            maskedValue = mask(fieldValue, MaskList.weight);
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
};

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
};
