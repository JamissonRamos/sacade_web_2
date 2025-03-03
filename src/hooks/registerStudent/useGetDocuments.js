import { useCallback, useState } from "react";
import { useGetCollection } from "../firebase/collection_register_students/useGetCollection";

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
                console.log(error)
                return({ success: false, message: error })
            }
        } catch (error) {
            console.log('Error ao buscas todas as coleção fichas dos alunos: ', error.message)
            return({ success: false, message: error.message })
        }finally {
            setLoading(false);
        }

    }, [])
    return {
        getDocuments,
        loading
    }
}