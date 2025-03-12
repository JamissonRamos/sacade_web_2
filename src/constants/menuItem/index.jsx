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
        title: 'Pagamentos',
        path: '/payments',
        icon: <Theme.Icons.MdAttachMoney/>
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
        title: 'Configurações',
        path: '#',
        icon:  <Theme.Icons.MdSettings/>,
        iconClosed:  <Theme.Icons.RiArrowUpSFill/>,
        iconOpened: <Theme.Icons.RiArrowDownSFill/>,
        subNav: [
            {
                title: 'Usuários',
                path: '/users',
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
            {
                title: 'Gerar Parcelas',
                path: '/generateInstallments',
                icon: <Theme.Icons.RxCardStackPlus  />,
            }
        ]
    },
    {
        title: 'Sair',
        path: '#',
        icon: <Theme.Icons.MdLogout />,
    },
    
];