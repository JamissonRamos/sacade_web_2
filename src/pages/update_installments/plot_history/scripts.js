
export const SetStatus = (status, dueDate) => {
/* Função para definir o status da parcela */

    const diffDays = DaysLate(status, dueDate );

    //Passar tipo de status para parcela
    if(status){
        return { bg: "#003CC7", textLabel: "Fechado" };
    }else if (diffDays > 0) {
        return { bg: "#dc3545", textLabel: "Em Atraso" };
    }else if (diffDays <= 0) {
        return { bg: "#00A791", textLabel: "Em Aberto" };
    }else{
        return { bg: "#FF7F50", textLabel: "Error" };
    }
};

export const DaysLate = (status, dueDate) => {
/* Função para definir os dias de atrasos*/

    //Caso seja True retorna 0 pois esta pago não precisa gerar calculo
    if(status) return  0;

    //Data atual Zerar horas, minutos, segundos e milissegundos para comparar apenas a data
    const today = new Date().setHours(0, 0, 0, 0); 

    // Converter a dueDate para um objeto Date
    const [day, month, year] = dueDate.split("/");
    const dueDateObj = new Date(year, month - 1, day); // Mês em JavaScript começa do zero

    // Calcular dias de atraso
    const diffTime = today - dueDateObj; // Diferença em milissegundos
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Converter para dias
    
    return diffDays;
};








