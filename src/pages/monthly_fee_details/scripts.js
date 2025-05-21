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

export const CalculateValueFeesInterest  = (valuePercentage, valueInstallment) => {
    //* Função para calcular o valor da taxa de juros com base no valor da parcela e na porcentagem */
    if(valuePercentage === 0 || valueInstallment === 0) return 0
    if(valuePercentage === '' || valueInstallment === '') return 0
    
    // Converte a porcentagem para decimal
    const percentageDecimal = parseFloat(valuePercentage) * 100;
    const numberValue = parseFloat(valueInstallment) / 100; // Converte para decimal
    
    // Calcula o valor da taxa
    const valueCalculated = numberValue * percentageDecimal 

    return valueCalculated
};