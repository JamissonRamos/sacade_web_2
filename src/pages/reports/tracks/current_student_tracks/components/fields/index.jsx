import * as S from './styled';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Tracks } from '../../../../../../constants/ranger';

const Fields = (props) => {
    //const { filters, handleFilterChange} = props;

    return (
        <S.Container >
            <Row className="Custom-Row">
                <Col className="">
                    <InputGroup >
                        <Form.Select
                            //name="sex"
                            //onChange={handleFilterChange}
                           //value={filters.range}
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