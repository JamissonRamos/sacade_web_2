// //Função para recuperar os dados do local Storage
// export const getStudentResponsible = async () => {
//     try {
//         // Obtém os cadastros do localStorage
//         const cadastros = await JSON.parse(localStorage.getItem('studentResponsible')) || [];
//         // Retorna os cadastros ou uma mensagem se estiver vazio
//         if (cadastros.length > 0){
//             return{
//                 success: true,
//                 data: cadastros
//             };

//         }else{ 
//             return{
//                 success: false,
//                 message: 'Nenhum cadastro encontrado.'
//             }
//         }
//     } catch (error) {
//         // Retorna uma mensagem de erro em caso de falha
//         return { success: false, message: error.message };
//     }
// };

// //Função para criar documents no local storage
// export const createStudentResponsible = async (data) => {
//     try {
//         // Obtém os cadastros existentes do localStorage ou inicializa um array vazio
//         let cadastros = JSON.parse(localStorage.getItem('studentResponsible')) || [];

//         // Adiciona o novo usuário ao array de cadastros
//         cadastros.push(data);

//         // Salva o array atualizado de volta no localStorage
//         localStorage.setItem('studentResponsible', JSON.stringify(cadastros));

//         // Retorna uma mensagem de sucesso
//         return { success: true };
//     } catch (error) {
//         // Retorna uma mensagem de erro em caso de falha
//         return { success: false, message: error.message };
//     }
// };

// // Função para atualizar os dados no localStorage
// export const updateStudentResponsible = async (key, data) => {
//     // Recupera os dados do localStorage
//     const storedData = localStorage.getItem('studentResponsible');
//     // Verifica se existem dados armazenados
//     if (storedData) {
//         // Converte os dados de volta para um array
//         const dataArray = JSON.parse(storedData);
//         // Atualiza o item no índice especificado
//         if (dataArray[key]) {
//             dataArray[key] = { ...dataArray[key], ...data };
//         }
//         // Salva o array atualizado de volta no localStorage
//         localStorage.setItem('studentResponsible', JSON.stringify(dataArray));
//         return{
//             success: true
//         }
//     } else {
//         console.log('Nenhum dado encontrado no localStorage.');
//         return{
//             success: false
//         }
//     }
// };
// // Função para deletar os dados no localStorage
// export const deleteStudentResponsible = async (key) => {

//     try {
//         // Recupera os dados do localStorage
//         const storedData = localStorage.getItem('studentResponsible');
//         // Verifica se existem dados armazenados
//         if (storedData) {
//             // Converte os dados de volta para um array
//             const dataArray = JSON.parse(storedData);
//             // Verifica se o índice é válido
//             if (key < 0 || key >= dataArray.length) {
//                 return { success: false, message: 'Índice inválido' };
//             }
//             // Filtra o array para remover o item no índice especificado
//             const updatedArray = dataArray.filter((_, i) => i !== key);
//             // Salva o array atualizado de volta no localStorage
//             localStorage.setItem('studentResponsible', JSON.stringify(updatedArray));
//             return { success: true };
//         }else {
//             console.log('Nenhum cadastro foi encontrado no localStorage.');
//             return{
//                 success: false,
//                 message: 'Nenhum cadastro foi encontrado no localStorage.'
//             }
//         }
        
//     } catch (error) {
//         return{
//             success: false,
//             message: error.message
//         }
        
//     }
// };

