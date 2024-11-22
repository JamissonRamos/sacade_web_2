
import { Col, Form, Row } from 'react-bootstrap';
import { ApplyMask, CapitalizedValue } from '../../body/script'

const FieldData = ({register, setValue, errors}) => {

    const handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let maskedValue = ApplyMask(fieldName, fieldValue)
        setValue(fieldName, maskedValue)
    };

    const handleBlur = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let capitalized = CapitalizedValue(fieldValue)
        setValue(fieldName, capitalized)
    };

    return (
        <>
            <Row className="mb-2 px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupFullName">
                        <Form.Label className="m-0"> Nome Completo </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="fullName"
                            placeholder="Digite seu nome." 
                            {...register("fullName")}
                            isInvalid={!!errors.fullName}
                            onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.fullName && errors.fullName.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col >
                    <Form.Group className="p-1" controlId="GroupRelationshipLevel">
                        <Form.Label className="m-0"> Nível de Parentesco </Form.Label>
                        <Form.Select
                            name='relationshipLevel'
                            {...register("relationshipLevel")}
                            isInvalid={!!errors.relationshipLevel}
                        >
                        <option value="">Selecione Parente</option>
                        <option value="pai">Pai</option>
                        <option value="mae">Mãe</option>
                        <option value="irmao">Irmão</option>
                        <option value="irma">Irmã</option>
                        <option value="filho">Filho</option>
                        <option value="filha">Filha</option>
                        <option value="avô">Avô</option>
                        <option value="avó">Avó</option>
                        <option value="tio">Tio</option>
                        <option value="tia">Tia</option>
                        <option value="primo">Primo</option>
                        <option value="prima">Prima</option>
                        <option value="cunhado">Cunhado</option>
                        <option value="cunhada">Cunhada</option>
                        <option value="outro">Outro</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.relationshipLevel && errors.relationshipLevel.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col sm={6}>
                    <Form.Group className="p-1" controlId="GroupBirthDate">
                        <Form.Label className="m-0"> Data Nascimento </Form.Label>
                        <Form.Control   
                            type="date" 
                            name="birthDate"
                            placeholder="Digite seu Data Nascimento." 
                            {...register("birthDate")}
                            isInvalid={!!errors.birthDate}

                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.birthDate && errors.birthDate .message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col sm={6} >
                    <Form.Group className="p-1" controlId="GroupPhone">
                        <Form.Label className="m-0"> Celular </Form.Label>
                        <Form.Control 
                            type="tel" 
                            name="phone"
                            placeholder="Digite seu Celular." 
                            inputMode="numeric" // Adiciona o teclado numérico
                            //pattern="[0-9]*"   // Limita a entrada apenas a números
                            {...register("phone")}
                            isInvalid={!!errors.phone}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone && errors.phone.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col >
                    <Form.Group className="p-1" controlId="GroupEmail">
                        <Form.Label className="m-0"> Email </Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            placeholder="Digite seu Email." 
                            {...register("email")}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email && errors.email.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            
            </Row>
        </>
    )
}

export default FieldData