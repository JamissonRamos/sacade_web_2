import { useState, useCallback } from "react";
import { useGetCollectionById } from "../firebase/collection_students/useGetCollectionById";

export const useGetDocumentsID = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {getDocumentById} = useGetCollectionById();

    const documentsID = useCallback( async (uid) => {

        setIsLoading(true);
        setError(null);

        try {
            const result = await getDocumentById(uid)
            const { success, data, message } = result;
            if(success)
            {
                return { success: true, data: data };

            }else {
                setError(message)
                return { success: false,  message: message };
            }
            
        } catch (error) {
            console.log('Erro ao recupera documento: ', error.message);
            return { success: false,  message: `Todo mundo erra, e desta vez foi a nossa vez. Por favor, tente novamente.` };
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