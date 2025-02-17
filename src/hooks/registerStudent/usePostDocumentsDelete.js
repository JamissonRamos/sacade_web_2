import { useState, useCallback } from "react";
import { usePostCollectionDelete } from "../firebase/collection_register_students/usePostCollectionDelete";

export const usePostDocumentsDelete = () => {
    const [loading, seLoading] = useState(false);
    const {collectionDelete} = usePostCollectionDelete();

    const deleteDate = useCallback( async (uid) => {
        seLoading(true);      
        try {
            const result = await collectionDelete(uid)
            const { success, message } = result;
            if(success)
            {
                return { success: true };
            }else {
                return { success: false,  message: message };
            }
            
        } catch (error) {
            console.log('Erro ao deletar os dados: ', error.message);
            return { success: false,  message: error.message };
        } finally {
            seLoading(false);
        }

    }, [])

    return {
        deleteDate,
        loading 
    }

}