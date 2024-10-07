import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../services/firebase/config';
import { onAuthStateChanged, signInWithEmailAndPassword, } from 'firebase/auth';
import { updatePassword, EmailAuthProvider } from "firebase/auth";
import { Spinner } from 'react-bootstrap';
import { LoadingOverlay } from '../../components/spinner/global/styled';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    if(uid){
      return {success: true, uid: uid}
    }else{
      return {success: false}
    }
  };

  const logout = async () => {
    try {
      await auth.signOut(auth); // Espera o logout ser concluído
    } catch (error) {
        console.error("Erro ao sair:", error); // Lida com possíveis erros
    } finally {
        setLoading(false); // Desativa o loading após a tentativa de logout
    }
  };

  
//   // Função para atualizar os dados do usuário logado
//   const updateUserEmailandPassword = async (currentPassword, newPassword) => {

//   console.log(currentPassword);
//   console.log(newPassword);
//   console.log(currentUser);

//   const reauthenticateUser = async (currentPassword) => {
//     const credential = EmailAuthProvider.credential(
//       currentUser.email,
//       currentPassword
//     );

//     return currentUser.reauthenticateWithCredential(credential);
//   };
  
//     return true
//   // const updateUserPassword  = async (newPassword) => {
//   //     try {
//   //       // compara senha atual com email atual se é valido
//   //       await updatePassword(currentUser, newPassword);  
//   //       return 'Sucesso'
//   //     } catch (error) {
//   //       console.error("Erro ao atualizar o usuário no contexto senha: ", error);
//   //       return error.message
//   //     }
//   // }
  
//   // if (currentUser) {
//   //   try {
//   //     // const resultEmail = await updateUserEmail(newEmail)
//   //     // if (resultEmail.includes('Sucesso')){
//   //         const resultPassword = await updateUserPassword(newPassword)
//   //         if (resultPassword.includes('Sucesso')){
//   //           return 'Sucesso' 
//   //         }else{
//   //           return `Error: ${resultPassword} `
//   //         }
//   //     // }
//   //     // else{
//   //         // return resultEmail;
//   //     // }


//   //   } catch (error) {
//   //     console.error("Erro ao atualizar o usuário no contexto: ", error);
      
//   //   }finally {
//   //     setLoading(false);
//   //   }
//   // }else {
//   //   console.log('Não encontrado users no contexto');
//   //   setLoading(false);
//   //   return;
//   // }
// };













  useEffect(() => {
    // Recupera os dados existentes do sessionStorage
    const storedUser = JSON.parse(sessionStorage.getItem('userLogged')) || null;
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && storedUser) {
        // Mescla os dados existentes com os novos dados
        const updatedUser = { ...user, ...storedUser };
        setCurrentUser(updatedUser);
        sessionStorage.setItem('userLogged', JSON.stringify(updatedUser)); // Atualiza o sessionStorage ao verificar o usuário
      } else {
        setCurrentUser(null);
        sessionStorage.removeItem('userLogged'); // Limpa o sessionStorage se não houver usuário
      }
      setLoading(false); 
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <LoadingOverlay>
        <Spinner animation="border" variant="warning" />
        <span className="sr-only">Carregando...</span>
      </LoadingOverlay>
    )
  }
  
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
