import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/AuthContex';
import { HasAccess } from "./Schema";

const ProtectedRoute =  ({children, page }) => {
    const { currentUser } = useAuth(); // Obtém o estado de autenticação
    const { status } = currentUser || null;
    
    if (!HasAccess(page, status)) {
         // Redireciona para uma página de "Acesso Negado"  
        return <Navigate to={`/NoticeAuthorization`}/>;
    }
    
    return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
