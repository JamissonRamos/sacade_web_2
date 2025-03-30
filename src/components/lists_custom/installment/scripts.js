
const styledBadge = (status) => 
{
    switch (status) {
        case 1: //Em Aberto
            return { bg: "#00A791", text: "Em Aberto" };
        case 2: //Em Atrasado
            return { bg: "#dc3545", text: "Em Atrasado" };
        case 3: //Fechado
            return { bg: "#003CC7", text: "Fechado" };
        default: //Erro
            return { bg: "#FF7F50", text: "Null" };
    }
}

export const SetStatus = (status, dueDate) => {
/* Função para definir o status da parcela */

    //Data atual Zerar horas, minutos, segundos e milissegundos para comparar apenas a data
    const today = new Date().setHours(0, 0, 0, 0); 

    // Converter a dueDate para um objeto Date
    const [day, month, year] = dueDate.split("/");
    const dueDateObj = new Date(year, month - 1, day); // Mês em JavaScript começa do zero

    //Vlida o status, treu sempre fechado, false aberto ou em atraso
    if(status){
        return styledBadge(3)
    }else if (dueDateObj < today) {
        return styledBadge(2);
    }else if (dueDateObj >= today) {
        return styledBadge(1);
    }else{
        return styledBadge(0);
    }
};