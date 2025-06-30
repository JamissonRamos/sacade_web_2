import { Theme } from "../../theme";

export const MenuItem = [
    {
        title: 'Home',
        path: '/',
        icon: <Theme.Icons.MdHome  />
    },
    {
        title: 'Cadastros',
        path: '#',
        icon:  <Theme.Icons.MdAddCircle  />,
        iconClosed:  <Theme.Icons.RiArrowUpSFill />,
        iconOpened: <Theme.Icons.RiArrowDownSFill  />,
        subNav: [
            {
                title: 'Alunos',
                path: '/students',
                icon: <Theme.Icons.MdPerson  />,
            },
            {
                title: 'Responsáveis Aluno',
                path: '/responsibleStudents',
                icon: <Theme.Icons.FaUsers  />,
            }
        ]
    },
    {
        title: 'Financeiro',
        path: '#',
        icon:  <Theme.Icons.FaMoneyCheckAlt  />,
        iconClosed:  <Theme.Icons.RiArrowUpSFill />,
        iconOpened: <Theme.Icons.RiArrowDownSFill  />,
        subNav: [
            {
                title: 'Pagar Parcelas',
                path: '/monthlyFees',
                icon: <Theme.Icons.MdAttachMoney/>
            },
            {
                title: 'Gerar Parcelas',
                path: '/generateInstallments',
                icon: <Theme.Icons.RxCardStackPlus  />,
            },
            {
                title: 'Alterar Parcelas',
                path: '/updateInstallments',
                icon: <Theme.Icons.GrDocumentUpdate  />,
            }
        ]
    },
    {
        title: 'Status Alunos',
        path: '/statusStudents',
        icon: <Theme.Icons.MdPerson/>
    },
    {
        title: 'Ficha',
        path: '/registerStudent',
        icon: <Theme.Icons.PiAddressBookFill/>
    },
    {
        title: 'Relatórios',
        path: '/reports',
        icon:  <Theme.Icons.TbReportAnalytics/>,
    },
    {
        title: 'Configurações',
        path: '#',
        icon:  <Theme.Icons.MdSettings/>,
        iconClosed:  <Theme.Icons.RiArrowUpSFill/>,
        iconOpened: <Theme.Icons.RiArrowDownSFill/>,
        subNav: [
            {
                title: 'Usuário',
                path: '/user',
                icon: <Theme.Icons.MdSupervisedUserCircle  />,
            },
            {
                title: 'Alterar Senha',
                path: '/changePassword',
                icon: <Theme.Icons.MdLockReset  />,
            },
            {
                title: 'Nível Usuário',
                path: '/userLevel',
                icon: <Theme.Icons.MdLockPerson  />,
            },
        ]
    },
    {
        title: 'Central Ajuda',
        path: '/helps',
        icon: <Theme.Icons.MdHelp />,
    },
    {
        title: 'Sair',
        path: '#',
        icon: <Theme.Icons.MdLogout />,
    },
    
];