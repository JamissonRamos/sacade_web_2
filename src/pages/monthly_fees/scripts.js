const isUnderage = (birthDate) => {
    /*  verificar se o aluno é menor de idade ou não */

    // Se a data de nascimento não for fornecida ou inválida, retorna false (não é menor de idade)
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

export const AddAttributeList = async (data) => {
    /*  adicionar um novo campo ao objeto verificando se é menor ou de maior */
    // Adiciona o atributo isMinor a cada objeto no array data
    const addAttribute = await data && data.map((item) => {
        const { birthDate } = item;
        const isMinor = isUnderage(birthDate)
        return {
            ...item,
            isMinor,
        }
    })

    // Filtrar os dados para mostrar apenas os alunos ativos ou bloqueados
    // e ordenar pelo nome
    if(addAttribute.length > 0)
    {
        const newData = await addAttribute
            .filter(obj => obj.status === 'ativo' || obj.status === 'bloqueado')
            .sort((a, b) => a.firstName?.localeCompare(b.firstName));
        
        return newData;
    }else{
        console.log('Error ao tentar filtra e ordena alunos');
    }
}