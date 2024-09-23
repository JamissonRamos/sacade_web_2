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
        iconClosed:  <Theme.Icons.RiArrowDownSFill  />,
        iconOpened: <Theme.Icons.RiArrowUpSFill  />,
        subNav: [
            {
                title: 'Alunos',
                path: '/students',
                icon: <Theme.Icons.MdPerson  />,
            },
            {
                title: 'Usuários',
                path: '/users',
                icon: <Theme.Icons.MdSupervisedUserCircle  />,
            }
        ]
    },
    {
        title: 'Pagamentos',
        path: '/payments',
        icon: <Theme.Icons.MdAttachMoney  />
    },
    {
        title: 'Configurações',
        path: '#',
        icon:  <Theme.Icons.MdSettings  />,
        iconClosed:  <Theme.Icons.RiArrowDownSFill  />,
        iconOpened: <Theme.Icons.RiArrowUpSFill  />,
        subNav: [
            {
                title: 'Alterar Senha',
                path: '/changePassword',
                icon: <Theme.Icons.MdLockReset  />,
            },
            {
                title: 'Nível Usuário',
                path: '/userLevel',
                icon: <Theme.Icons.MdLockPerson  />,
            }
        ]
    },
    {
        title: 'Sair',
        path: '#',
        icon: <Theme.Icons.MdLogout />,
    },
    
];