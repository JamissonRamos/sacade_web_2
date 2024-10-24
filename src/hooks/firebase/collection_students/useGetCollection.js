import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../../services/firebase/config';

export const useGetCollection = () => {
    const collectionName = 'students'
    const getCollection = async () => {
        try {            
            const docRef = collection(db, collectionName); // Referência ao documentos

           const docSnap = await getDocs(docRef); // Recupera o documentos
        
             // Mapeia os documentos para um array
            const documents = docSnap.docs.map(doc => ({
                uid: doc.id, // Adiciona o ID do documento
                ...doc.data()
            }));

            // console.log('documents : ', documents);
            return {success: true, data: documents };
        }catch (error) {
            console.error("Erro ao recuperar todos os documento:", error.message);
            return { success: false, error: error.message };
        }
    };

    return { getCollection };
};


