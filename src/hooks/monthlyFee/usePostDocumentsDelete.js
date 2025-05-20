import { useState, useCallback } from "react";
import { usePostCollectionDelete } from "../firebase/collection_monthly_fee/usePostCollectionDelete";

export const usePostDocumentsDelete = () => {
    const [loading, setLoading] = useState(false);
    const {collectionDelete} = usePostCollectionDelete();

    const deleteInsllments = useCallback( async (uid) => {
        setLoading(true);      
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
            setLoading(false);
        }

    }, [])

    return {
        deleteInsllments,
        loading 
    }

}