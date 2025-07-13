// Obter o mês e ano atual
const currentDate = new Date();

function joinData (dataStudents, dataInstallments) {
    /* 
        -Juntar os dados dos 2 arrays
        -Ligando os array atrves do uid de cada arrya
    */
    const result = dataStudents.map((student) => {
        const filterInstallments = dataInstallments.filter((installment) => {
            return student.uidStudent === installment.uidStudent
        });
        return {
            ...student,
            dataInstallments: filterInstallments
        };
    })

    return result;
}

function filterOverdueInstallments (data) {
/* 
    - Filtrar todas as parcelas vencidas do aluno;
*/
    const result = data.map((item) => {
        const { dataInstallments, ...rest } = item
        
        //Filtrar parcelas vencidas
        const overdueInstallments = dataInstallments.filter((installment) => {

            if(installment.statusPayment) return null

            const [dia, mes, ano] = installment.dueDate.split('/').map(Number);
            const dateExpiration = new Date(ano, mes - 1, dia);

            return (
                dateExpiration < currentDate
            );  
            
        })

        if(overdueInstallments.length > 0){
            //Retorna parcelas vencidas e dados do aluno 
            return {
                ...rest,
                overdueInstallments: overdueInstallments
            }
            
        }else return null
    })

    return result.filter((student) => student !== null)    
}

function cacularInterest (data) {

    const result = data.map((student) => {
        const { overdueInstallments, ...rest } = student;

        const updatedInstallments = overdueInstallments.map((installment) => {
            const {dueDate, valueInstallment, fees, interestDaily, interestMonthly, interestAnnual } = installment;

            // Converter dueDate para objeto Date
            const [dia, mes, ano] = dueDate.split('/').map(Number);
            const expirationDate = new Date(ano, mes - 1, dia);
            let daysDelay = Math.floor((currentDate - expirationDate) / (1000 * 60 * 60 * 24));
            let feesValueMonetary = 0;
            let interestDailyValueMonetary = 0;
            let interestMonthlyValueMonetary = 0;
            let interestAnnualValueMonetary = 0;

            if (fees) {
                const feeCharged = fees * 100
                const feeChargedMonetary = Math.round(( valueInstallment * feeCharged)) / 100
                feesValueMonetary = feeChargedMonetary
            }

            // Calcular juros diários
            if (interestDaily) {
                const valueInteres = interestDaily;
                //Calculando e deixnado valor arredondado valor do juro em cima do valor da parcela
                const interestCharged = Math.round(( valueInstallment *  valueInteres ) * 100) / 100;
                //Calcular valor do juro com a qtd de dias atraso
                const interestChargedMonetary =  Math.round(( interestCharged * daysDelay ) * 100) / 100 ;
                //Repassando valor do calculo do juro para soma total
                interestDailyValueMonetary = interestChargedMonetary;
            }
            
            // Calcular juros mensais
            if (interestMonthly) {
                const valueInteres = interestMonthly;
                const monthsDelay = daysDelay / 30;
                //Calculando e deixnado valor arredondado valor do juro em cima do valor da parcela
                const interestCharged = Math.round(( valueInstallment *  valueInteres ) * 100) / 100;
                //Calcular valor do juro com a qtd de dias atraso
                const interestChargedMonetary =  Math.round(( interestCharged * monthsDelay ) * 100) / 100 ;
                //Repassando valor do calculo do juro para soma total
                interestMonthlyValueMonetary = interestChargedMonetary;
            }

            // Calcular juros anuais
            if (interestAnnual) {
                const valueInteres = interestAnnual;
                const yearsDelay = daysDelay / 365;
                //Calculando e deixnado valor arredondado valor do juro em cima do valor da parcela
                const interestCharged = Math.round(( valueInstallment *  valueInteres ) * 100) / 100;
                //Calcular valor do juro com a qtd de dias atraso
                const interestChargedMonetary =  Math.round(( interestCharged * yearsDelay ) * 100) / 100 ;
                //Repassando valor do calculo do juro para soma total
                interestAnnualValueMonetary = interestChargedMonetary;
            }

            return {
                ...installment,
                daysDelay,
                feesValueMonetary,
                interestDailyValueMonetary,
                interestMonthlyValueMonetary, 
                interestAnnualValueMonetary
            }

        })

        return {
            ...rest,
            overdueInstallments: updatedInstallments
        }
    })

    return result;
}

export const AllMonthlyFeesDue = (dataStudents, dataInstallments) => {

    //Resultado da junção alunos e parcelas
    const resultJoinStudentsInstallments = joinData(dataStudents, dataInstallments);
    //console.log('resultJoinStudentsInstallments', resultJoinStudentsInstallments);
    
    //Filtra os alunos com mensalidades vencidas
    const resultFilterOverdueInstallments = filterOverdueInstallments(resultJoinStudentsInstallments);
    console.log('resultFilterOverdueInstallments', resultFilterOverdueInstallments);

    const resultCacularInterest = cacularInterest(resultFilterOverdueInstallments);

    return resultCacularInterest;
}   