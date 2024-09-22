import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/AuthContex';
import { Permissions } from "./Schema";

const ProtectedRoute =  ({children, page, ...rest }) => {
    const { currentUser } = useAuth(); // Obtém o estado de autenticação
    console.log(currentUser);
    
    return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;



/* 
    1 = Criar regra para validar se user tem ou não permissão para o acesso da page;

*/