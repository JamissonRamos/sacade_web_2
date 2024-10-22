import { useState, useCallback } from "react";
import { useCollectionCreate } from "../firebase/collection_responsible/usePostCollectionCreate";

export const usePostDocumentsCreate = () => {
    const [isLoadingCreate, setIsLoadingCrete] = useState(false);
    const [errorCreate, setErrorCreate] = useState(null);

    const {collectionCreate} = useCollectionCreate();
    
    const createResponsibleStudent = useCallback(async (responsibleStudentsData) => {

        setIsLoadingCrete(true);
        setErrorCreate(null);

        try {
            const result = await collectionCreate(responsibleStudentsData ); 
            const {success, message } = result;

            if(success){

                return { success: true };
            }else{
                setErrorCreate('Algo não sair como esperado tente novamente: ' + message)
                return {success: false}
            }

        } catch (error) {
            setErrorCreate('Erro ao criar coleção: ' + error.message)
            return { success: false };

        } finally {
            setIsLoadingCrete(false);
        }
    }, [collectionCreate]);
    
    return {
        createResponsibleStudent, isLoadingCreate, errorCreate
    }
}