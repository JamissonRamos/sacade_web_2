// import { useState, useCallback } from "react";
// import { usePostCollectionUpdateIdStudent } from "../firebase/collection_responsible/usePostCollectionUpdateIdStudent";

// export const usePostDocumentsUpdateIdStudent = () => {
//     const [loading, seLoading] = useState(false);
//     const {updateIdStudent} = usePostCollectionUpdateIdStudent();

//     const updateResponsibleStudentUidStudent = useCallback( async (documentUid, newUdis) => {
        
//         seLoading(true);              
//         try {
//             const result = await updateIdStudent(documentUid, newUdis)
//             const { success, message } = result;
//             if(success)
//             {
//                 return { success: true };
//             }else {
//                 return { success: false,  message: message };
//             }
            
//         } catch (error) {
//             console.log('Erro ao atualizar os dados: ', error.message);
//             return { success: false,  message: error.message };
//         } finally {
//             seLoading(false);
//         }

//     }, [updateIdStudent])

//     return {
//         updateResponsibleStudentUidStudent,
//         loading 
//     }

// }