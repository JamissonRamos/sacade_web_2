import * as S from './styled';

import { useEffect, useState } from "react";
import { useStudents } from "../../../../hooks/students";
import { useRegisterStudents } from "../../../../hooks/registerStudent";
import { useNavigate } from "react-router-dom";
import { ConsultationStudentRecord, ExtractRangeData, ExtractStudentData, FormatRangeName } from "./script";
import { GeneratePdf } from '../../../../hooks/createDocPdf';
import { Theme } from '../../../../theme';

import Header from './header';
import Body from './Body';
import { LoadingOverlay } from '../../../../components/spinner/global/styled';
import { Spinner } from 'react-bootstrap';
import { TextC } from '../../../../components/Typography';
import { AlertCustom } from '../../../../components/alert_custom';

const CompetitorStudent = () => {
    const [clsFormStudents, setClsFormStudents] = useState([]) //Uma cnsulta(csl) alunos e suas fichas
    const [dataGeneratePdf, setDataGeneratePdf] = useState([]) //Um array com a lista de faixa dos alunos, lista ser gerada em pdf
    // Estado para controlar o alerta de criação do PDF
    const [isCreatDocPdf, setIsisCreatDocPdf]   = useState({showAlert: false, success: false, message: ''});
    const navigate = useNavigate();
    
    const { getDocuments: getStudents, loading: loadingStudent} = useStudents.useGetDocuments()
    const { getDocuments: getRanger, loading: loadingRanger}    = useRegisterStudents.useGetDocuments()
    const { createDocPdf, loading: loadingPdf }                 = GeneratePdf()

    //Busca os dados na base de dados 
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

            // const resultStudentsLocalStorage = localStorage.getItem(JSON.stringify('uisStudents'));
            const resultStudentsLocalStorage = JSON.parse(localStorage.getItem('uisStudents') || '[]');
            
            //Verificando se tem dados a ser mostrados 
            if(!studentsResult.data || studentsResult.data.length === 0 ) return
            if(!rangerResult.data || rangerResult.data.length === 0 ) return

            //Extrair dados das lista e passar para os states e ser alterados
            const resultExtractStudents = ExtractStudentData(studentsResult.data)
            const resultExtractRange = ExtractRangeData(rangerResult.data);
            const resultClsAlunoRecord = ConsultationStudentRecord(resultExtractStudents, resultExtractRange);

            //Filtrar alunos que estão no localStorage
            const filteredStudents = resultClsAlunoRecord.filter(student =>
                resultStudentsLocalStorage.some(localStudent => localStudent.uid === student.uidStudent)
            );
            setClsFormStudents(filteredStudents);
        } catch (err) {
            console.log('Erro inesperado', err);
            navigate('/notifications/error');
        }
    };

    // Função para gerar o PDF (placeholder)
    const handleGeneratePdf = async () => {
        // Recuperar o cabeçalho da tabela
        const headersDoc = ['#', 'Nome', 'Data Nascimento', 'Idade', 'Gênero', 'Altura', 'Peso', 'Grau', 'Faixa'];
        // Recuperar o título do PDF
        const titleDoc = 'Relatório dos Competidores';
        
        if(dataGeneratePdf.length < 0) return;

        // Recuperar os dados do PDF
        const dataDoc = dataGeneratePdf.map((item, index) => [
            index + 1,
            `${item.firstName} ${item.lastName}`,
            item.birthDate,
            item.age,
            FormatRangeName(item.sex),
            item.studentHeight,
            item.studentWeight,
            item.degrees,
            FormatRangeName(item.range)
        ]);
        // Nome do arquivo PDF  
        const nameDoc = 'relatorio_competidores';

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

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
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

            { loadingStudent || loadingRanger &&
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

            { clsFormStudents.length == 0 ?
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

export default CompetitorStudent