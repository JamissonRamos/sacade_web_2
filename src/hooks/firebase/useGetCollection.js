import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../services/firebase/config';

export const useGetCollection = () => {

    const getDocuments= async (collectionName) => {
        try {            
            const docRef = collection(db, collectionName); // Referência ao documentos

           const docSnap = await getDocs(docRef); // Recupera o documentos

            //const documents = docSnap.docs.map(doc => doc.data());  // Mapeia os dados

             // Mapeia os documentos para um array
            const documents = docSnap.docs.map(doc => ({
                ...doc.data()
            }));
            console.log(documents);
            
            return {success: true, data: documents };
        }catch (error) {
            console.error("Erro ao recuperar todos os documento:", error);
            return { success: false, message: `Erro ao tenta recuperar os documento` };
        }
    };

    return { getDocuments };
};