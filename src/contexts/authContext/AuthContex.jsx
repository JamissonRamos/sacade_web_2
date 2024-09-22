// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../services/firebase/config';
import { onAuthStateChanged, signInWithEmailAndPassword, } from 'firebase/auth';
import { Spinner } from 'react-bootstrap';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  

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
    console.log("Sair");
    
    return await auth.signOut(auth);
  };

  useEffect(() => {
    //const storedUser = sessionStorage.getItem('userLogged');
    // console.log(JSON.parse(storedUser));

    //if (storedUser) {
      //setCurrentUser(JSON.parse(storedUser)); // Seta o usuário do sessionStorage no estado
      // console.log('passou no storedUser');
      
    //}

    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('tem');
        setCurrentUser(user);
        //sessionStorage.setItem('userLogged', JSON.stringify(user)); // Atualiza o sessionStorage ao verificar o usuário
      } else {
        console.log('Não tem');
        
        //setCurrentUser(null);
        //sessionStorage.removeItem('userLogged'); // Limpa o sessionStorage se não houver usuário
      }
      setLoading(false); 
    });
    return  unsubscribe;
  }, []);

  /* Ajusta esse loading  */
  if (loading) {
    return (
      <>
        <Spinner 
          animation="border" 
          role="status">
            <span className="sr-only">Carregando...</span>
        </Spinner>;
      </>
    )
  }
  
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
