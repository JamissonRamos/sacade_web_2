import { mask } from 'remask';
import { MaskList } from '../../../../../constants/mask';

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