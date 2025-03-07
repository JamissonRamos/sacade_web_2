/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRegisterStudents } from '../../../../hooks/registerStudent';
// import StatisticsRegisterStudentsRangerList from './statistics/ranger_list';
import * as S from './styled';
import GraphicBar from './graphic_range_bar';
import GraphicPizza from './graphic_range_pizza';


const RegisterStudent = () => {
    const [rangeCount, setRangeCount] = useState(0);

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
            // Exibir o resultado
        }else{
            console.log('error: ', message);
        }
    };

    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    }, []);
    
    return (
        <S.Container>
            <S.WrapGraphicBar>
                <GraphicBar data={rangeCount} />
            </S.WrapGraphicBar>

            <S.WrapGraphicPizza>
                <GraphicPizza data={rangeCount}/>
            </S.WrapGraphicPizza>

        </S.Container>
    )
}

export default RegisterStudent