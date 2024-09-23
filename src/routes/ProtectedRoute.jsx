import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/AuthContex';
import { HasAccess } from "./Schema";

const ProtectedRoute =  ({children, page }) => {
    const { currentUser } = useAuth(); // Obtém o estado de autenticação
    const { status } = currentUser  || { status: 'defaultStatus' }

    // Status for defaultStatus pq não tem user logado HasAccess nesse caso vai retorna false 
    if (status === 'defaultStatus') return <Navigate to="/login" />;
    
    if (!HasAccess(page, status)) {
         // Redireciona para uma página de "Acesso Negado"  
        return <Navigate to={`/NoticeAuthorization`}/>;
    }
    
    return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
