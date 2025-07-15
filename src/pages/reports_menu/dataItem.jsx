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
        title: 'Fichas dos Alunos',
        path: '/reports/tracks/currentStudentTracks',
        icon: <Theme.Icons.PiAddressBookFill/>
    },
    {
        title: 'Competidores',
        path: "/generateInstallments",
        nextPage: "/reports/tracks/competitorStudent",
        icon: <Theme.Icons.PiAddressBookFill/>
    },
    
    //Grupo Financeiro
    {
        title: 'Pagamentos do Mês',
        path: '/reports/financial/paymentMonth',
        icon: <Theme.Icons.FaMoneyCheckAlt/>
    },
    {
        title: 'Atrasados do Mês',
        path: '/reports/financial/delayMonth',
        icon: <Theme.Icons.FaMoneyCheckAlt/>
    },
    {
        title: 'Todos Atrasos',
        path: '/reports/financial/allDelays',
        icon: <Theme.Icons.FaMoneyCheckAlt/>
    },

];