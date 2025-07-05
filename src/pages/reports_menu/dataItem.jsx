import { Theme } from "../../theme";

export const DataItemMenu = [
    //Grupo de Alunos
    {
        title: 'Alunos',
        path: '/reports/students',
        icon: <Theme.Icons.MdPerson/>
    },
    //Grupo Fichas
    {
        title: 'Fichas',
        path: '/reports/tracks/currentStudentTracks',
        icon: <Theme.Icons.PiAddressBookFill/>
    },
    
    //Grupo Financeiro
    {
        title: 'Pagamentos do Mês',
        path: '/reports/financial/paymentMonth',
        icon: <Theme.Icons.FaMoneyCheckAlt/>
    },

];