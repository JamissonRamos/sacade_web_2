const isUnderage = (birthDate) => {
    if (!birthDate) return false; // Caso a data seja inválida ou não fornecida
        const today = new Date();
        const birth = new Date(birthDate);

        const age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        const dayDiff = today.getDate() - birth.getDate();

        // Ajuste caso o aniversário ainda não tenha acontecido este ano
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        return age - 1 < 18;
    }
    return age < 18;
};

export const FetchDocuments = async (fetch) => {
    const result = await fetch();
    const { success, data, error} = result;

    /*  adicionar um novo campo ao objeto verificando se é menor ou de maior */
    const addAttribute = data && data.map((item) => {
        const { birthDate } = item;
        const isMinor = isUnderage(birthDate)
        return {
            ...item,
            isMinor,
        }
    })

    if(success)
    {
        const newData = addAttribute
            .filter(obj => obj.status === 'ativo' || obj.status === 'bloqueado')
            .sort((a, b) => a.firstName?.localeCompare(b.firstName));

        return {newData};
    }else{
        console.log('Error ao Busca Student:', error);
    }
}