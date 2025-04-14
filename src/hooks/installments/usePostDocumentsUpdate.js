import { useState, useCallback } from "react";
import { usePostCollectionUpdate } from "../firebase/collection_installments/usePostCollectionUpdate";

export const usePostDocumentsUpdate = () => {
    const [loading, seLoading] = useState(false);
    const {collectionUpdate} = usePostCollectionUpdate();

    const updateInstallments = useCallback( async (userData) => {
        seLoading(true);              
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
            seLoading(false);
        }

    }, [collectionUpdate])

    return {
        updateInstallments,
        loading 
    }

}