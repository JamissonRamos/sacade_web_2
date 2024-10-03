import { useState, useCallback, useContext } from "react";
import { usePostCollectionUpdate } from "../firebase/usePostCollectionUpdate";
import { useCollectionCreate } from "../firebase/useCollectionCreate";
import { useAuth  } from "../../contexts/authContext/AuthContex";


export const usePostDocumentsID = () => {
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
    const [errorUpdate, setErrorUpdate] = useState(null);
    const collection = 'users'
    const { setCurrentUser } = useAuth();
    const {collectionUpdate} = usePostCollectionUpdate();


    const UpdateUser = useCallback( async (userData) => {

        setIsLoadingUpdate(true);
        setErrorUpdate(null);

        // Remover o atributo email
        
        try {
            const resultUpdate = await collectionUpdate(userData, collection)
            
            if(resultUpdate.success)
            {
                return { success: true };
            }else {
                return { success: false,  resultUpdate: resultUpdate.message };
            }
            
        } catch (error) {
            console.log('Erro ao atualizar os dados: ', error.message);
            return { success: false,  message: error.message };
        } finally {
            setIsLoadingUpdate(false);
        }

    }, [collectionUpdate])

    return {
        UpdateUser,
        errorUpdate,
        isLoadingUpdate
    }

}