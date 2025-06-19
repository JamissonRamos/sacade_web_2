import { Col, Row } from 'react-bootstrap';
import * as S from './styled';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Fields = (props) => {
    const { filters, handleFilterChange, uniqueStatuses, uniqueSexes } = props;

    return (
        <S.Container >

            <Row className="mb-2 px-2 display-flex align-items-center justify-content-end">
                <Col className="mb-2" lg={6} md={6} sm={12}>
                    <Form.Group >
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="Filtrar nome..."
                            onChange={handleFilterChange}
                            value={filters.firstName}
                        />
                    </Form.Group>
                </Col>

                <Col className="mb-2" lg={3} md={3} sm={4} >
                    <InputGroup >
                        <Form.Select
                            name="status"
                            onChange={handleFilterChange}
                            value={filters.status}
                        >
                            <option value="">Status</option>

                        {uniqueStatuses.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                        </Form.Select>
                    </InputGroup>
                </Col>

                <Col className="mb-2" lg={3} md={3} sm={3}>
                    <InputGroup >
                        <Form.Select
                            name="sex"
                            onChange={handleFilterChange}
                            value={filters.sex}
                        >
                            <option value="">Gênero</option>

                        {uniqueSexes.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                        </Form.Select>
                    </InputGroup>
                </Col>

            </Row>
        </S.Container>
    )
}

export default Fields 