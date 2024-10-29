import { useCallback, useState } from "react";
import { useGetCollectionByIdStudent } from "../firebase/collection_responsible/useGetCollectionByIdStudent";

export const useGetDocumentsByIdStudents = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { getDocumentsByIdStudent } = useGetCollectionByIdStudent();

    const getDocumentsByIdStudents = useCallback(async (uidStudent) => {
        setLoading(true);
        setError(null);
        try {
            const result = await getDocumentsByIdStudent(uidStudent);
            const { success, data, message} = result;

            console.log('data:', data);
            
            if(success){
                return{
                    success: true,
                    data: data,
                }
            }else{
                setError({ success: false, message: message })
                return {
                    success: false,
                }
            }
        } catch (error) {
            console.log('Error ao buscas coleção: ', error.message)
            setError({success: false, message: 'Todo mundo erra, e desta vez foi a nossa vez. Por favor, tente novamente.'})
        }finally {
            setLoading(false);
        }


    }, [])
    return {
        getDocumentsByIdStudents,
        error,
        loading
    }
}