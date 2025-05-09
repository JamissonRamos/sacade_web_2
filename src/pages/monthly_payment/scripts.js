// // const isUnderage = (birthDate) => {
// //     /*  verificar se o aluno é menor de idade ou não */

// //     // Se a data de nascimento não for fornecida ou inválida, retorna false (não é menor de idade)
// //     if (!birthDate) return false; // Caso a data seja inválida ou não fornecida
// //         const today = new Date();
// //         const birth = new Date(birthDate);

// //         const age = today.getFullYear() - birth.getFullYear();
// //         const monthDiff = today.getMonth() - birth.getMonth();
// //         const dayDiff = today.getDate() - birth.getDate();

// //         // Ajuste caso o aniversário ainda não tenha acontecido este ano
// //         if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
// //         return age - 1 < 18;
// //     }
// //     return age < 18;
// // };

// // export const AddAttributeList = async (data) => {
// //     /*  adicionar um novo campo ao objeto verificando se é menor ou de maior */
// //     // Adiciona o atributo isMinor a cada objeto no array data
// //     const addAttribute = await data && data.map((item) => {
// //         const { birthDate } = item;
// //         const isMinor = isUnderage(birthDate)
// //         return {
// //             ...item,
// //             isMinor,
// //         }
// //     })

// //     // Filtrar os dados para mostrar apenas os alunos ativos ou bloqueados
// //     // e ordenar pelo nome
// //     if(addAttribute.length > 0)
// //     {
// //         const newData = await addAttribute
// //             .filter(obj => obj.status === 'ativo' || obj.status === 'bloqueado')
// //             .sort((a, b) => a.firstName?.localeCompare(b.firstName));
        
// //         return newData;
// //     }else{
// //         console.log('Error ao tentar filtra e ordena alunos');
// //     }
// // }
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

// export const CalculateValueFeesInterest  = (valuePercentage, valueInstallment) => {
//     //* Função para calcular o valor da taxa de juros com base no valor da parcela e na porcentagem */
//     if(valuePercentage === 0 || valueInstallment === 0) return 0
//     if(valuePercentage === '' || valueInstallment === '') return 0
    
//     // Converte a porcentagem para decimal
//     const percentageDecimal = parseFloat(valuePercentage) * 100;
//     const numberValue = parseFloat(valueInstallment) / 100; // Converte para decimal
    
//     // Calcula o valor da taxa
//     const valueCalculated = numberValue * percentageDecimal 

//     return valueCalculated
// };

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





// // // export const FormatNumberPercentage = (value) => {
// // //     /* Função para converter de numero para porcentagem */
// // //     if(value === 0) return 0
// // //     if(value=== '') return 0
// // //     return (value * 100).toFixed(2) + "%"; // Define o valor formatado
// // // };



