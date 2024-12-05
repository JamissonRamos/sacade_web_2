import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../services/firebase/config';
import { onAuthStateChanged, signInWithEmailAndPassword, } from 'firebase/auth';
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
      // Exclui os dados do localStorage
      localStorage.removeItem('uisStudents');
    } catch (error) {
        console.error("Erro ao sair:", error); // Lida com possíveis erros
    } finally {
        setLoading(false); // Desativa o loading após a tentativa de logout
    }
  };
  
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
