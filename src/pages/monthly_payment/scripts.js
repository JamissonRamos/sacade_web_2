export const FormatToCurrency = (value) => {    
    // Função para formatar número para moeda
    if(value === '') return "R$ 0,00";
    if(value === 0) return  "R$ 0,00";
    if(value === undefined) return  "R$ 0,00";

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};

export const FormatNumberCurrency = (value) => {   
    /* 
        - Função para converter em Dinheiro  mais valor como string R$ 0,00;
    */
    if(value === 0) return
    if(value === '') return
    if(value === undefined) return ;

    // Remove todos os caracteres que não são dígitos
    const cleanedValue = value.replace(/\D/g, '');
    const numberValue = parseInt(cleanedValue, 10) / 100; // Divide por 100 para ajustar as casas decimais
    // Formata o número para o formato de moeda
    const formattedValue = FormatToCurrency(numberValue);
    
    return formattedValue
};

export const ParseCurrencyToNumber = (currency) => {
// Função para converter o valor monetário para número
    if(currency === '') return;
    if(currency === 0) return;
    if(currency === 'R$ NaN') return  "R$ 0,00";
    if(currency === undefined) return  "R$ 0,00";
    
    return parseFloat(
        currency
            .replace("R$", "") // Remove símbolo da moeda
            .replace(/\./g, "") // Remove pontos de milhar
            .replace(",", ".")  // Troca vírgula decimal por ponto
            .trim()
    );
};

export const FormattedDate = (birthDate) => {
    const newDate = new Date(birthDate);
    const day = String(newDate.getDate()).padStart(2,'0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = newDate.getFullYear();
    
    return `${day}/${month}/${year}`;
}

//Função para formatar a data no formato 'dd/mm/yyyy' para o formato 'mm/dd/yyyy'
export const ConvertDateBrUSS = (dateStr) => {
    console.log('dateStr', dateStr);
    
    const [day, month, year] = dateStr.split('/');
    return (`${year} ${month} ${day}`);
}

//Função para formatar a data no formato 'aaa/mm/dd' formato da iso
export const ParseDateBR = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(year, month - 1, day);
}