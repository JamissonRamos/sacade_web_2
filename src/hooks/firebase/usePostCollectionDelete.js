import { useCallback } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../services/firebase/config';

export const usePostCollectionDelete = () => {

    const collectionDelete = useCallback(async (uid, collection) => {
        try {
            // Referência ao documento no Firestore
            const docRef = doc(db, collection, uid);
            // Excluir o documento
            await deleteDoc(docRef);
            return { success: true };
        } catch (error) {
            console.error('Error ao deletar documento da coleção:', error);
            return { success: false, message: error.message };
        }
    }, []);
    
    return { collectionDelete };
};
