import { useCallback, useState } from "react";
import { useGetCollection } from "../firebase/useGetCollection";

export const useGetDocuments = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const collection = 'users'
    const { getDocuments } = useGetCollection();

    const documents = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const fetchRegistered = await getDocuments(collection); // Operação assíncrona
            console.log(fetchRegistered.data);
            
            if(fetchRegistered.success){
                return {
                    success: true,
                    data: fetchRegistered.data
                };
            }else{
                setError(fetchRegistered.message)
                return {
                    success: false
                };
            }

        } catch (error) {
            console.log('Erro ao tenta buscar os documentos: ', error.message);
            setError('Erro ao tenta buscar os documentos: ');
            return {
                success: false
            };
            
        }finally {
            setIsLoading(false);
        }
    }, []);  // Aqui você removeu getDocuments para evitar loops
    
    
    return {
        documents,
        isLoading,
        error
    }
    
}