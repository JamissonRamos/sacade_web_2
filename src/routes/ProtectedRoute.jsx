import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/AuthContex';
import { Permissions } from "./Schema";

const ProtectedRoute = ({children, page, ...rest }) => {
    const { currentUser } = useAuth(); // Obtém o estado de autenticação
    // console.log(page);
    // console.log(rest);
    // console.log(currentUser);

    // Verifique se o usuário tem permissão para acessar a page
    //const hasAccess = currentUser && Permissions[page]?.includes(parseInt(userLogged.occupation, 10));
    //    console.log(hasAccess) 
    //    if (!hasAccess) {
    //         // Redireciona para uma página de "Acesso Negado"  
    //        return <Navigate to={`/NoticeAuthorization/${userLogged.name}`}/>;
    //    }


    /*  Parei para ir fazer o tela de login
        aqui começa a fazer as autorizaçoes por tela do usuario logado;
    */


    
    return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

/* 
    1 = Criar regra para validar se user tem ou não permissão para o acesso da page;

*/