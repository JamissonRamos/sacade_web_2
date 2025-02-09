import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/AuthContex';
import { HasAccess } from "./Schema";

const ProtectedRoute =  ({children, page}) => {
    const { currentUser } = useAuth(); // Obtém o estado de autenticação
    const { status, statusActive } = currentUser || { status: 'defaultStatus', statusActive: 'defaultStatus' }
    
    // Status for defaultStatus pq não tem user logado HasAccess nesse caso vai retorna false 
    if (status === 'defaultStatus' || statusActive === 'defaultStatus' )
    {   
        //Caso tenho uma ação de perder o login do user apagar base dados do local storage
        // Exclui os dados do localStorage
        sessionStorage.removeItem('userLogged'); // Limpa o sessionStorage se não houver usuário
        localStorage.removeItem('uisStudents');
        localStorage.removeItem('student');
        return <Navigate to="/splashScreen" />;
    }
    
    if (!statusActive) {
        // Redireciona para uma página de "Acesso Negado"          
        return <Navigate to="/userblocked"/>;
    }

    if (!HasAccess(page, status)) {
        // Redireciona para uma página de "Acesso Negado"  
        return <Navigate to={`/noticeAuthorization`}/>;
    }
    
    return currentUser ? children : <Navigate to="/splashScreen" />;
};

export default ProtectedRoute;
