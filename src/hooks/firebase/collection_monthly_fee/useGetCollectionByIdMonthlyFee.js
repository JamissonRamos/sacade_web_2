import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"; 
import { db } from '../../../services/firebase/config';

export const useGetCollectionByIdMonthlyFee = () => {
    const collectionName = 'monthly_fee'

    const getDocumentsByIdMonthlyFee = async (uidMonthlyFee) => {
        console.log('uidMonthlyFee', uidMonthlyFee);
        
        try {
            // array-contains
            // const q = query(collection(db, collectionName), where("idStudent", "==", idStudent));
            const q = query(collection(db, collectionName), where("uidMonthlyFee", "==", uidMonthlyFee));

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                return { success: false, message: "Nenhum documento encontrado!" };
            }

            const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));          
            return { success: true, data: documents }; // Retorna todos os documentos encontrados

        } catch (error) {
            console.error("Erro ao recuperar os documentos:", error.message);
            return { success: false, message: error.message };
        }
    };

    return { getDocumentsByIdMonthlyFee };
};
