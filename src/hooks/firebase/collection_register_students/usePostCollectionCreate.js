// import { useCallback } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from '../../../services/firebase/config';

// export const useCollectionCreate = () => {
//     const collectionName = 'students';

//     /* Função para criar nova coleção */
//     const collectionCreate = useCallback(async (data) => {
//         try {
//             const docRef = await addDoc(collection(db, collectionName), data);
//             return { success: true, idStudent: docRef.id };
//         } catch (error) {
//             console.error('Error ao criar documento na coleção alunos:', error.message);
//             return { success: false, message: error.message };
//         }
//     }, []);

//     return { collectionCreate };
// };