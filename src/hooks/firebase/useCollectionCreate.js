import { useCallback } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../services/firebase/config';

export const useCollectionCreate = () => {
    /* essa funão para atualizar dados  */
    const collectionCreate = useCallback(async (data, collection) => {
        try {
            const {uid, ...otherData } = data;
            // Now, store additional user details in Firestore
            const docRef = doc(db, collection, uid);
            await setDoc(docRef, {
                uid: uid,
                ...otherData
            });     
            return { success: true, uid };
        } catch (error) {
            console.error('Error create collection user:', error);
            return { success: false, message: error.message };
        }
    }, []);
    
    return { collectionCreate };
};