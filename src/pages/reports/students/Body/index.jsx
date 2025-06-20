import { Badge } from 'react-bootstrap';
import { Theme } from '../../../../theme';
import * as S from './styled'
import Table from 'react-bootstrap/Table';

const Body = (props) => {
    const { filteredData, totalStudents } = props;

    const handleBadge = (status) => 
    {
        let bg
        switch (status) {
            case 'ativo':
                bg = "success"
                break;
            case 'bloqueado':
                bg = "warning"
                break;
            case 'inativo':
                bg = "danger"
                break;

            default:
                bg = "primary"
                break;
        }
        return bg 
    }
    return (
        <S.Container>
            <Table   hover responsive className="custom-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Gênero</th>
                        <th>Status</th>
                    </tr>
                </thead>
                
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
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
                        <th >Total</th>
                        <th colSpan={12}>{totalStudents}</th>
                    </tr>
                </tfoot>
            </Table>
        </S.Container>
        )
    }

export default Body