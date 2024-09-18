// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../services/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    return await auth.signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return await auth.signOut(auth);
  };


  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
