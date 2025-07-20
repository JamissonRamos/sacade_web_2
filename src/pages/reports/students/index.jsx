import * as S from './styled';
import Header from './header';
import Body from './Body';
import Fields from './fields';
import { Spinner } from 'react-bootstrap';
import { AlertCustom } from '../../../components/alert_custom';
import { useEffect, useState } from 'react';
import { Theme } from '../../../theme';
import { TextC } from '../../../components/Typography';
import { GeneratePdf } from '../../../hooks/createDocPdf';
import { useStudents } from '../../../hooks/students';
import { LoadingOverlay } from '../../../components/spinner/global/styled';

const ReportStudents = () => {
    // Estado para armazenar os dados filtrados
    const [allStudents, setAllStudents] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    // Estado para controlar o alerta de criação do PDF
    const [isCreatDocPdf, setIsisCreatDocPdf] = useState({showAlert: false, success: false, message: ''});
    
    const { getDocuments, loading: loadingGetDoc} = useStudents.useGetDocuments();
    const {createDocPdf, loading: loadingCreateDocPdf } = GeneratePdf()

    // Estado para os valores dos filtros
    const [filters, setFilters] = useState({
        status: '',
        sex: ''
    });

    // Estado para controlar o carregamento dos dados
    const fetch = async () => {
        const result = await getDocuments();
        const {success, data } = result;
        if(success){
            const newData = data && data.map((item) => ({
                firstName: item.firstName || '',
                lastName: item.lastName|| '',
                sex: item.sex?.toUpperCase() || "",
                status: item.status?.toUpperCase() || "",
            }));
            setFilteredData(newData);   
            setAllStudents(newData);
        }else{
            console.log('Erro ao buscar documentos:', result.message);
        }
    }

    // Função para lidar com mudanças nos filtros
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
        ...prev,
        [name]: value
        }));
    };

    // Função para gerar o PDF (placeholder)
    const handleGeneratePdf = async () => {

        // Recuperar o cabeçalho da tabela
        const headersDoc = ['#', 'Nome', 'Status', 'Sexo'];
        // Recuperar o título do PDF
        const titleDoc = 'Relatório de Alunos';
        // Recuperar os dados do PDF
        const dataDoc = filteredData && filteredData.map((item, index) => [
            index + 1,
            `${item.firstName} ${item.lastName}`,
            item.status,
            item.sex
        ]);
        // Nome do arquivo PDF  
        const nameDoc = `relatorio_alunos${filters.status !== "" ? `_${filters.status}` : ''}${filters.sex !== "" ? `_${filters.sex}` : ''}`;

        //GeneratePdf
        const result = await createDocPdf({headersDoc, titleDoc, dataDoc, nameDoc});
        const { success, message } = result;
        if (success) {
            setIsisCreatDocPdf({showAlert: true, success: true, message: 'PDF gerado com sucesso!'});
        }else{
            setIsisCreatDocPdf({showAlert: true, success: false, message: 'Erro ao gerar PDF.'});
            console.error('Erro ao gerar PDF:', message); 
            
        }
    } 

    // Carregar os dados do alunos
    useEffect(() => {
        fetch()
    }, []);

    // Efeito para filtrar os dados sempre que os filtros mudarem
    useEffect(() => {
        if(allStudents.length === 0) return;

        if (filters.firstName === '' && filters.status === '' && filters.sex === '')  setFilteredData(allStudents);

        const filtered = allStudents.filter(item => {
            return (
                (filters.status === '' || item.status === filters.status) &&
                (filters.sex === '' || item.sex === filters.sex)
            );
        });
        setFilteredData(filtered);
    }, [filters]);

    
    // Renderizando o componente
    if (loadingGetDoc) {
        return (
            <LoadingOverlay>
                <Spinner
                    as="span"
                    animation="border"
                    role="status"
                    aria-hidden="true"
                />
                <span>Carregando os dados...</span>
            </LoadingOverlay> 
        );
    }

    return (
        <S.Container>
            {isCreatDocPdf.showAlert &&
                <AlertCustom 
                    variant={isCreatDocPdf.success ? 'success' : 'danger'}
                    handleCloseAlert={() => setIsisCreatDocPdf({success: false, message: ''})}>
                    {isCreatDocPdf.message}
                </AlertCustom>
            }

            <Header />

            <Fields 
                filters={filters} 
                handleFilterChange={handleFilterChange} 
            />
            
            {filteredData.length > 0 && 
                <Body 
                    filteredData={filteredData}
                    //totalStudents={totalStudents}
                />
            }

            {filteredData.length === 0 && (
                <div className="text-center text-muted py-3">
                    <p>Nenhum aluno encontrado.</p>
                </div>
            )}

            <S.WrapButton> 
                <S.Button
                    type="button"
                    onClick={() => {handleGeneratePdf()}}
                    disabled={loadingCreateDocPdf}
                >
                    { loadingCreateDocPdf 
                        ?   
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span> Gerando Documento... </span>
                            </> 
                        :
                            <>
                                <TextC.Label>Baixar Dados</TextC.Label>
                                <Theme.Icons.MdSaveAlt />
                            </>
                    }

                </S.Button>
            </S.WrapButton>

        </S.Container>
    )
}

export default ReportStudents;