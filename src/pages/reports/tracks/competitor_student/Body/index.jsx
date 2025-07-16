import * as S from './styled'
import { useEffect, useState } from 'react';
import Fields from '../components/fields';
import TableCustom from '../components/tabel';

const Body = (props) => {
    const { filteredData, setDataGeneratePdf } = props;
    const [data, setData] = useState([]);
    const totalStudents = data.length;

    // Estado para os valores dos filtros
    const [filters, setFilters] = useState({
        range: '',
        sex: ''
    });

    // Função para lidar com mudanças nos filtros
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
            setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        if(!filteredData || filteredData.length === 0) return;
        const data = filteredData.sort((a, b) => a.firstName.localeCompare(b.firstName));
        const newData = data.map((item, index) => ({
            ...item,
            id: index + 1 // Adiciona o índice como ID
        }));

        setData(newData);
    }, [filteredData]);

    // Efeito para filtrar os dados sempre que os filtros mudarem
    useEffect(() => {
        if(filteredData.length === 0) return;

        if ( filters.range === '' && filters.sex === '') setData(filteredData);

        const filtered = filteredData.filter(item => {
            return (
                (filters.range === '' || item.range === filters.range) &&
                (filters.sex === '' || item.sex === filters.sex)
            );
        });
        setData(filtered);
        setDataGeneratePdf(filtered);
    }, [filters]);

    return (
        <S.Container>
            <Fields 
                filters={filters} 
                handleFilterChange={handleFilterChange} 
            />
            <TableCustom 
                data={data}
                totalStudents={totalStudents}
            />
            
        </S.Container>
        )
}

export default Body