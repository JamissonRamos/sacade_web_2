import { useCallback } from "react";
import { doc, getDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
import { db } from '../../../services/firebase/config';

export const usePostCollectionUpdateIdStudent = () => {
    //Modificar somente o campo de IdStudent 
    const collectionName = 'responsible_students'

    const updateIdStudent = useCallback(async (documentUid, newUids) => {
        
        try {
            const docRef = doc(db, collectionName, documentUid);

                // Verifica se o documento existe
                const docSnapshot = await getDoc(docRef);
                if (!docSnapshot.exists()) {
                    // Se não existir, cria o documento com o campo idStudent
                    await setDoc(docRef, {
                        idStudent: Array.isArray(newUids) ? newUids : [newUids] // Garante que seja um array
                    });
                } else {
                    // Se existir, atualiza o campo idStudent usando arrayUnion
                    await updateDoc(docRef, {
                        idStudent: arrayUnion(...(Array.isArray(newUids) ? newUids : [newUids]))
                    });
                }

            return { success: true };
        } catch (error) {
            console.error('Error ao atualizar idStudent:', error);
            return { success: false, message: error.message };
        }
    }, []);
    
    return { updateIdStudent };
};

