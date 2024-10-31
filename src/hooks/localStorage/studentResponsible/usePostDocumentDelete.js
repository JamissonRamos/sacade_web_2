import { useState, useCallback } from "react";

export const usePostDocumentDelete = () => {

    const [loading, setLoading] = useState(false)
    const collectionName = 'studentResponsible';

    const deleteLocalStorageStudentResponsible = useCallback( async (uid) => {
        const key = uid || "";
        setLoading(true);
        try {
            console.log('Array:', storedData);
            
            // Recupera os dados do localStorage
            const storedData = localStorage.getItem(collectionName);
            // Verifica se existem dados armazenados
            if (storedData) {
                // Converte os dados de volta para um array
                const dataArray = JSON.parse(storedData);
                // Verifica se o índice é válido
                if (key < 0 || key >= dataArray.length) {
                    return { success: false, message: 'Índice inválido' };
                }

                console.log('index: ', key);
                
                // Filtra o array para remover o item no índice especificado
                const updatedArray = dataArray.filter((_, i) => i !== key);

                console.log('Nwe Array: ', updatedArray);
                
                // Salva o array atualizado de volta no localStorage
                localStorage.setItem('studentResponsible', JSON.stringify(updatedArray));
                return { success: true };
            }else {
                console.log('Nenhum cadastro foi encontrado no localStorage.');
                return{
                    success: false,
                    message: 'Nenhum cadastro foi encontrado no localStorage.'
                }
            }
            
        } catch (error) {
            return{
                success: false,
                message: `Algo não saiu como esperado! ${error.message}`
            }
            
        } finally {
            setLoading(false);
        }

    }, [])

    return {
        deleteLocalStorageStudentResponsible,
        loading
    }
}