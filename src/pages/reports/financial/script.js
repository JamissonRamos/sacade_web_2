
export const ExtractStudentData = (data) => {
//Extrair os dados da lista de alunos

    //Filter Status, e sxtrair dados
    const formattedStudents = data
        .map(({ uid, firstName, lastName, status }) => ({
            uidStudent: uid,
            firstName,
            lastName, 
            status
        }));

    return formattedStudents
};

export const SetUpPaymentConsultation = (dataStudents, dataInstallments, dataMonthlyFee) => {
    //Monstar estrutura de pagamentos feitos

    // Primeiro, criamos um mapa (objeto) dos estudantes para acesso rápido por uidStudent
    const studentsMap = dataStudents.reduce((map, student) => {
        map[student.uidStudent] = student;
        return map;
    }, {});

    // Depois, criamos um mapa das parcelas para acesso rápido por uidInstallments
    const installmentsMap = dataInstallments.reduce((map, installment) => {
        map[installment.id] = installment;
        
        // Já aproveitamos para adicionar os dados do estudante a cada parcela
        if (installment.uidStudent && studentsMap[installment.uidStudent]) {
            installment.student = studentsMap[installment.uidStudent];
        }
        
        return map;
    }, {});

    // Finalmente, combinamos tudo com os pagamentos mensais
    const combinedData = dataMonthlyFee.map(payment => {
        const combined = {
            ...payment,
            installment: installmentsMap[payment.uidiInstallments] || null
        };
        
        // Se a parcela existir e tiver dados do estudante, eles já estarão incluídos
        return combined;
    });

    return combinedData
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

export const ConverterFormatPayment = (value) => {
    switch (value) {
        case 1:
            return 'Dinheiro'
        case 2:
            return 'Pix'
        case 3:
            return 'Cartão Débito'
        default:
            return 'Sem Opção'
    }
};

export const ConverterStatusMonthlyFee = (value) => {
    switch (value) {
        case true:
            return 'FECHADO'
        case false:
            return 'ABERTO'
        default:
            return 'SEM OPÇÃO'
    }
}