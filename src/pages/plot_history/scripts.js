// import { mask } from 'remask';
// import { MaskList } from '../../../constants/mask';

const SetStatus = (status, dueDate) => {
/* Função para definir o status da parcela */

    const diffDays = DaysLate(status, dueDate );

    //Passar tipo de status para parcela
    if(status){
        return { bg: "#003CC7", textLabel: "Fechado" };
    }else if (diffDays > 0) {
        return { bg: "#dc3545", textLabel: "Em Atraso" };
    }else if (diffDays <= 0) {
        return { bg: "#00A791", textLabel: "Em Dias" };
    }else{
        return { bg: "#FF7F50", textLabel: "Error" };
    }
};
const DaysLate = (status, dueDate) => {
/* Função para definir os dias de atrasos*/

    //Caso seja True retorna 0 pois esta pago não precisa gerar calculo
    if(status) return  0;

    //Data atual Zerar horas, minutos, segundos e milissegundos para comparar apenas a data
    const today = new Date().setHours(0, 0, 0, 0); 

    // Converter a dueDate para um objeto Date
    const [day, month, year] = dueDate.split("/");
    const dueDateObj = new Date(year, month - 1, day); // Mês em JavaScript começa do zero

    // Calcular dias de atraso
    const diffTime = today - dueDateObj; // Diferença em milissegundos
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Converter para dias
    
    return diffDays;
};

export const AddPaymentStatusProperties = (data) => {
    /* Adicionar Status de pagamentos da parcela  */
    const newData = data.map(({ dueDate, statusPayment, ...props }) => {
        const result = SetStatus(statusPayment, dueDate );
        const {bg, textLabel} = result;

        return {
            ...props, 
            dueDate, 
            statusPayment, 
            daysLate: DaysLate(statusPayment, dueDate), 
            statusLabel: textLabel,
            styledComponent: bg
        }
    })

    return newData
}
















// ================= Função não usada ainda =======================
// const removeCharacters = (value) =>{
//     let newValue = value

//     if (newValue && typeof newValue === 'string') {
//         // value.str é uma string
//         newValue = newValue.replace(/[^\d]/g, ""); // Remove tudo que não for número
//     }

//     return newValue;
    
// }

// export const ConvertNumberToCurrency = (value) => {
//     // Formata o número para o formato de monetario
//     return new Intl.NumberFormat('pt-BR', {
//         style: 'currency',
//         currency: 'BRL',
//     }).format(value);

// }





// export const OnlyNumber = (value) => {
//     /* Função para deixa somente numeros */

//     if (/[^0-9]/.test(value)){
//         const maskedValue = mask(value, MaskList.onlyNumber )
//         return maskedValue;
//     }else{
//         return value;
//     }

// };

// export const FormatCurrency = (value) => {   
//     /* 
//         - Função para converter numero em Dinheiro
//         - retorno no formato de R$ 0,00 
//     */
//     if(value === 0) return 'R$ 0,00'
//     if(value === '') return 'R$ 0,00'

//     // Remove todos os caracteres que não são dígitos
//     const cleanedValue = value.replace(/\D/g, '');
//     const numberValue = parseInt(cleanedValue, 10) / 100; // Divide por 100 para ajustar as casas decimais
    
//     return ConvertNumberToCurrency(numberValue);
// };

// export const FormatNumberPercentage  = (value) => {
//     /* Função para converter de numero para porcentagem */
//     if(value === 0) return 0
//     if(value === '') return 0
    
//     const numberValue = parseFloat(value) * 100; // Converte para decimal
//     return numberValue.toFixed(2) ; // Define o valor formatado
// };

// export const ConvertMoneyNumber = (value) => {
//     /* 
//         - Função para converter valor ,ometario em numero ;
//     */
//     if(value === ''|| value === 0) return

//     const valueReceived = removeCharacters(value) //Remove tudo que não for número

//     const convertValue = parseFloat(valueReceived) / 100; // Converte para decimal

//     return convertValue
// };

// export const ConvertNumberPercentage = (value) => {
//     /* Função para converter de numero para porcentagem */

//     if(value === 0) return
//     if(value === '') return

//     let nweValue = removeCharacters(value) //Remove tudo que não for número

//     const convertValue = parseFloat(nweValue) / 100; // Converte para decimal
//     return(convertValue.toFixed(2)  ); // Define o valor formatado
// };

// export const ConvertPercentageMoney = (percentage, valueInstallment) => {
//     /* 
//         - Função para converter porcentagem digitada em valor monetário;
//     */
//     if(percentage === 0 || percentage === '' ) return 0
//     if(valueInstallment === 0 || valueInstallment === '') return 0
    
//     // Converte a porcentagem para decimal
//     const percentageDecimal = parseFloat(percentage) / 100;
//     let clearValueInstallment = removeCharacters(valueInstallment); //valueInstallment.replace(/[^\d]/g, ""); // Remove tudo que não for número

//     const numberValue = parseFloat(clearValueInstallment) / 100; // Converte para decimal
    
//     // Calcula o valor da taxa
//     const valueCalculated = numberValue * percentageDecimal;
//     const newValueMoney = ConvertNumberToCurrency(valueCalculated);
    
//     return newValueMoney
// };

// export const ConvertDate = (dateString) => {
//     // Função para converter a data YYYY-MM-DD 2
//     const parts = dateString.split("/");
//     return `${parts[2]}-${parts[1]}-${parts[0]}`; // Retorna no formato "YYYY-MM-DD"
// };

// export const FormattedDate = (birthDate) => {
//     const newDate = new Date(birthDate);
//     const day = String(newDate.getDate()).padStart(2, '0');
//     const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
//     const year = newDate.getFullYear();
    
//     return `${day}/${month}/${year}`;
// }
