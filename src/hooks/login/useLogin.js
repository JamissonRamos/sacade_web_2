import { useState } from "react";
import { useAuth  } from "../../contexts/authContext/AuthContex";

export const useLoginIn = () => {
    const [isLoadingLogin, setIsLoadingLogin] = useState(false);
    const [errorLogin, setErrorLogin] = useState(null);
    const { login, setCurrentUser } = useAuth();
    
    


    const loginIn = async (data) => {
        const {email, password} = data;
        console.log(email);
        console.log(password);

        setIsLoadingLogin(true);
        setErrorLogin(null);

        try {
            let checkLogin;
            checkLogin = await login(email, password);
            

            console.log(checkLogin);
            
            return { success: true }
            
        } catch (error) {
            console.log('erro ao tenta fazer login: ', error) 
            let msgBox;
            switch (error.code) {
                case "auth/wrong-password":
                    msgBox = "Email ou Senha incorreto. Por favor, tente novamente.";
                    break;
                case "auth/user-not-found":
                    msgBox = "Email ou Senha incorreto. Por favor, tente novamente.";
                    break;
                case "auth/invalid-email":
                    msgBox = "Formato de email inválido.";
                    break;
                case "auth/user-disabled":
                    msgBox = "Esta conta foi desativada. Entre em contato com o suporte.";
                    break;
                default:
                    msgBox = "Erro ao tentar fazer login: " + error.message;
                    
            }
            setErrorLogin(msgBox)
            setIsLoadingLogin(false);
            return { success: false }
        }

    }
    

    return {
        loginIn,
        isLoadingLogin,
        errorLogin
        
        
    }
}

