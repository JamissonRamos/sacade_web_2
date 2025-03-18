import { mask } from 'remask';

export const CapitalizedValue = (value) => {
    const inputValue = value || false

    if (!inputValue) return;

    // Capitaliza a primeira letra de cada palavra
    const capitalizedWords = inputValue.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    const newValue = capitalizedWords.join(' ');
    return newValue
};

export const ApplyMask = (key, value) => {
    //Função para aplicar as mascara nos campos
    let maskedValue = value;
    let field = key;

    if(field === "cep"){
        maskedValue = mask(maskedValue, ['99999-999']);        
    }
    return(field, maskedValue)
}

export const FormattedDate = (birthDate) => {
    const newDate = new Date(birthDate);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = newDate.getFullYear();
    
    return `${day}/${month}/${year}`;
};
