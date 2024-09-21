import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../services/firebase/config';

export const useCollectionID = () => {

    const getDocumentById = async (collectionName, uid) => {
        try {
            const docRef = doc(db, collectionName, uid); // Referência ao documento
            const docSnap = await getDoc(docRef); // Recupera o documento
        
            if (docSnap.exists()) {
                return {success: true, ...docSnap.data() }; // Retorna o documento com o id
            } else {
                console.log("Documento não encontrado!");
                return { success: false, message: "Documento não encontrado!" };
            }
        }catch (error) {
            console.error("Erro ao recuperar documento:", error);
            return { success: false, message: "Erro ao recuperar documento:", error };
        }
    };

    return { getDocumentById };
};