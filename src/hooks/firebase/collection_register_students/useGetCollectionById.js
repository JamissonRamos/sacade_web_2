import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from '../../../services/firebase/config';

export const useGetCollectionByIdRegisterStudent = () => {
    const collectionName = 'register_student';

    const getDocumentsByIdRegisterStudent = async (idStudent) => {
        try {
            const q = query(collection(db, collectionName), where("idStudent", "==", idStudent));
            //const q = query(collection(db, collectionName), where("idStudent", "array-contains", idStudent));

            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                return { success: true, data: false };
            }

            const documents = querySnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }));          
            return { success: true, data: documents }; // Retorna todos os documentos encontrados

        } catch (error) {
            console.error("Erro ao recuperar os documentos:", error.message);
            return { success: false, message: error.message };
        }
    };
    return { getDocumentsByIdRegisterStudent };
};

