import { useState, useCallback } from "react";
import { useCollectionCreate } from "../firebase/collection_monthly_fee/usePostCollectionCreate";

export const usePostDocumentsCreate = () => {
    const [loading, setLoading] = useState(false);

    const {collectionCreate} = useCollectionCreate();
    
    const createDocuments = useCallback(async (data) => {
        setLoading(true);

        try {
            const result = await collectionCreate(data); 
            const {success, message } = result;

            if(success){
                return { success: true };
            }else{
                return {success: false, message: `Erro ao tenta criar coleção no firebase Pagamento de Mensalidade: ${message}`}
            }
        } catch (error) {
            return {success: false, message: `Erro ao criar coleção: ${error.message}`}
        } finally {
            setLoading(false);
        }
    }, [collectionCreate]);
    
    return {
        createDocuments, loading
    }
}