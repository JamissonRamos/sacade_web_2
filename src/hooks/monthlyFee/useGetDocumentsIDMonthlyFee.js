import { useState, useCallback } from "react";
import { useGetCollectionByIdMonthlyFee } from "../firebase/collection_monthly_fee/useGetCollectionByIdMonthlyFee";

export const useGetDocumentsIDMonthlyFee = () => {
    const [loading, setLoading] = useState(false);

    const {getDocumentsByIdMonthlyFee} = useGetCollectionByIdMonthlyFee();

    const documentsID = useCallback( async (uid) => {
        
        setLoading(true);
        try {
            const result = await getDocumentsByIdMonthlyFee(uid)
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

    }, [getDocumentsByIdMonthlyFee])

    return {
        documentsID,
        loading
    }

}