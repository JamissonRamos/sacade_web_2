import * as S from './styled'
import { Badge } from 'react-bootstrap';
import { Theme } from '../../../../theme';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

const Body = (props) => {
    const { filteredData} = props;
    const [data, setData] = useState([]);
    const totalStudents = filteredData.length;

    const handleBadge = (status) => 
    {
        let bg
        switch (status) {
            case 'ATIVO':
                bg = "success"
                break;
            case 'BLOQUEADO':
                bg = "warning"
                break;
            case 'INATIVO':
                bg = "danger"
                break;

            default:
                bg = "primary"
                break;
        }
        return bg 
    }

    useEffect(() => {

        if(!filteredData) return;
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
            <Table hover responsive className="custom-table">
                <thead>
                    <tr>
                        <th className='text-center'>#</th>
                        <th>Nome</th>
                        <th className='text-center'>Gênero</th>
                        <th className='text-center'>Status</th>
                    </tr>
                </thead>
                
                <tbody>
                    {data && data.map((item) => (
                        <tr key={item.id}>
                            <td className='text-center'>{item.id}</td>
                            <td>{item.firstName} {item.lastName}</td>
                            <td>
                                <S.WrapSex>
                                    <S.WrapSexText>
                                        {item.sex === 'HOMEM' ? 'H' : 'M'} 
                                    </S.WrapSexText>
                                    <S.WrapSexIcon $bgColor={item.sex}>
                                        {item.sex === 'HOMEM' ? <Theme.Icons.FaMale /> : <Theme.Icons.FaFemale />}
                                    </S.WrapSexIcon>
                                </S.WrapSex>
                            </td>

                            <td>
                                <S.Status>
                                                                    
                                    <Badge bg={handleBadge(item.status)} text="light">
                                        {item.status}
                                    </Badge>

                                </S.Status>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th className='text-center '>Total</th>
                        <th colSpan={12} className='text-center py-3' >{totalStudents}</th>
                    </tr>
                </tfoot>
            </Table>
        </S.Container>
        )
    }

export default Body