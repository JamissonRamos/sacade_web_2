
export const FormatCurrency = (value) => {   
    /* 
        - Função para converter em Dinheiro  mais valor como string R$ 0,00;
    */
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

export const FormatNumberCurrency = (value) => {   
    /* 
        - Função para converter em Dinheiro, value esta como number R$ 0,00;
    */
    if(value === 0) return
    if(value === '') return

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};
export const FormatPercentage  = (value) => {
    /* Formata string em porcentagem */
    if(value === 0) return 0
    if(value === '') return 0

    let inputValue = value.replace(/[^\d]/g, ""); // Remove tudo que não for número

    const numberValue = parseFloat(inputValue) / 100; // Converte para decimal
    return(numberValue.toFixed(2)  ); // Define o valor formatado
};
export const FormatNumberPercentage  = (value) => {
    /* Função para converter de numero para porcentagem */
    if(value === 0) return 0
    if(value === '') return 0
    //const numberValue = parseFloat(value) / 100; // Converte para decimal
    return (value * 100).toFixed(2) ; // Define o valor formatado
};
export const FormatPercentageNumber = (valuePercentage) => {
    /* 
        - Função para converter porcentagem em Número;
    */
    if(valuePercentage === 0) return
    
    // Converte a porcentagem para decimal
    const percentageDecimal = parseFloat(valuePercentage) / 100;    
    return percentageDecimal
};
export const FormatMoneyNumber = (valueInstallment) => {
    /* 
        - Função para converter formato em dinehro em number digitada em R$;
    */
    if(valueInstallment === ''|| valueInstallment === 0) return
    
    let inputValue = valueInstallment.replace(/[^\d]/g, ""); // Remove tudo que não for número
    const numberValue = parseFloat(inputValue) / 100; // Converte para decimal

    return numberValue
};
export const FormatPercentageMoney = (valuePercentage, valueInstallment) => {
    /* 
        - Função para converter porcentagem digitada em R$;
    */
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

export const FormattedDate = (birthDate) => {
    const newDate = new Date(birthDate);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = newDate.getFullYear();
    
    return `${day}/${month}/${year}`;
}

export const AddDaysToDate = (date, counter) => {
/* 
    - Função para adicionar dias nas parcelas;
    - date, data inicial, data da primeira parcela
    - counter, como se fosse o mês, no loop tem o contador de vezes; 
*/
    const [day, month, year] = date.split('/').map(Number);
    const result = new Date(year, month - 1 + counter, day);
    
    // Ajusta o dia para evitar problemas com meses mais curtos
    if (result.getDate() !== day) {
        result.setDate(0); // Define para o último dia do mês anterior
    }
    
    return FormattedDate(result);
}
