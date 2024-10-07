
import { useState } from 'react'
import { useAuth } from '../../contexts/authContext/AuthContex';
import { usePostCollectionUpdatePassword } from '../firebase/collection_changePassword/usePostCollectionUpdatePassword';

export const useUpdatePassword = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { currentUser } = useAuth();
    const { postUpdatePassword} = usePostCollectionUpdatePassword();

    const updatePasswordHandler = async (currentPassword, newPassword) => {
        setLoading(true);
        setError(null);
        try {
            // Obter o usuário atual
            const {email} = currentUser;
            if (!email) throw new Error("Usuário não autenticado");
            const result = await postUpdatePassword(email, currentPassword, newPassword)
            const {success, error} = result;
            if(success){
                return { success: true };
            }else if (error.includes('auth/wrong-password')) {
                setError('Sua senha atual não confere.')
                return { success: false};
            }else{
                setError("Algo saiu errado")
                return { success: false};
            }
        } catch (err) {
            setError('Error: ' + err.message);
            return { success: false, error: err.message };
        }finally{
            setLoading(false);
        }
    };

    return {
        updatePasswordHandler,
        loading,
        error,
    };
}

export default useUpdatePassword