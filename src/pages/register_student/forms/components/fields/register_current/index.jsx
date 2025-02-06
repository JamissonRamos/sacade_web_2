import { Col, Row, Form } from 'react-bootstrap'
import * as S from '../styled'
import { MDBRange } from 'mdb-react-ui-kit'
import { useState } from 'react';

const RegisterCurrent  = ({register, setValue, getValues, errors}) => {
    // Estado para armazenar o valor selecionado
    const [rangeValue, setRangeValue] = useState(0);

    // Função para atualizar o estado quando o valor do range muda
    const handleRangeChange = (event) => {
        const valueRange = parseInt(event.target.value, 10);
        setRangeValue(valueRange);
        setValue("degreesCurrent", valueRange); // Atualiza o valor no formulário
    };

    return (
        <S.Container>
            <Row className="mb-2 px-2">
                <Col md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GrouLastGraduationDate">
                        <Form.Label className="m-0"> Data Ultima Graduação * </Form.Label>
                        <Form.Control   
                            type="date" 
                            name="lastGraduationDate" 
                            {...register("lastGraduationDate")}
                            isInvalid={!!errors.lastGraduationDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastGraduationDate && errors.lastGraduationDate .message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2">
                <Col md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupTrackCurrent ">
                        <Form.Label className="m-0"> Faixa Atua * </Form.Label>
                        <Form.Select
                            name='trackCurrent '
                            {...register("trackCurrent")}
                            isInvalid={!!errors.trackCurrent}
                        >
                            <option value="">Selecione Faixa Atual</option>
                            <option value="branca">Branca</option>
                            <option value="cinza">Cinza</option>
                            <option value="amarela">Amarela</option>
                            <option value="laranja">Laranja</option>
                            <option value="verde">Verde</option>
                            <option value="azul">Azul</option>
                            <option value="roxa">Roxa</option>
                            <option value="marrom">Marrom</option>
                            <option value="preta">Preta</option>
                            <option value="vermelha">Vermelha</option>
                            <option value="vermelha e preta">Vermelha e Preta</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.trackCurrent && errors.trackCurrent.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} lg={6} >
                    <Form.Group className="p-2" controlId="GroupDegreesCurrent">
                        <MDBRange
                            className="p-1"
                            defaultValue={0}
                            min='0'
                            max='10'
                            step='1'
                            id='degreesCurrent'
                            label='Graus Atual'
                            name='degreesCurrent'
                            {...register("degreesCurrent")}
                            onChange={handleRangeChange} // Atualiza o estado quando o valor muda
                        />
                        <span>Total de Graus Atual: {rangeValue}</span>
                    </Form.Group> 
                </Col>
            </Row>
        </S.Container>
    )
}

export default RegisterCurrent