import { Col, Row, Form } from 'react-bootstrap'
import * as S from '../styled'
import { MDBRange } from 'mdb-react-ui-kit'
import { useState } from 'react';

const RegisterStat = ({register, setValue, getValues, errors, handleChange}) => {
    // Estado para armazenar o valor selecionado
    const [rangeValue, setRangeValue] = useState(0);

    // Função para atualizar o estado quando o valor do range muda
    const handleRangeChange = (event) => {
        const valueRange = parseInt(event.target.value, 10);        
        setRangeValue(valueRange);
        setValue("degreesRange", valueRange); // Atualiza o valor no formulário
    };



    return (
        <S.Container>
            <Row className="mb-2 px-2">
                <Col md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GrouStartDate">
                        <Form.Label className="m-0"> Data Inicial * </Form.Label>
                        <Form.Control   
                            type="date" 
                            name="startDate" 
                            {...register("startDate")}
                            isInvalid={!!errors.startDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.startDate && errors.startDate .message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2">
                <Col md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupTrackStart">
                        <Form.Label className="m-0"> Iniciou Faixa * </Form.Label>
                        <Form.Select
                            name='trackStart'
                            {...register("trackStart")}
                            isInvalid={!!errors.trackStart}
                        >
                            <option value="">Selecione Faixa</option>
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
                            {errors.trackStart && errors.trackStart.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} lg={6} >
                    <Form.Group className="p-2" controlId="GroupDegreesRange">
                    
                        <MDBRange
                            className="p-1"
                            defaultValue={0}
                            min='0'
                            max='10'
                            step='1'
                            label='Selecione os Graus'
                            id='customRange3'
                            name='degreesRange'
                            {...register("degreesRange")}
                            onChange={handleRangeChange} // Atualiza o estado quando o valor muda
                        />
                        <span> Total de Graus: {rangeValue}</span>
                    </Form.Group> 
                </Col>
            </Row>
            <Row className="mb-2 px-2">
                <Col md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupStudentHeight">
                        <Form.Label className="m-0"> Peso Aluno </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="studentWeight"
                            placeholder="Digite o peso do aluno" 
                            {...register("studentWeight")}
                            isInvalid={!!errors.studentWeight}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.studentWeight && errors.studentWeight.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupStudentWeight">
                        <Form.Label className="m-0"> Altura Aluno </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="studentHeight"
                            placeholder="Digite a altura do aluno" 
                            {...register("studentHeight")}
                            isInvalid={!!errors.studentHeight}
                            onChange={(e) => handleChange(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.studentHeight && errors.studentHeight.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className=" px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupStudentDescription">
                        <Form.Label className="m-0"> Descrição Aluno </Form.Label>
                        <Form.Control 
                            as="textarea"
                            name="studentDescription"
                            placeholder="Descreva sobre o aluno." 
                            {...register("studentDescription")}
                            isInvalid={!!errors.studentDescription}
                            onBlur={(e) => e.target.value = e.target.value.trim()}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.studentDescription && errors.studentDescription.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </S.Container>
    )
}

export default RegisterStat