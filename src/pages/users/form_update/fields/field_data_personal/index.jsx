import { ApplyMask, CapitalizedValue } from '../../script';
import { Col, Form, Row } from 'react-bootstrap';

const FieldDataPersonal  = ({register, errors, setValue}) => {
    
        const handleOnBlur = (event) => {
            let fieldName = event.target.name;
            let fieldValue = event.target.value;

            let newFieldValue = CapitalizedValue(fieldValue);

            setValue(fieldName, newFieldValue);
        };

        const handleChange = (event) => {
            let fieldName = event.target.name;
            let fieldValue = event.target.value;

            let maskedValue = ApplyMask(fieldName, fieldValue);

            setValue(fieldName, maskedValue);
        }

    return (

        <>
            <Row className="mb-2 p-1 ">
                <Form.Group className="mb-2 " controlId="groupFirstName">
                    <Form.Label> Nome </Form.Label>
                    <Form.Control 
                        type="text" 
                        name="firstName"
                        placeholder="Digite seu primeiro nome" 
                        {...register("firstName")}
                        isInvalid={!!errors.firstName}
                        onBlur={(e) => handleOnBlur(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.firstName && errors.firstName.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-2 p-1">
                <Form.Group as={Col} className="mb-2" controlId="groupLastName">
                    <Form.Label> Sobrenome </Form.Label>
                    <Form.Control 
                        type="text"  
                        name='lastName' 
                        placeholder="Digite seu segundo nome" 
                        {...register("lastName")}
                        isInvalid={!!errors.lastName} 
                        onBlur={(e) =>  handleOnBlur(e)}
                    />
                    <Form.Control.Feedback type="invalid" >
                        {errors.lastName && errors.lastName.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            
            <Row className="mb-2 p-1">
                <Col lg={4}  >
                    <Form.Group  className="mb-2" controlId="groupPhoneUsers">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control 
                            type="text" 
                            name='phoneUsers' 
                            placeholder="Digite seu celular" 
                            {...register("phoneUsers")}
                            onChange={(e) => handleChange(e)} // Captura a mudança no input
                            isInvalid={!!errors.phoneUsers} 
                        />
                        <Form.Control.Feedback type="invalid" >
                            {errors.phoneUsers && errors.phoneUsers.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col lg={4}>
                    <Form.Group className="mb-2" controlId="groupBirthDate">
                        <Form.Label>Data Nascimento</Form.Label>
                        <Form.Control 
                            type="date" 
                            name='birthDate' 
                            {...register("birthDate")}
                            isInvalid={!!errors.birthDate} 
                        />
                        <Form.Control.Feedback type="invalid" >
                            {errors.birthDate && errors.birthDate.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                
                <Col lg={4}>
                    <Form.Group className="mb-2" controlId="groupGender">
                        <Form.Label>Gênero</Form.Label>
                        <Form.Select
                            name='gender' 
                            {...register("gender")}
                            isInvalid={!!errors.gender}
                        >
                            <option value="">Selecione um Gênero</option>
                            <option value="1">Homem</option>
                            <option value="2">Mulher</option>
                            <option value="3">Outros</option>
                        </Form.Select>

                        <Form.Control.Feedback type="invalid" >
                            {errors.gender && errors.gender.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </>
    )
}

export default FieldDataPersonal;