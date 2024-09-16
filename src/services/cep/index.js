
export const searchCep = async (cep) => 
    {   
    
        try {
            const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await resp.json();
            console.log(data);
            // Adicione qualquer tratamento adicional dos dados aqui
            if (data.erro) {
                return { success: false, message: 'CEP não encontrado.' };
            }
            
            // Retorna os dados do CEP para serem utilizados no componente React
            return {
                success: true,
                data: {
                    logadouro: data.logradouro,
                    neighborhood: data.bairro,
                    city: data.localidade,
                    federativeUnit: data.uf,
                },
            }
    
        } catch (error) {
            console.error('Erro ao buscar o CEP:', error);
            return { success: false, message: 'Erro ao buscar o CEP. Tente novamente.' };
        }
    }