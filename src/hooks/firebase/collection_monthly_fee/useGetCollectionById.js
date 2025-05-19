import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../../services/firebase/config';

export const useGetCollectionById = () => {
    const collectionName = 'monthly_fee'

    const getDocumentById = async (uid) => {
        console.log('2uid: ', uid);
        
        try {            
            const docRef = doc(db, collectionName, uid); // Referência ao documentos
            
           const docSnap = await getDoc(docRef); // Recupera o documentos
        
            if (docSnap.exists()) {
                const document = docSnap.data();
                return {success: true, data: document }; //Retorna o documento com o id
            }else {
                return {success: false, message: "Coleção não encontrada2!" };
            }
        }catch (error) {
            console.error("Erro ao recuperar o documento:", error.message);
            return { success: false, message: error.message };
        }
    };

    return { getDocumentById };
};
