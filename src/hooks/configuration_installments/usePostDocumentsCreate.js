import { useState, useCallback } from "react";
import { useCollectionCreate } from "../firebase/collection_configuration_installments/usePostCollectionCreate";

export const usePostDocumentsCreate = () => {
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    const {collectionCreate} = useCollectionCreate();
    
    const createConfigurationInstallments = useCallback(async (data) => {

        setLoading(true);
        // setError(null);

        try {
            const result = await collectionCreate(data); 
            const {success, message } = result;

            if(success){
                return { success: true };
            }else{
                // setError('Algo não sair como esperado tente novamente: ' + message)
                return {success: false, message: `'Erro ao tenta criar coleção no firebase Responsible Student': ${message}`}
            }

        } catch (error) {
            // setError('Erro ao criar coleção: ' + error.message)
            return {success: false, message: `Erro ao criar coleção: ${error.message}`}


        } finally {
            setLoading(false);
        }
    }, [collectionCreate]);
    
    return {
        createConfigurationInstallments, loading
    }
}