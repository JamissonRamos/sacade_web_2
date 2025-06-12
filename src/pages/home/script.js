const statusMap = {
    //nomeando status de user logado no sistema 
    Administrador: 1,
    Assistente: 2,
    Visitante: 3,
};

const sectionsAuth = {
    //Atribundo aos status do user logado as permições de acesso
    Students: [ 1, 2, 3],
    RegisterStudent: [1, 2],
    Financial: [1]
};

export const HasAccess = (sections, status) => {
    //Função para mepar status do user logado e sua permissões 
    const statusIndex = statusMap[status]; //Recuperar o status do user e pegar o index dele e atribir corretamente
    const result = sectionsAuth[sections]?.includes(statusIndex) || false; // Verifica se o status tem permissão    
    return result;
};


/* Calculos de mensalidade pagas e atrasadas */
const hoje = new Date();
const mesAtual = hoje.getMonth() + 1; // getMonth() retorna 0-11
const anoAtual = hoje.getFullYear();

export const CalculateAllPaymentsMonth = (data) => {
    //Função para Calcuar todos os pagamentos do mes
    let totalPayments = 0;
    const totalPaid = data.reduce((sum, payment) => {
        // Converte a string de data (dd/mm/yyyy) em partes
        const [dia, mes, ano] = payment.paymentDate.split('/').map(Number);
        // Verifica se o pagamento foi feito no mês e ano atuais
        if (mes === mesAtual && ano === anoAtual) {
            totalPayments ++
            return sum + payment.amountPaid;
        }
        return sum;
    }, 0);

    return {totalPaid, totalPayments}
}

export const CalculateAllDelaysMonth = (data) => {
    //Função para Calcuar todos os atrasos do mes
    const dataInstallments = data || [];
    let totalOverdueInstallments = 0 //totalParcelasVencidas
    let totalAmountDue = 0 //totalValorDevido

    dataInstallments.forEach(({statusPayment, ...newInstallments}) => {

        if(statusPayment === false){
            // Converter dueDate para objeto Date
            const [dia, mes, ano] = newInstallments.dueDate.split('/').map(Number);
            const expirationDate = new Date(ano, mes - 1, dia);

            // Verificar se a parcela está vencida (antes de hoje)
            if (expirationDate < hoje) {  
                // Verificar se o vencimento foi no mês atual
                if (mes === mesAtual && ano === anoAtual) {
                    totalOverdueInstallments ++            
                    let valueDueFixed = newInstallments.valueInstallment || 0;
                    let valueDue = newInstallments.valueInstallment || 0;
                    let daysDelay = Math.floor((hoje - expirationDate) / (1000 * 60 * 60 * 24));

                    // Calcular juros/fees
                    if (newInstallments.fees) {
                        const feeCharged = newInstallments.fees * 100
                        const feeChargedMonetary = Math.round(( valueDueFixed * feeCharged)) / 100
                        valueDue += feeChargedMonetary
                    }

                     // Calcular juros diários
                    if (newInstallments.interestDaily) {
                        const valueInteres = newInstallments.interestDaily;
                        //Calculando e deixnado valor arredondado valor do juro em cima do valor da parcela
                        const interestCharged = Math.round(( valueDueFixed *  valueInteres ) * 100) / 100;
                        //Calcular valor do juro com a qtd de dias atraso
                        const interestChargedMonetary =  Math.round(( interestCharged * daysDelay ) * 100) / 100 ;
                        //Repassando valor do calculo do juro para soma total
                        valueDue += interestChargedMonetary;
                    }   
                    totalAmountDue += Math.round((valueDue) * 100 ) / 100 
                }
            }
        }
    });

    return {totalAmountDue,totalOverdueInstallments}
    
}

export const CalculateAllDelays = (data) => {
    //Função para Calcuar todos os atrasos 
    const dataInstallments = data || [];
    let allTotalOverdueInstallments = 0 //totalParcelasVencidas
    let allTotalAmountDue = 0 //totalValorDevido

    dataInstallments.forEach(({statusPayment, ...newInstallments}) => {

        if(statusPayment === false){
            // Converter dueDate para objeto Date
            const [dia, mes, ano] = newInstallments.dueDate.split('/').map(Number);
            const expirationDate = new Date(ano, mes - 1, dia);

            // Verificar se a parcela está vencida (antes de hoje)
            if (expirationDate < hoje) {  
                // Verificar se o vencimento foi no mês atual
                allTotalOverdueInstallments ++            
                let valueDueFixed = newInstallments.valueInstallment || 0;
                let valueDue = newInstallments.valueInstallment || 0;
                let daysDelay = Math.floor((hoje - expirationDate) / (1000 * 60 * 60 * 24));

                // Calcular juros/fees
                if (newInstallments.fees) {
                    const feeCharged = newInstallments.fees * 100
                    const feeChargedMonetary = Math.round(( valueDueFixed * feeCharged)) / 100
                    valueDue += feeChargedMonetary
                }

                    // Calcular juros diários
                if (newInstallments.interestDaily) {
                    const valueInteres = newInstallments.interestDaily;
                    //Calculando e deixnado valor arredondado valor do juro em cima do valor da parcela
                    const interestCharged = Math.round(( valueDueFixed *  valueInteres ) * 100) / 100;
                    //Calcular valor do juro com a qtd de dias atraso
                    const interestChargedMonetary =  Math.round(( interestCharged * daysDelay ) * 100) / 100 ;
                    //Repassando valor do calculo do juro para soma total
                    valueDue += interestChargedMonetary;
                }  
                
                // Calcular juros mensais
                if (newInstallments.interestMonthly) {
                    const valueInteres = newInstallments.interestMonthly;
                    const monthsDelay = daysDelay / 30;
                    //Calculando e deixnado valor arredondado valor do juro em cima do valor da parcela
                    const interestCharged = Math.round(( valueDueFixed *  valueInteres ) * 100) / 100;
                    //Calcular valor do juro com a qtd de dias atraso
                    const interestChargedMonetary =  Math.round(( interestCharged * monthsDelay ) * 100) / 100 ;
                    //Repassando valor do calculo do juro para soma total
                    valueDue += interestChargedMonetary;
                }

                    // Calcular juros anuais
                if (newInstallments.interestAnnual) {
                    const valueInteres = newInstallments.interestAnnual;
                    const yearsDelay = daysDelay / 365;
                    //Calculando e deixnado valor arredondado valor do juro em cima do valor da parcela
                    const interestCharged = Math.round(( valueDueFixed *  valueInteres ) * 100) / 100;
                    //Calcular valor do juro com a qtd de dias atraso
                    const interestChargedMonetary =  Math.round(( interestCharged * yearsDelay ) * 100) / 100 ;
                    //Repassando valor do calculo do juro para soma total
                    valueDue += interestChargedMonetary;
                }

                allTotalAmountDue += Math.round((valueDue) * 100 ) / 100 
            
            }
        }
    });

    return {allTotalAmountDue, allTotalOverdueInstallments}
    
}


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