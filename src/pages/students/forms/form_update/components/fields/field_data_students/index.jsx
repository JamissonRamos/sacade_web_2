import { Col, Form, Row } from "react-bootstrap"
import * as S from './styled';
import { CapitalizedValue } from "../../body/script";

const DataStudents = ({register, setValue, errors, handleChange}) => {

    const handleBlur = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let capitalized = CapitalizedValue(fieldValue)
        setValue(fieldName, capitalized)
    };

    return (
        <S.Container>
            <Row className="mb-2 px-2 ">
                <Col sm={5} md={5} lg={4}>
                    <Form.Group className="p-1" controlId="GroupFirstName">
                        <Form.Label className="m-0"> Nome </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="firstName"
                            placeholder="Digite seu nome." 
                            {...register("firstName")}
                            isInvalid={!!errors.firstName}
                            setValue={setValue}
                            onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback  type="invalid">
                            {errors.firstName && errors.firstName.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col sm={7} md={7} lg={8}>
                    <Form.Group className="p-1" controlId="GroupFirstLastName">
                        <Form.Label className="m-0"> Sobrenome </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="lastName"
                            placeholder="Digite seu sobrenome." 
                            {...register("lastName")}
                            isInvalid={!!errors.lastName}
                            onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName && errors.lastName .message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2">
                <Col  sm={5} md={5} lg={4}>
                    <Form.Group className="p-1" controlId="GrouDate">
                        <Form.Label className="m-0"> Data Nascimento </Form.Label>
                        <Form.Control   
                            type="date" 
                            name="birthDate"
                            placeholder="Digite seu Data Nascimento." 
                            {...register("birthDate")}
                            isInvalid={!!errors.birthDate}
                            // onBlur={(e) => handleOnBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.birthDate && errors.birthDate .message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col  sm={7} md={7} lg={8}>
                    <Form.Group className="p-1" controlId="GroupCellPhone">
                        <Form.Label className="m-0"> Celular </Form.Label>
                        <Form.Control 
                            type="cellPhone" 
                            name="cellPhone"
                            placeholder="Digite seu Celular." 
                            {...register("cellPhone")}
                            isInvalid={!!errors.cellPhone}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.cellPhone && errors.cellPhone.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>                
            </Row>
            <Row className="mb-2 px-2">
                <Col sm={5} md={5} lg={4}>
                    <Form.Group className="p-1" controlId="GroupCPF">
                        <Form.Label className="m-0"> CPF </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="cpf"
                            placeholder="Digite seu CPF." 
                            {...register("cpf")}
                            isInvalid={!!errors.cpf}
                            onChange={handleChange}
                            // onBlur={(e) => handleOnBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.cpf && errors.cpf.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col sm={7} md={7} lg={8}>
                    <Form.Group className="p-1" controlId="GroupRg">
                        <Form.Label className="m-0"> RG </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="rg"
                            placeholder="Digite seu rg." 
                            {...register("rg")}
                            isInvalid={!!errors.rg}
                            onChange={handleChange}
                            // onBlur={(e) => handleOnBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.rg && errors.rg .message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                
            </Row>
            <Row className="mb-2 px-2 ">
                <Col  >
                    <Form.Group className="p-1" controlId="GroupEmail">
                        <Form.Label className="m-0"> Email </Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            placeholder="Digite seu Email." 
                            {...register("email")}
                            isInvalid={!!errors.email}
                            // onBlur={(e) => handleOnBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email && errors.email.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </S.Container>
    )
}

export default DataStudents