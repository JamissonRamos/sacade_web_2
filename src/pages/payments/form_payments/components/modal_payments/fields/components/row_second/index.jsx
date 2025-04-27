import { Col, Row, Form } from "react-bootstrap"

const RowSecond = (props) => {
    const {register, errors} = props 

    return (
        <Row className="mb-2 px-2 ">
            <Col md={6} lg={6}>
                <Form.Group className="p-1 mb-2" controlId="groupInstallmentDiscount">
                    <Form.Label > Desconto </Form.Label>
                    <Form.Control 
                        type="text" 
                        inputMode="numeric"
                        name="installmentDiscount"
                        placeholder="aplicar desconto na parcela" 
                        {...register("installmentDiscount")}
                        isInvalid={!!errors.installmentDiscount}
                        //onChange={(e) => handleChange(e)}
                        //onBlur={(e) => handleBlur(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.installmentDiscount && errors.installmentDiscount.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6} lg={6}>
                <Form.Group className="p-1 mb-2" controlId="groupInstallmentIncrease">
                    <Form.Label > Acréscimo </Form.Label>
                    <Form.Control 
                        type="text" 
                        inputMode="numeric"
                        name="installmentIncrease"
                        placeholder="aplicar Acréscimo na parcela" 
                        {...register("installmentIncrease")}
                        isInvalid={!!errors.installmentIncrease}
                        //onChange={(e) => handleChange(e)}
                        //onBlur={(e) => handleBlur(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.installmentIncrease && errors.installmentIncrease.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
    )
}

export default RowSecond