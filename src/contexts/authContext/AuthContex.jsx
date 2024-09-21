// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../services/firebase/config';
import { onAuthStateChanged, signInWithEmailAndPassword, } from 'firebase/auth';
import { Spinner } from 'react-bootstrap';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); 
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    if (uid){
      
      return {success: true, uid: uid}
    }else{
      return {success: false}
    }
  };

  const logout = async () => {
    return await auth.signOut(auth);
  };

  /* Ajusta esse loading  */
  if (loading) {
    return <Spinner 
              animation="border" 
              role="status">
                <span className="sr-only">Carregando...</span>
            </Spinner>;
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
