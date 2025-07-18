import * as S from './styled';
import Header from './header';
import { TextC } from '../../../../components/Typography';
import { Theme } from '../../../../theme';
import Body from './Body';
import { useEffect, useState } from 'react';
import { useStudents } from '../../../../hooks/students';
import { useRegisterStudents } from '../../../../hooks/registerStudent';
import { useNavigate } from 'react-router-dom';
import { ExtractRangeData, ExtractStudentData, FormatRangeName } from '../../scripts';
import { LoadingOverlay } from '../../../../components/spinner/global/styled';      
import { Spinner } from 'react-bootstrap';
import { GeneratePdf } from '../../../../hooks/createDocPdf';
import { AlertCustom } from '../../../../components/alert_custom';

const ReportCurrentStudentTracks = () => {
    const [registeredStudents, setRegisteredStudents]   = useState([]) //Todos os alunos cadastro no sistema
    const [registeredRange, setRegisteredRange]         = useState([]) //Todos as fichas dos alunos
    const [clsFormStudents, setClsFormStudents]         = useState([]) //Uma cnsulta(csl) alunos e suas fichas
    const [dataGeneratePdf, setDataGeneratePdf]         = useState([]) //Um array com a lista de faixa dos alunos, lista ser gerada em pdf
    // Estado para controlar o alerta de criação do PDF
    const [isCreatDocPdf, setIsisCreatDocPdf] = useState({showAlert: false, success: false, message: ''});
    const navigate = useNavigate();

    const { getDocuments: getStudents, loading: loadingStudent} = useStudents.useGetDocuments()
    const { getDocuments: getRanger, loading: loadingRanger}    = useRegisterStudents.useGetDocuments()
    const { createDocPdf, loading: loadingPdf }                 = GeneratePdf()

    // Função para gerar o PDF (placeholder)
    const handleGeneratePdf = async () => {

        // Recuperar o cabeçalho da tabela
        const headersDoc = ['#', 'Nome', 'Idade', 'Gênero', 'Status', 'Altura', 'Peso', 'Grau', 'Faixa'];
        // Recuperar o título do PDF
        const titleDoc = 'Relatório das Faixas';
        
        if(dataGeneratePdf.length < 0) return;

        // Recuperar os dados do PDF
        const dataDoc = dataGeneratePdf.map((item, index) => [
            index + 1,
            `${item.firstName} ${item.lastName}`,
            item.age,
            item.sex,
            item.status,
            item.studentHeight,
            item.studentWeight,
            item.degrees,
            FormatRangeName(item.range)
        ]);
        // Nome do arquivo PDF  
        const nameDoc = 'relatorio_faixa_alunos';

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
    
    //Busca os dados na base de dados 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentsResult = await getStudents();
                if (!studentsResult.success) {
                    console.log('Erro ao buscar Alunos', studentsResult.error);
                    navigate('/notifications/error');
                    return;
                }

                const rangerResult = await getRanger();
                if (!rangerResult.success) {
                    console.log('Erro ao buscar Fichas dos Alunos', rangerResult.message);
                    navigate('/notifications/error');
                    return;
                }

                //Verificando se tem dados a ser mostrados 
                if(!studentsResult.data || studentsResult.data.length === 0 ) return
                if(!rangerResult.data || rangerResult.data.length === 0 ) return

                //Extrair dados das lista e passar para os states e ser alterados
                const resultExtractStudents = ExtractStudentData(studentsResult.data)
                setRegisteredStudents(resultExtractStudents);
                const resultExtractRange = ExtractRangeData(rangerResult.data);
                setRegisteredRange(resultExtractRange);

            } catch (err) {
                console.log('Erro inesperado', err);
                navigate('/notifications/error');
            }
        };

    fetchData();
    }, []);

    //Alunos e suas fichas atual
    useEffect(() => {
        const combinedStudents = registeredStudents.map(student => {
            // Se rangeInfo não for null, houve match
            let hasMatch = false
            const rangeInfo = registeredRange.reduce((acc, {idStudent, ...rest}) => {
                if (idStudent === student.uidStudent) {
                    hasMatch = true; // Define a flag como true se houver correspondência
                    return rest; // Retorna apenas as outras propriedades
                }
                return acc;
            }, null) || {};

            return {
                ...student,
                ...rangeInfo,
                isMatched: hasMatch   // Flag indicando se houve correspondência
            };
        });

        setClsFormStudents(combinedStudents.filter(student => student.isMatched));
    }, [registeredRange, registeredStudents])
    
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

            {loadingStudent || loadingRanger &&
                    <LoadingOverlay>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        <span>Carregando os dados...</span>
                    </LoadingOverlay> 
            }

            {clsFormStudents.length == 0 ?
                    <S.Empty>
                        <TextC.Display level={2} >
                            Nenhum cadastro
                        </TextC.Display>
                        <TextC.Body level={2}>
                            Não encontramos nenhum cadastro em nossa base de dados.
                        </TextC.Body>
                    </S.Empty> 
                :
                    <>
                        <Body 
                            filteredData={clsFormStudents}
                            setDataGeneratePdf={setDataGeneratePdf}
                        />
                    </>
            }

            <S.WrapButton> 
                <S.Button
                    type="button"
                    onClick={() => {handleGeneratePdf()}}
                    disabled={loadingStudent || loadingRanger || loadingPdf}
                >
                    <TextC.Label>Baixar Dados</TextC.Label>
                    <Theme.Icons.MdSaveAlt />
                </S.Button>
            </S.WrapButton>
            
        </S.Container>
    )
}

export default ReportCurrentStudentTracks