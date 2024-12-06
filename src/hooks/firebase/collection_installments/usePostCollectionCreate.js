import { useCallback } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../services/firebase/config';

export const useCollectionCreate = () => {
    const collectionName = 'installments';

    /* Função para criar nova coleção */
    const collectionCreate = useCallback(async (data) => {
        try {            
            await addDoc(collection(db, collectionName), data);            
            return { success: true};
        } catch (error) {
            console.error('Error ao criar documento na coleção parcelas:', error.message);
            return { success: false, message: error.message };
        }
    }, []);

    return { collectionCreate };
};