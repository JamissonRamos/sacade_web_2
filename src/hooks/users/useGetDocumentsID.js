import { useState, useCallback } from "react";
import { useGetCollectionID } from "../firebase/useGetCollectionID";

export const useGetDocumentsID = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const collection = 'users'
    const {getDocumentById} = useGetCollectionID();

    const documentsID = useCallback( async (uid) => {

        setIsLoading(true);
        setError(null);

        try {
            const result = await getDocumentById(collection, uid)
            if(result.success)
            {
                return { success: true, data: result.data };

            }else {
                return { success: false,  message: result.message };
            }
            
        } catch (error) {
            console.log('Erro ao atualizar os dados: ', error.message);
            return { success: false,  message: error.message };
        } finally {
            setIsLoading(false);
        }

    }, [getDocumentById])

    return {
        documentsID,
        error,
        isLoading
    }

}