import { useState, useCallback } from "react";
import { useCollectionCreate } from "../firebase/collection_students/usePostCollectionCreate";

export const usePostDocumentsCreate = () => {
    const [isLoadingCreate, setIsLoadingCrete] = useState(false);
    const [errorCreate, setErrorCreate] = useState(null);

    const {collectionCreate} = useCollectionCreate();
    
    const createStudent = useCallback(async (studentsData) => {

        setIsLoadingCrete(true);
        setErrorCreate(null);

        try {
            const result = await collectionCreate(studentsData ); 
            const {success, idStudent, message } = result;

            if(success){

                return { success: true, uid: idStudent };
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
        createStudent, isLoadingCreate, errorCreate
    }
}