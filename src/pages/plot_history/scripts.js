
const setStatus = (status, diffDays) => {
/* Função para definir o status da parcela */

    //Definindo styled da mensalidade
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

const daysLate = (status, date) => {
/* Função para definir os dias de atrasos*/

    //Caso seja True retorna 0 pois esta pago não precisa gerar calculo
    //if(status) return  0;

    //Data atual Zerar horas, minutos, segundos e milissegundos para comparar apenas a data
    const today = new Date().setHours(0, 0, 0, 0); 

    // Converter a date para um objeto Date
    const [day, month, year] = date.split("/");
    const dueDateObj = new Date(year, month - 1, day); // Mês em JavaScript começa do zero

    // Calcular dias de atraso
    const diffTime = today - dueDateObj; // Diferença em milissegundos
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Converter para dias
    
    return diffDays;
};

const paymentDelayDays = (paymentDate, dueDate) => {
    /* Função para calcular dias de atraso (ambas as datas em DD/MM/YYYY) */
    
    if (!paymentDate || !dueDate) return null; // Verifica se as datas existem

    // Converte paymentDate (DD/MM/YYYY) para Date Object'
    const [payDay, payMonth, payYear] = paymentDate.split('/');
    const payDate = new Date(payYear, payMonth - 1, payDay);
    payDate.setHours(0, 0, 0, 0); // Normaliza a hora

    // Converte dueDate (DD/MM/YYYY) para Date Object
    const [dueDay, dueMonth, dueYear] = dueDate.split('/');
    const dueDateObj = new Date(dueYear, dueMonth - 1, dueDay);
    dueDateObj.setHours(0, 0, 0, 0); // Normaliza a hora

    // Calcula a diferença em dias
    const diffTime = payDate - dueDateObj; // Diferença em milissegundos
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Converte para dias

    return diffDays; // Retorna positivo (atraso), zero (no dia) ou negativo (adiantado)
};

export const AddPaymentStatusProperties = (data) => {
    /* Adicionar Status de pagamentos da parcela  */
    const newData = data.map(({ dueDate, statusPayment, dataPayment, ...props }) => {
        // Se statusPayment for treu considere a função de pagamento, caso contrario considere a função de vencimento
        const totalDays = statusPayment ? paymentDelayDays(dataPayment, dueDate) : daysLate(statusPayment, dueDate);
        // Pegando o styld da mensalidade de acorodo o status e seus dias de atraso
        const result = setStatus(statusPayment, totalDays);
        const {bg, textLabel} = result;

        return {
            ...props, 
            dueDate, 
            dataPayment,
            statusPayment, 
            daysLate: totalDays, 
            statusLabel: textLabel,
            styledComponent: bg
        }
    })

    return newData
}