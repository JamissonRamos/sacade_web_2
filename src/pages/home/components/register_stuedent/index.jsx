/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRegisterStudents } from '../../../../hooks/registerStudent';
// import StatisticsRegisterStudentsRangerList from './statistics/ranger_list';
import * as S from './styled';
import GraphicBar from './graphic_range_bar';
import { Spinner } from 'react-bootstrap';
import { TextC } from '../../../../components/Typography';

const RegisterStudent = () => {
    const [rangeCount, setRangeCount] = useState([]);

    const {getDocuments, loading} = useRegisterStudents.useGetDocuments();

    const countRange = (data) => {
        const rangeCount = {}
        
        // Passo 1: Filtrar os objetos onde currentHistory é true
        const filteredData = data.filter(item => item.currentHistory === true);
        
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
        const result = await getDocuments();
        const { success, data, message } = result;

        if(success){
            countRange(data);
            console.log('data', data);
            
            // Exibir o resultado
        }else{
            console.log('error: ', message);
        }
    };

    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    }, []);

    console.log('rangeCount', rangeCount);
    
    
    return (
        <S.Container>
            <S.WrapGraphicBar>
                <S.WrapTitle>
                    <TextC.Title level={2} >
                        Faixas dos Alunos
                    </TextC.Title>
                </S.WrapTitle>
                { loading 
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