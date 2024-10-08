import { mask } from 'remask';

export const fetchDocumentID = async (data, setValue) => {
    //função para passar os valores para os campos;
    let maskedValue = null;
    for (const [key, value] of Object.entries(data)) {
        const formattedDate = convertDate(data.birthDate);
        if(key === "birthDate")
        {
            setValue('birthDate', formattedDate); // Define o valor do campo com base nos dados recuperados
        }else {
            maskedValue = applyMask(key, value);
            setValue(key, maskedValue); // Define o valor do campo com base nos dados recuperados
        }
    }
};

export const convertDate = (dateString) => {
    // Função para converter a data YYYY-MM-DD
    const parts = dateString.split("/");
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Retorna no formato "YYYY-MM-DD"
};

export const formattedDate = (birthDate) => {
    //Formata data em DD/MM/AAAA
    const newDate = new Date(birthDate);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = newDate.getFullYear();
    
    return `${day}/${month}/${year}`;
}

export const applyMask = (key, value) => {
    //Função para aplicar as mascara nos campos
    let maskedValue = value;
    let field = key;

    if (field === 'phoneUsers')
    {
        maskedValue = mask(maskedValue, ['(99) 9 9999-9999']);
    }else if(field === "cep"){
        maskedValue = mask(maskedValue, ['99999-999']);        
    }
    return(field, maskedValue)
}

export const capitalizedValue = (event) => {
    const inputValue = event.target.value;
    // Capitaliza a primeira letra de cada palavra
    const capitalizedWords = inputValue.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    const newValue = capitalizedWords.join(' ');
    return newValue
};