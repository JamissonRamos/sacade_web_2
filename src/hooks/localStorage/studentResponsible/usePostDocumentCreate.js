import { useState, useCallback } from "react";

export const usePostDocumentCreate = () => {
    const [loading, setLoading] = useState(false);
    const collectionName = 'studentResponsible';
    
    const createStudentResponsible = useCallback(async (userData) => {
        setLoading(true);
        try {
            // Obtém os cadastros existentes do localStorage ou inicializa um array vazio
            let cadastros = JSON.parse(localStorage.getItem(collectionName)) || [];
            // Adiciona o novo usuário ao array de cadastros
            cadastros.push(userData);
            // Salva o array atualizado de volta no localStorage
            localStorage.setItem(collectionName, JSON.stringify(cadastros));
            // Retorna uma mensagem de sucesso
            return { success: true };

        } catch (error) {
            console.log('Error ao tenta cadastrar item no local Storage: ', error.message);
            // Retorna uma mensagem de erro em caso de falha
            return { success: false, message: 'Error ao tenta cadastrar item no local Storage' };
        } finally {
            setLoading(false);
        }
    }, []);
    
    return {
        createStudentResponsible, loading
    }
}