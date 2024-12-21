import { useCallback, useState } from "react";
import { useGetCollection } from "../firebase/collection_responsible/useGetCollection";

export const useGetDocuments = () => {
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const { getCollection } = useGetCollection();

    const getDocuments = useCallback(async () => {
        setLoading(true);
        // setError(null);
        try {
            const result = await getCollection();
            const { success, data, error} = result;
            if(success){
                return{
                    success: true,
                    data: data,
                }
            }else{
                console.log( error)
                return({ success: false, message: error })

            }
        } catch (error) {
            console.log('Error ao buscas todas as coleção responsible students: ', error.message)
            //setError({success: false, message: 'Todo mundo erra, e desta vez foi a nossa vez. Por favor, tente novamente.'})
            return({ success: false, message: error.message })
        }finally {
            setLoading(false);
        }


    }, [])
    return {
        getDocuments,
        // error,
        loading
    }
}