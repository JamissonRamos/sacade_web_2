import { useState, useCallback, useContext } from "react";
import { usePostCollectionUpdate } from "../firebase/collection_users/usePostCollectionUpdate";
import { useAuth  } from "../../contexts/authContext/AuthContex";


export const usePostDocumentsID = () => {
    const [loading, setLoading] = useState(false);
   // const [errorUpdate, setErrorUpdate] = useState(null);
    //const collection = 'users'
    // const { setCurrentUser } = useAuth();
    const {collectionUpdate} = usePostCollectionUpdate();


    const UpdateUser = useCallback( async (userData) => {

        setLoading(true);
        //setErrorUpdate(null);

        // Remover o atributo email
        
        try {
            const result = await collectionUpdate(userData)
            const {success, message } = result;
            
            if(success)
            {
                return { success: true };
            }else {
                return { success: false,  message: message };
            }
            
        } catch (error) {
            console.log('Erro ao atualizar os dados: ', error.message);
            return { success: false,  message: error.message };
        } finally {
            setLoading(false);
        }

    }, [collectionUpdate])

    return {
        UpdateUser,
        loading
    }

}