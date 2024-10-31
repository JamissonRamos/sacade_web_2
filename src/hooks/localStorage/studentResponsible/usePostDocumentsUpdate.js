import { useState, useCallback } from "react";

export const usePostDocumentUpdate = () => {
    const [loading, setLoading] = useState(false);
    const collectionName = 'studentResponsible';

    const updateLocalStorageStudentResponsible = useCallback( async (key, userData) => {

        setLoading(true);
        
        try {
            // Recupera os dados do localStorage
            const storedData = localStorage.getItem(collectionName);
             // Verifica se existem dados armazenados
            if (!storedData) {
                console.log('Nenhum dado encontrado no localStorage.');
                return{
                    success: false,
                    message: 'Nenhum dado encontrado no localStorage.'
                }
            }
            // Converte os dados de volta para um array
            const dataArray = JSON.parse(storedData);
            // Atualiza o item no índice especificado
            if (dataArray[key]) {
                dataArray[key] = { ...dataArray[key], ...userData };
            }else{
                return{
                    success: false,
                    message: 'Nenhum responsável encontrado.'
                }
            }
            // Salva o array atualizado de volta no localStorage
            localStorage.setItem(collectionName, JSON.stringify(dataArray));
            return{
                success: true
            }

            
        } catch (error) {
            console.log('Erro ao atualizar os dados: ', error.message);
            return { success: false,  message: error.message };
        } finally {
            setLoading(false);
        }

    }, [])

    return {
        updateLocalStorageStudentResponsible,
        loading
    }

}