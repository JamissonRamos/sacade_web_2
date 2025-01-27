import { useCallback, useState } from "react";
import { useGetCollectionByIdRegisterStudent } from "../firebase/collection_register_students/useGetCollectionById";

export const useGetDocumentsByIdRegisterStudent = () => {
    const [loading, setLoading] = useState(false);
    //const [error, setError] = useState(null);
    const { getDocumentsByIdRegisterStudent } = useGetCollectionByIdRegisterStudent();

    const getDocumentsById = useCallback(async (uidStudent) => {
        setLoading(true);
        //setError(null);
        try {
            const result = await getDocumentsByIdRegisterStudent(uidStudent);            
            const { success, data, message} = result;
            if(success){
                return{
                    success: true,
                    data: data,
                }
            }else{
                return {
                    success: false, message: message 
                }
            }
        } catch (error) {
            console.log('Error ao buscas coleção: ', error.message)
            return({success: false, message: 'Todo mundo erra, e desta vez foi a nossa vez. Por favor, tente novamente.'})
        }finally {
            setLoading(false);
        }


    }, [])
    return {
        getDocumentsById,
        //error,
        loading
    }
}