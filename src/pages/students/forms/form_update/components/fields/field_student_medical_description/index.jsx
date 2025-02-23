import * as S from './styled'
import { Col, Form, Row } from "react-bootstrap";

const StudentMedicalDescription = ({register, errors}) => {
    return (
        <S.Container>
            <Row className=" px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupMedicalDescription">
                        <Form.Label className="m-0"> Descrição Medica </Form.Label>
                        <Form.Control 
                            as="textarea"
                            name="medicalDescription"
                            placeholder="Descreva se o aluno possui alguma condição médica." 
                            {...register("medicalDescription")}
                            isInvalid={!!errors.medicalDescription}
                            onBlur={(e) =>  e.target.value = e.target.value.trim()}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.medicalDescription && errors.medicalDescription.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </S.Container>
    )
}

export default StudentMedicalDescription;