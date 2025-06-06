import { useCallback } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../../services/firebase/config';

export const usePostCollectionUpdate = () => {
    const collectionName = 'students'
    const collectionUpdate = useCallback(async (data) => {        
        try {
            const {uid, ...otherData } = data;
            // Now, store additional user details in Firestore
            const docRef = doc(db, collectionName, uid);
            await setDoc(docRef, {
                //uid: uid, aqui são os campos que vai ser alterar dentro da coeleção
                ...otherData
            }, { merge: true });     
            return { success: true };
        } catch (error) {
            console.error('Error no post collection update:', error);
            return { success: false, message: error.message };
        }
    }, []);
    
    return { collectionUpdate };
};
