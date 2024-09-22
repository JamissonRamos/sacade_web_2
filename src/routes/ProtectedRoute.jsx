import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/AuthContex';
import { Permissions } from "./Schema";

const ProtectedRoute = ({children, page, ...rest }) => {
    const { currentUser } = useAuth(); // Obtém o estado de autenticação
    //const {status} = currentUser;
    // console.log(page);
    // console.log(rest);
    console.log('ProtectedRoute: ', currentUser);
        // Recupere o usuário logado do localStorage
        const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
        console.log('protec: ', userLogged) 
        // console.log(currentUser) 
        // if (!userLogged){
        //     console.log('nulo')
        //    // return <Navigate to={`/users/form/form_update/${currentUser.uid}`} />
            
        // }
    //console.log('ProtectedRoute status : ', status);

    // Verifique se o usuário tem permissão para acessar a page
    //const hasAccess = currentUser && Permissions[page]?.includes(parseInt(userLogged.occupation, 10));
    //    console.log(hasAccess) 
    //    if (!hasAccess) {
    //         // Redireciona para uma página de "Acesso Negado"  
    //        return <Navigate to={`/NoticeAuthorization/${userLogged.name}`}/>;
    //    }

    return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

/* 
    1 = Criar regra para validar se user tem ou não permissão para o acesso da page;

*/