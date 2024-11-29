import { useCallback, useState } from "react";
import { useGetCollection } from "../firebase/collection_configuration_installments/useGetCollection";

export const useGetDocuments = () => {
    const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
    const { getCollection } = useGetCollection();

    const getDocuments = useCallback(async () => {
        setLoading(true);
//         setError(null);
        try {
            const result = await getCollection();
            const { success, data, message} = result;
            if(success){
                return{
                    success: true,
                    data: data,
                }
            }else{
                return{ success: false, message: message}
            }
        } catch (error) {
            console.log('Error ao buscas todas as coleção configuration_installments: ', error.message)
//             setError({success: false, message: 'Todo mundo erra, e desta vez foi a nossa vez. Por favor, tente novamente.'})
            return{ success: false, message: error.message}

}finally {
            setLoading(false);
        }


    }, [])
    return {
        getDocuments,
        loading
    }
}