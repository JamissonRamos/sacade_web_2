import * as S from './styled'
import Header from './header'
import { TextC } from '../../../../components/Typography'
import { Theme } from '../../../../theme'
import Body from './Body';
import { useEffect, useState } from 'react';
import { useStudents } from '../../../../hooks/students';
import { useRegisterStudents } from '../../../../hooks/registerStudent';
import { useNavigate } from 'react-router-dom';
import { ExtractRangeData, ExtractStudentData } from '../../scripts';
import { LoadingOverlay } from '../../../../components/spinner/global/styled';
import { Spinner } from 'react-bootstrap';

const ReportCurrentStudentTracks = () => {
    const [registeredStudents, setRegisteredStudents]   = useState([]) //Todos os alunos cadastro no sistema
    const [registeredRange, setRegisteredRange]         = useState([]) //Todos as fichas dos alunos
    const [clsFormStudents, setClsFormStudents]         = useState([]) //Uma cnsulta(csl) alunos e suas fichas
    const navigate = useNavigate();

    const { getDocuments: getStudents, loading: loadingStudent} = useStudents.useGetDocuments()
    const { getDocuments: getRanger, loading: loadingRanger}    = useRegisterStudents.useGetDocuments()

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

            const rangeInfo = registeredRange.reduce((acc, {idStudent, ...rest}) => {
                if (idStudent === student.uidStudent) {
                    return rest; // Retorna apenas as outras propriedades
                }
                return acc;
            }, null) || {};

            return {
                ...student,
                ...rangeInfo,
                isMatched: !!rangeInfo   // Flag indicando se houve correspondência
            };
        });
        setClsFormStudents(combinedStudents);
    }, [registeredRange, registeredStudents])
    
    return (
        <S.Container>

            <Header />
            {
                loadingStudent || loadingRanger &&
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

            {
                clsFormStudents.length == 0 ?
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
                        />
                    </>
            }

            <S.WrapButton> 
                <S.Button
                    type="button"
                    // onClick={() => {handleGeneratePdf()}}
                    disabled={loadingStudent || loadingRanger}
                >
                    <TextC.Label>Baixar Dados</TextC.Label>
                    <Theme.Icons.MdSaveAlt />
                </S.Button>
            </S.WrapButton>
            
        </S.Container>
    )
}

export default ReportCurrentStudentTracks