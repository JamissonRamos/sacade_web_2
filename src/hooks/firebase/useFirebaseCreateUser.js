import { useCallback } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//  import { db } from '../../services/firebase/config';

export const useFirebaseCreateUser = () => {
    const auth = getAuth();

    const firebaseCreateUser = useCallback(async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);            
            const user = userCredential.user;        
            return { success: true, uid: user.uid };
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                return{success: false, message: 'Este e-mail já está cadastrado. Tente outro.'};
            }else{
                console.error('Error create user:', error);
                return { success: false, message: error.message };
            }
        }
    }, [auth]);

    return { firebaseCreateUser };
};