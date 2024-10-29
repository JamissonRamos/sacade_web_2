import { useState, useCallback } from "react";
import { usePostCollectionUpdate } from "../firebase/collection_students/usePostCollectionUpdate";


export const usePostDocumentsUpdate = () => {
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
    // const [errorUpdate, setErrorUpdate] = useState(null);
    const {collectionUpdate} = usePostCollectionUpdate();


    const UpdateStudents = useCallback( async (userData) => {

        setIsLoadingUpdate(true);
        // setErrorUpdate(null);        
        try {
            const result = await collectionUpdate(userData)
            const { success, message } = result;
            
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
            setIsLoadingUpdate(false);
        }

    }, [collectionUpdate])

    return {
        UpdateStudents,
        isLoadingUpdate 
    }

}