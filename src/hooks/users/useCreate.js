import { useState, useCallback, useContext } from "react";
import { useFirebaseCreateUser } from "../firebase/useFirebaseCreateUser";
import { useCollectionCreate } from "../firebase/useCollectionCreate";
import { useAuth  } from "../../contexts/authContext/AuthContex";

export const useCreate = () => {
    const [isLoadingCreate, setIsLoadingCrete] = useState(false);
    const [errorCreate, setErrorCreate] = useState(null);
    const collection = 'users'
    const {firebaseCreateUser} = useFirebaseCreateUser();
    const {collectionCreate} = useCollectionCreate();
    const { setCurrentUser } = useAuth();
    
    const createUser = useCallback(async (userData) => {
        
        // Remover o atributo email
        const { emailUser, newPassword, ...rest } = userData;

        setIsLoadingCrete(true);
        setErrorCreate(null);

        try {
            let newUserUidData
            const newUserId = await firebaseCreateUser(emailUser, newPassword); 
            
            if (newUserId.success) {
                newUserUidData = {
                    uid: newUserId.uid,    
                    ...rest
                }
            }else{
                setErrorCreate('Erro ao criar usuário: ' + newUserId.message)
                return {success: false}
            }            
            const newUserCollection = await collectionCreate(newUserUidData, collection ); 

            if(newUserCollection.success){
                 // Verifique se currentUser está disponível
                setCurrentUser({ uid: newUserId.uid, email: emailUser, ...rest });

                return { success: true };
            }else{
                setErrorCreate('Erro ao criar coleção: ' + newUserCollection.message)
                return {success: false}
            }

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setErrorCreate('Este e-mail já está cadastrado. Tente outro.');
            }else{
                console.error('Erro ao criar o usuário:', error);
                setErrorCreate('Erro ao criar usuário3: ' + error.message);
            }
            return { success: false };

        } finally {
            setIsLoadingCrete(false);
        }
    }, [collectionCreate, setCurrentUser, firebaseCreateUser]);
    
    return {
        createUser, isLoadingCreate, errorCreate
    }
}