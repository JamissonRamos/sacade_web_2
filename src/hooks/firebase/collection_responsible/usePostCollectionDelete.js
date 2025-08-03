import { useCallback } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../../../services/firebase/config';

export const usePostCollectionDelete = () => {
    const collectionName = 'responsible_students'
    const collectionDelete = useCallback(async (idResponsible, idStudent) => {
        try {
            //Referência ao documento
            const docRef = doc(db, collectionName, idResponsible);
            
            // Primeiro obtemos o documento atual
            const docSnap = await getDoc(docRef);
            
            if (!docSnap.exists()) {
                return { success: false, message: 'Documento não encontrado' };
            }
            
            const currentData = docSnap.data();            
            
            //Filtramos os arrays para remover os itens indesejados
            const updatedIdStudent = currentData.idStudent.filter(
                id => !idStudent.includes(id)
            );

            const updatedIdStudentLevel = currentData.idStudentLevel.filter(
                item => !idStudent.includes(item.idStudent)
            );

            // Atualizamos o documento com os novos arrays
            await updateDoc(docRef, {
                idStudent: updatedIdStudent,
                idStudentLevel: updatedIdStudentLevel
            });
            
            return { success: true };
            
        } catch (error) {
            console.error('Erro ao atualizar item da coleção:', error);
            return { 
                success: false, 
                message: `Erro ao tentar atualizar: ${error.message}` 
            };
        }
    }, []);
    
    return { collectionDelete };
};