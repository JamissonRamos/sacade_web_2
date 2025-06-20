
export const HasAccess = (page, status) => {
    let result
    const statusIndex = getStatusIndex(status);
    result = pages[page]?.includes(statusIndex) || false; // Verifica se o status tem permissão    
    return result
};

const getStatusIndex = (status) => {
    return statusMap[status] || null; // Retorna o índice ou null se o status não for encontrado
};

const statusMap = {
    Administrador: 1,
    Assistente: 2,
    Visitante: 3,
};

const pages = {
    Home: [1, 2, 3],
    Students: [1, 2],
    Users: [1, 2, 3], 
    ResponsibleStudents: [1, 2], 
    MonthlyFees: [1, 2],
    /* Apagar esses compoenete */
    // Payments: [1, 2],
    RegisterStudent: [1, 2],
    ChangePassword: [1, 2, 3],
    UserLevel: [1],
    NoticeAuthorization: [1, 2, 3],
    StatusStudents: [1, 2],
    ReportsStudents: [1, 2],
    ReportsTracks: [1, 2],
};