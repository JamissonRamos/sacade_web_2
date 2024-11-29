import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../../services/firebase/config';

export const useGetCollection = () => {
    const collectionName = 'configuration_installments'
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
<<<<<<< HEAD
            return { success: false, message: error.message };
=======
            return { success: false, error: error.message };
>>>>>>> 2c3bd9a311530df20a38897e3e3a6c1ea32d6ff0
        }
    };

    return { getCollection };
};


