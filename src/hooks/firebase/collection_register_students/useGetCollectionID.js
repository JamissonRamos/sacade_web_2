import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../../services/firebase/config';

export const useGetCollectionID = () => {
    const collectionName = 'register_student';

    const getDocumentById = async (uid) => {     
        
        try {
            const docRef = doc(db, collectionName, uid); // Referência ao documento
            const docSnap = await getDoc(docRef); // Recupera o documento
            if (docSnap.exists()) {
                const document = {
                    uid: docSnap.id, // Adiciona o ID do documento
                    ...docSnap.data() // Copia todos os campos do documento
                };
                return {success: true, data: document }; //Retorna o documento com o id
            }else {
                return {success: false, message: "Coleção não encontrada!" };
            }
        }catch (error) {
            console.error("Erro ao recuperar documento:", error.message);
            return { success: false, message: "Erro ao recuperar documento." };
        }
    };

    return { getDocumentById };
};