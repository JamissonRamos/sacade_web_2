import * as S from '../styled'
import { Col, Row, Form } from 'react-bootstrap'
import { MDBRange } from 'mdb-react-ui-kit'
import { useState } from 'react';
import { CapitalizedValue } from '../../body/script';
import { Tracks } from '../../../../../../constants/ranger';

const RegisterStat = ({register, setValue, watch, errors, handleApplyChewChange}) => {
    // Estado para armazenar o valor selecionado
    const [rangeValue, setRangeValue] = useState(0);
    
    // Função para atualizar o estado quando o valor do range muda
    const handleRangeChange = (event) => {
        const valueRange = parseInt(event.target.value, 10);        
        setRangeValue(valueRange);
        setValue("degrees", valueRange, { shouldValidate: true }); // Atualiza o valor no formulário
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = CapitalizedValue(value);
        setValue(name, newValue);
    };

    const degreesRangeValue = watch('degrees', 0); // Define 0 como valor padrão

    return (
        <S.Container>
            <Row className="mb-2 px-2">
                <Col md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupDateUpdate">
                        <Form.Label className="m-0"> Data Atualização * </Form.Label>
                        <Form.Control   
                            type="date" 
                            name="dateUpdate" 
                            {...register("dateUpdate")}
                            isInvalid={!!errors.dateUpdate}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.dateUpdate && errors.dateUpdate .message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupGraduation">
                        <Form.Label className="m-0"> Graduação * </Form.Label>
                        <Form.Select
                            name='graduation'
                            {...register("graduation")}
                            isInvalid={!!errors.graduation}
                        >
                            <option value="">Selecione graduação</option>
                            <option value="faixa">Faixa</option>
                            <option value="graus">Graus</option>
                            <option value="faixa e graus">Faixa e Graus</option>
                            <option value="outro">Outro</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.graduation && errors.graduation.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2">
                <Col md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupRange">
                        <Form.Label className="m-0"> Faixa * </Form.Label>
                        <Form.Select
                            name='range'
                            {...register("range")}
                            isInvalid={!!errors.range}
                        >
                            <option value="">Selecione Faixa</option>
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
                        <Form.Control.Feedback type="invalid">
                            {errors.range && errors.range.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} lg={6} >
                    <Form.Group className="p-2" controlId="GroupDegrees">
                        <MDBRange
                            className="p-1"
                            defaultValue={0}
                            min='0'
                            max='6'
                            step='1'
                            label='Selecione os Graus'
                            name='degrees'
                            value={degreesRangeValue}
                            onChange={handleRangeChange} // Atualiza o estado quando o valor muda
                        />
                        <span> Total de Graus: {rangeValue || degreesRangeValue}</span>
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
                            onChange={handleApplyChewChange}
                            isInvalid={!!errors.studentWeight}
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
                            onChange={handleApplyChewChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.studentHeight && errors.studentHeight.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className=" px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupObservation">
                        <Form.Label className="m-0"> Observação </Form.Label>
                        <Form.Control 
                            as="textarea"
                            name="observation"
                            placeholder="Colocar alguma obs a mais." 
                            {...register("observation")}
                            isInvalid={!!errors.observation}
                            onChange={(e) => handleChange(e)}
                            onBlur={(e) => e.target.value = e.target.value.trim()}

                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.observation && errors.observation.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </S.Container>
    )
}

export default RegisterStat