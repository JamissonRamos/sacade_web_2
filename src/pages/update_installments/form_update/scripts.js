
import { mask } from 'remask';
import { MaskList } from '../../../constants/mask';

const removeCharacters = (value) =>{
    let newValue = value

    if (newValue && typeof newValue === 'string') {
        // value é uma string
        newValue = newValue.replace(/[^\d]/g, ""); // Remove tudo que não for número
    }
    return newValue;
}

export const ConvertDate = (dateString) => {
    // Função para converter a data YYYY-MM-DD 2
    const parts = dateString.split("/");
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Retorna no formato "YYYY-MM-DD"
};

export const FormattedDate = (birthDate) => {
    const newDate = new Date(birthDate);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = newDate.getFullYear();
    
    return `${day}/${month}/${year}`;
}

export const ConvertNumberToCurrency = (value) => {
    // Formata o número para o formato de monetario
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);

}

export const FormatNumberPercentage  = (value) => {
    /* Função para converter de numero para porcentagem */
    if(value === 0) return 0
    if(value === '') return 0
    
    const numberValue = parseFloat(value) * 100; // Converte para decimal
    return numberValue.toFixed(2) ; // Define o valor formatado
};

export const OnlyNumber = (value) => {
    /* Função para deixa somente numeros */

    if (/[^0-9]/.test(value)){
        const maskedValue = mask(value, MaskList.onlyNumber )
        return maskedValue;
    }else{
        return value;
    }
};

export const FormatCurrency = (value) => {   
    /* 
        - Função para converter numero em Dinheiro
        - retorno no formato de R$ 0,00 
    */
    if(value === 0) return 'R$ 0,00'
    if(value === '') return 'R$ 0,00'

    // Remove todos os caracteres que não são dígitos
    const cleanedValue =  removeCharacters(value) //value.replace(/\D/g, '');
    const numberValue = parseInt(cleanedValue, 10) / 100; // Divide por 100 para ajustar as casas decimais
    
    return ConvertNumberToCurrency(numberValue);
};

export const ConvertMoneyNumber = (value) => {
    //- Função para converter valor monetario em numero;

    if(value === ''|| value === 0) return

    const valueReceived = removeCharacters(value) //Remove tudo que não for número

    const convertValue = parseFloat(valueReceived) / 100; // Converte para decimal

    return convertValue
};

export const ConvertPercentageMoney = (percentage, valueInstallment) => {
    /* 
        - Função para converter porcentagem digitada em valor monetário;
    */
    if(percentage === 0 || percentage === '' ) return 0
    if(valueInstallment === 0 || valueInstallment === '') return 0
    
    // Converte a porcentagem para decimal
    const percentageDecimal = parseFloat(percentage) / 100;
    let clearValueInstallment = removeCharacters(valueInstallment); //valueInstallment.replace(/[^\d]/g, ""); // Remove tudo que não for número

    const numberValue = parseFloat(clearValueInstallment) / 100; // Converte para decimal
    
    // Calcula o valor da taxa
    const valueCalculated = numberValue * percentageDecimal;
    const newValueMoney = ConvertNumberToCurrency(valueCalculated);
    
    return newValueMoney
};

export const ConvertNumberPercentage = (value) => {
    /* Função para converter de numero para porcentagem */

    if(value === 0) return
    if(value === '') return

    let nweValue = removeCharacters(value) //Remove tudo que não for número

    const convertValue = parseFloat(nweValue) / 100; // Converte para decimal
    return(convertValue.toFixed(2)  ); // Define o valor formatado
};