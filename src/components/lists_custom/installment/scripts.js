
export const FormatNumberMoney = (valuePercentage, valueInstallment) => {
    /* 
        - Função para converter porcentagem digitada em R$;
    */
    if(valuePercentage === 0 || valueInstallment === 0) return 0
    if(valuePercentage === '' || valueInstallment === '') return 0
    
    // Converte a porcentagem para decimal
    const percentageDecimal = parseFloat(valuePercentage) * 100;
    const numberValue = parseFloat(valueInstallment) / 100; // Converte para decimal

    
    // Calcula o valor da taxa
    const valueCalculated = numberValue * percentageDecimal;
    
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valueCalculated);
};

export const FormatNumberPercentage = (value) => {
    /* Função para converter de numero para porcentagem */
    if(value === 0) return 0
    if(value=== '') return 0
    
    return (value * 100).toFixed(2) + "%"; // Define o valor formatado
};

export const ParseCurrencyToNumber = (currency) => {
// Função para converter o valor monetário para número
    if(currency === '') return;
    if(currency === 0) return;
    if(currency === 'R$ NaN') return  "R$ 0,00";
    
    return parseFloat(
        currency
            .replace("R$", "") // Remove símbolo da moeda
            .replace(/\./g, "") // Remove pontos de milhar
            .replace(",", ".")  // Troca vírgula decimal por ponto
            .trim()
    );
};

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