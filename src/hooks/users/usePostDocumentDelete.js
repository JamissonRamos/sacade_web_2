import { useState, useCallback } from "react";
import { usePostCollectionDelete } from "../firebase/usePostCollectionDelete";

export const usePostDocumentDelete = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);
    const {collectionDelete} = usePostCollectionDelete();
    const collection = 'users'

    const documentsDelete = useCallback( async (uid) => {

        setIsLoading(true);
        setError(null);

        try {
            const result = await collectionDelete(uid, collection)
            if(result.success)
            {
                return { success: true};
            }else {
                return { success: false,  message: result.message };
            }
        } catch (error) {
            console.log('Erro ao atualizar os dados: ', error.message);
            return { success: false,  message: error.message };
        } finally {
            setIsLoading(false);
        }

    }, [collectionDelete])

    return {
        documentsDelete,
        error,
        isLoading
    }
}