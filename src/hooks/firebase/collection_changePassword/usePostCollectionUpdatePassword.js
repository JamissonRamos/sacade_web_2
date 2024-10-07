import {auth} from '../../../services/firebase/config';
import { reauthenticateWithCredential, updatePassword, EmailAuthProvider } from "firebase/auth";

export const usePostCollectionUpdatePassword = () => {

    const postUpdatePassword = async (email, currentPassword, newPassword) => {
        try {      
            // Obter o usuário atual
            const user = auth.currentUser;      
           // Criar credenciais com email e senha atual
            const credential = EmailAuthProvider.credential(email, currentPassword);
            // Reautenticar o usuário
            await reauthenticateWithCredential(user, credential);
            // Atualizar a senha
            await updatePassword(user, newPassword);
            return { success: true };
        }catch (error) {
            console.error("Erro ao tenta alterar senha:", error.message);
            return { success: false, error: error.message };
        }
    };

    return { postUpdatePassword };
};
