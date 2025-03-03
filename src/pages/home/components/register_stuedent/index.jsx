/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRegisterStudents } from '../../../../hooks/registerStudent';
import StatisticsRegisterStudentsRangerList from './statistics/ranger_list';
import * as S from './styled';


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
            console.log('data', data);
            countRange(data);
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
            <StatisticsRegisterStudentsRangerList loading={loading}/>

        </S.Container>
    )
}

export default RegisterStudent