import { Col, Row, Form } from "react-bootstrap"

const RowThird = (props) => {
    const {register, errors, handleChange, handleBlur} = props 

    return (
        <Row className="mb-2 px-2 ">
            <Col md={6} lg={6}>
                <Form.Group className="p-1 mb-2" controlId="groupAmountPaid">
                    <Form.Label > Valor Pago *</Form.Label>
                    <Form.Control 
                        type="text" 
                        inputMode="numeric"
                        name="amountPaid"
                        placeholder="Valor que foi pago" 
                        {...register("amountPaid")}
                        isInvalid={!!errors.amountPaid}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.amountPaid && errors.amountPaid.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
    )
}

export default RowThird