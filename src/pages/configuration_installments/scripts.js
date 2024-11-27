
export const FormatCurrency = (value) => {   
    if(value === 0) return
    if(value === '') return

    // Remove todos os caracteres que não são dígitos
    const cleanedValue = value.replace(/\D/g, '');
    const numberValue = parseInt(cleanedValue, 10) / 100; // Divide por 100 para ajustar as casas decimais
    // Formata o número para o formato de moeda
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(numberValue);
};

export const FormatPercentage  = (value) => {
    if(value === 0) return
    if(value === '') return
    console.log(value);
    

    let inputValue = value.replace(/[^\d]/g, ""); // Remove tudo que não for número

    const numberValue = parseFloat(inputValue) / 100; // Converte para decimal
    return(numberValue.toFixed(2) + "%" ); // Define o valor formatado
};



export const FormatPercentageMoney = (valuePercentage, valueInstallment) => {
    if(valuePercentage === 0 || valueInstallment === 0) return
    if(valuePercentage === '' || valueInstallment === '') return
    
    // Converte a porcentagem para decimal
    const percentageDecimal = parseFloat(valuePercentage) / 100;
    let inputValue = valueInstallment.replace(/[^\d]/g, ""); // Remove tudo que não for número

    const numberValue = parseFloat(inputValue) / 100; // Converte para decimal
    
    // Calcula o valor da taxa
    const valueCalculated = numberValue * percentageDecimal;
    
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valueCalculated);
};