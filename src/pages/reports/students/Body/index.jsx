import * as S from './styled'
import Table from 'react-bootstrap/Table';

const Body = (props) => {
    const { filteredData, totalStudents } = props;

    return (
        <S.Container>
            <Table striped bordered hover responsive > {/* size="sm" */}
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
                            <td>{item.sex}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td >Total</td>
                        <td>{totalStudents}</td>
                    </tr>
                </tfoot>
            </Table>
        </S.Container>
        )
    }

export default Body