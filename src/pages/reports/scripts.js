
export const CurrentAge = (birthDate) => {

    // Converte a string da data para um objeto Date
    const [day, month, year] = birthDate.split('/');
    // Cria o objeto Date (mês é 0-indexed, então subtraímos 1)
    const birth = new Date(year, month - 1, day);
    const today = new Date();
    
    // Calcula a diferença de anos
    let age = today.getFullYear() - birth.getFullYear();
    
    // Verifica se o aniversário já ocorreu este ano
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const monthBorn = birth.getMonth();
    const dayborn = birth.getDate();
    
    // Se ainda não fez aniversário este ano, subtrai 1 da idade
    if (currentMonth < monthBorn || (currentMonth === monthBorn && currentDay < dayborn)) {
        age--;
    }
    
    return age;
};

export const ExtractStudentData = (data) => {
//Extrair os dados da lista de alunos

    //Filter Status, e sxtrair dados
    const formattedStudents = data
        .filter((item) => item.status !== "inativo")
        .map(({ uid, firstName, lastName, birthDate, sex, status }) => ({
            uidStudent: uid,
            firstName,
            lastName,
            age: CurrentAge(birthDate),
            sex, 
            status
        }));

    return formattedStudents
};

export const ExtractRangeData = (data) => {
//Extrair os dados da lista de fichas
    const newListRange = data
        .filter(item => item.currentHistory)  // Filtra primeiro (mais eficiente)
        .map(({uid, ...rest}) => ({
            uidRange: uid,
            ...rest
    }));

    return newListRange;
};