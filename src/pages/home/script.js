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
};

export const HasAccess = (sections, status) => {
    //Função para mepar status do user logado e sua permissões 
    const statusIndex = statusMap[status]; //Recuperar o status do user e pegar o index dele e atribir corretamente
    const result = sectionsAuth[sections]?.includes(statusIndex) || false; // Verifica se o status tem permissão    
    return result;
};