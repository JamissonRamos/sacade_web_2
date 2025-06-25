/* eslint-disable react-hooks/exhaustive-deps */
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useRegisterStudents } from '../../../../hooks/registerStudent';
import { useStudents } from '../../../../hooks/students';
import { useNavigate } from 'react-router-dom';

import GraphicBar from './graphic_range_bar';
import { Spinner } from 'react-bootstrap';
import { TextC } from '../../../../components/Typography';

const RegisterStudent = () => {
    const [rangeCount, setRangeCount] = useState([]);
    const [students, setStudents] = useState([]);
    const [tracks, setTracks] = useState([]);
    const navigate = useNavigate();

    const {getDocuments: getDocTracks, loading: loadingTracks} = useRegisterStudents.useGetDocuments();
    const {getDocuments: getDocStudent, loading: loadingStudents} = useStudents.useGetDocuments();

    const countRange = (data) => {
        const rangeCount = {}
        
        // Passo 1: Filtrar os objetos onde currentHistory é true
        const filteredData = data.filter(item => item.currentHistory === true );
        
        // Passo 2: Contar a ocorrência de cada range
        filteredData.forEach(item => {
            if (rangeCount[item.range]) {
                rangeCount[item.range]++;
            } else {
                rangeCount[item.range] = 1;
            }
        });
        setRangeCount(rangeCount)
    }

    const fetchDocuments = async () => {

        try { 
            const [studentsResult, tracksRsult] = await Promise.all([
                getDocStudent(),
                getDocTracks(),
            ])

            //console.log('tudentsResult.data', studentsResult.data);
            if(studentsResult.success){
                
                setStudents(studentsResult.data)
            }else {
                console.log('Erro ao buscar Alunos', studentsResult.error);
                navigate('/notifications/error');
                return;
            }

            if(tracksRsult.success){
                //console.log('tracksRsult.data', tracksRsult.data);
                
                setTracks(tracksRsult.data)
            }else {
                console.log('Erro ao buscar faixas dos alunos', tracksRsult.error);
                navigate('/notifications/error');
                return;
            }
        } catch (err) {
            console.log('Erro inesperado', err);
                navigate('/notifications/error');
        }






        // const result = await getDocRegisterStudents();
        // const { success, data, message } = result;
        // if(success){
        //     data.length > 0 && countRange(data);
        // }else{
        //     console.log('error: ', message);
        // }
    };

    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    }, []);

     //Alunos e suas fichas atual
    useEffect(() => {
        const filteredTracks = tracks.filter(track => {
            // Encontrar o estudante correspondente
            const student = students.find(student => student.uid === track.idStudent);
            
            // Retornar true apenas se o estudante existir e não for inativo
            return student && student.status !== 'inativo';
    });
    countRange(filteredTracks);

    }, [students, tracks])

    return (
        <S.Container>
            
            <S.WrapGraphicBar>

                <S.WrapTitle>
                    <TextC.Title level={2} >
                        Indicador de Faixas
                    </TextC.Title>
                </S.WrapTitle>

                { loadingTracks || loadingStudents
                    ?   <>
                            <Spinner
                                variant="warning"
                                as="span"
                                animation="border"
                                role="status"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Carregando os dados...</span>
                        </>
                    :   null
                }

                { rangeCount && rangeCount.length == 0
                        ?   <S.Empty>
                                <TextC.Display level={2} >
                                    Nenhum cadastro
                                </TextC.Display>
                                <TextC.Body level={2}>
                                    Até o momento, não há cadastro de fichas de alunos.
                                </TextC.Body>
                            </S.Empty> 
                        :   <GraphicBar data={rangeCount} />     
                }

            </S.WrapGraphicBar>

        </S.Container>
    )
}

export default RegisterStudent