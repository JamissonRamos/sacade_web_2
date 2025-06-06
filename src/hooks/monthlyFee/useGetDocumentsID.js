import { useState, useCallback } from "react";
import { useGetCollectionById } from "../firebase/collection_monthly_fee/useGetCollectionById";

export const useGetDocumentsID = () => {
    const [loading, setLoading] = useState(false);

    const {getDocumentById} = useGetCollectionById();

    const documentsID = useCallback( async (uid) => {

        setLoading(true);

        try {
            console.log('1uid: ', uid);
            
            const result = await getDocumentById(uid)
            const { success, data, message } = result;
            if(success)
            {
                return { success: true, data: data };
            }else {
                return { success: false,  message: message };
            }
            
        } catch (error) {
            console.log('Erro ao recupera documento: ', error.message);
            return { success: false,  message: `Todo mundo erra, e desta vez foi a nossa vez. Por favor, tente novamente.` };
        } finally {
            setLoading(false);
        }

    }, [getDocumentById])

    return {
        documentsID,
        loading
    }
}