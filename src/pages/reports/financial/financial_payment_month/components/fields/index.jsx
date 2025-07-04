import * as S from './styled';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Fields = (props) => {
    //const { filters, handleFilterChange} = props;

    return (
        <S.Container >
            <Row className="mb-2 px-2 display-flex align-items-center justify-content-end">
                <Col className="mb-2" lg={3} md={4} sm={4} xs={6}>
                    <InputGroup >
                        <Form.Select
                            name="status"
                            //onChange={handleFilterChange}
                            //value={filters.status}
                        >
                            <option value="">Status</option>
                            <option value="ATIVO">ATIVO</option>
                            <option value="INATIVO">INATIVO</option>    
                            <option value="BLOQUEADO">BLOQUEADO</option>
                        </Form.Select>
                    </InputGroup>
                </Col>
            </Row>
        </S.Container>
    )
}

export default Fields 