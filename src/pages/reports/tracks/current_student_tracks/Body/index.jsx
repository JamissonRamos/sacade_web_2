import * as S from './styled'
import { Badge } from 'react-bootstrap';
import { Theme } from '../../../../../theme';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Fields from '../components/fields';
import TableCustom from '../components/tabel';

const Body = (props) => {
    const { filteredData } = props;
    const [data, setData] = useState([]);
    const totalStudents = filteredData.length;



    useEffect(() => {
        if(!filteredData || filteredData.length === 0) return;
        const data = filteredData.sort((a, b) => a.firstName.localeCompare(b.firstName));
        const newData = data.map((item, index) => ({
            ...item,
            id: index + 1 // Adiciona o índice como ID
        }));

        setData(newData);
    }, [filteredData]);


    return (
        <S.Container>

            <Fields />
            <TableCustom 
                data={data}
            />
            
        </S.Container>
        )
    }

export default Body