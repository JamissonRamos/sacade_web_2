import { Theme } from "../../theme";

export const DataItemMenu = [
    //Grupo de Alunos
    {
        title: 'Relatório de Alunos',
        path: '/reports/students',
        icon: <Theme.Icons.MdPerson/>
    },
    //Grupo Fichas
    {
        title: 'Relatório de Fichas',
        path: '/reports/tracks/currentStudentTracks',
        icon: <Theme.Icons.PiAddressBookFill/>
    },
    //Grupo Financeiro
    {
        title: 'Relatório Financeiro',
        path: '/reports/financial/paymentMonth',
        icon: <Theme.Icons.FaMoneyCheckAlt/>
    },

];