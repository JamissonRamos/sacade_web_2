import { useCallback, useState } from "react";
import { useGetCollection } from "../firebase/collection_monthly_fee/useGetCollection";

export const useGetDocuments = () => {
    const [loading, setLoading] = useState(false);
    const { getCollection } = useGetCollection();

    const getDocuments = useCallback(async () => {
        setLoading(true);
        try {
            const result = await getCollection();
            const { success, data, error} = result;
            if(success){
                return{
                    success: true,
                    data: data,
                }
            }else{
                return{
                    success: false,
                    message: error
                }
            }
        } catch (error) {
            console.log('Error ao buscas todas as coleção pagamentos: ', error.message)
            return({success: false, message: 'Todo mundo erra, e desta vez foi a nossa vez. Por favor, tente novamente.'})
        }finally {
            setLoading(false);
        }

    }, [])
    return {
        getDocuments,
        loading
    }
}