import { useState, useCallback } from "react";
import { usePostCollectionUpdate } from "../firebase/collection_register_students/usePostCollectionUpdate";

export const usePostDocumentsUpdate = () => {
    const [loading, setLoading] = useState(false);
    const {collectionUpdate} = usePostCollectionUpdate();

    const updateData = useCallback( async (data) => {
        setLoading(true);              
        try {
            const result = await collectionUpdate(data)
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
            setLoading(false);
        }

    }, [collectionUpdate])

    return {
        updateData,
        loading 
    }

}