import * as S from './styled';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Tracks } from '../../../../../../constants/ranger';

const Fields = (props) => {
    const { filters, handleFilterChange} = props;

    return (
        <S.Container >
            <Row className="Custom-Row">
                <Col lg={3} md={5} sm={5} xs={6}>
                    <InputGroup >
                        <Form.Select
                            name="sex"
                            onChange={handleFilterChange}
                            value={filters.sex}
                        >
                            <option value="">Gênero</option>
                            <option value="homem">Homem</option>
                            <option value="mulher">Mulher</option>
                        </Form.Select>
                    </InputGroup>
                </Col>
                <Col lg={3} md={5} sm={5} xs={6}>
                    <InputGroup >
                        <Form.Select
                            name="range"
                            onChange={handleFilterChange}
                            value={filters.range}
                        >
                            <option value="">Faixa</option>
                            {
                                Tracks.map(({value, label}) => (
                                    <option 
                                        key={value}
                                        value={value}
                                    > 
                                        {label}
                                    </option>
                                ))
                            }
                        </Form.Select>
                    </InputGroup>
                </Col>

            </Row>
        </S.Container>
    )
}

export default Fields 