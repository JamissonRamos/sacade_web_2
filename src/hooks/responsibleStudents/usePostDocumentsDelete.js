import { useState, useCallback } from "react";
import { usePostCollectionDelete } from "../firebase/collection_responsible/usePostCollectionDelete";

export const usePostDocumentsDelete = () => {
    const [loading, seLoading] = useState(false);
    const {collectionDelete} = usePostCollectionDelete();

    const deleteResponsibleStudent = useCallback( async (idResponsible, idStudent) => {
        seLoading(true);      
        try {
            const result = await collectionDelete(idResponsible, idStudent)
            const { success, message } = result;
            if(success)
            {
                return { success: true };
            }else {
                return { success: false,  message: message };
            }
            
        } catch (error) {
            console.log('Erro ao deletar os dados: ', error.message);
            return { success: false,  message: error.message };
        } finally {
            seLoading(false);
        }

    }, [])

    return {
        deleteResponsibleStudent,
        loading 
    }

}