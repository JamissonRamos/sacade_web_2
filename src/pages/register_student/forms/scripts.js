
const tracksHierarchy = {
    //Dicionários das faixas, todas as fixas na sua hierarquia
    //Faixas para Adultos
    "branca": 1,
    "cinza_branca": 2,
    "cinza": 3,
    "cinza_preta": 4,
    "amarela_branca": 5,
    "amarela": 6,
    "amarela_preta": 7,
    "laranja_branca": 8,
    "laranja": 9,
    "laranja_preta": 10,
    "verde_branca": 11,
    "verde": 12,
    "verde_preta": 13,
    // Faixas para Adultos
    "azul": 14,
    "roxa": 15,
    "marrom": 16,
    "preta": 17,
    "coral": 18,
    "vermelha_preta": 19,
    "vermelha": 20
}


export const UpdateHistoryStudent = async (newRange, rangeActual) => {
    /* 
        A função é para compara a faixa do hitorico atual, com a nova faixa e ver se deve muda o 
        status de atual 
    */

    //Faixa Cadastrada
    const rangerActual = tracksHierarchy[rangeActual];
    
    //Nova Faixa
    const rangerNew = tracksHierarchy[newRange];

    if ( rangerActual >= rangerNew){
        //Quando a faixa atual é maior do que a faixa que deseja cadastrar
        return false;
        
    }else{
        /* Nesse ponto a faixa atual ja cadastra é menor que a faixa nova a ser adastrada */
        return true;
    }

}