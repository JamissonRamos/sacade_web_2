
const styledBadge = (status, daysLate) => 
{    
    switch (status) {
        case 1: //Em Aberto
            return { bg: "#00A791", daysLate: daysLate, textLabel: "Em Aberto" };
        case 2: //Em Atrasado
            return { bg: "#dc3545", daysLate: daysLate,  textLabel: "Em Atrasado"  };
        case 3: //Fechado
            return { bg: "#003CC7", daysLate: daysLate,  textLabel: "Fechado" };
        default: //Erro
            return { bg: "#FF7F50",  daysLate: daysLate,  textLabel: "Null" };
    }
}

export const SetStatus = (status, dueDate) => {
/* Função para definir o status da parcela */

    //Data atual Zerar horas, minutos, segundos e milissegundos para comparar apenas a data
    const today = new Date().setHours(0, 0, 0, 0); 

    // Converter a dueDate para um objeto Date
    const [day, month, year] = dueDate.split("/");
    const dueDateObj = new Date(year, month - 1, day); // Mês em JavaScript começa do zero

    // Calcular dias de atraso
    const diffTime = today - dueDateObj; // Diferença em milissegundos
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Converter para dias
    
    //Vlida o status, treu sempre fechado, false aberto ou em atraso
    if(status){
        return styledBadge(3, 0)
    }else if (dueDateObj < today) {
        
        return styledBadge(2, diffDays);
    }else if (dueDateObj > today) {
        return styledBadge(1, 0);
    }else{
        return styledBadge(0, 0);
    }
};

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
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};