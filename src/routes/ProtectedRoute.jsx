import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/AuthContex';

const ProtectedRoute = ({children, page, ...rest }) => {
    const { currentUser } = useAuth(); // Obtém o estado de autenticação
    console.log(page);
    console.log(rest);
    
    return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

