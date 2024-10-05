import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../../services/firebase/config';

export const useGetCollectionById = () => {
    const collectionName = 'users'
    const getDocumentById = async (uid) => {
        try {            
            const docRef = doc(db, collectionName, uid); // Referência ao documentos

           const docSnap = await getDoc(docRef); // Recupera o documentos
        
            if (docSnap.exists()) {
                const document = docSnap.data();
                return {success: true, data: document }; //Retorna o documento com o id
            }else {
                return {success: false, message: "Coleção não encontrada!" };
            }
        }catch (error) {
            console.error("Erro ao recuperar o documento:", error.message);
            return { success: false, message: error.message };
        }
    };

    return { getDocumentById };
};
