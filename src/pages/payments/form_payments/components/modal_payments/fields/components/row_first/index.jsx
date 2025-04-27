import { Col, Row, Form } from "react-bootstrap"

const RowFirst = (props) => {
    const { register, errors } = props

    return (
        <Row className="mb-2 px-2 ">
            <Col md={6} lg={6}>
                <Form.Group className="p-1" controlId="grouPaymentMethod">
                    <Form.Label className="m-0"> Forma Pagamento *</Form.Label>
                    <Form.Select
                        name='paymentMethod'
                        {...register("paymentMethod")}
                        isInvalid={!!errors.paymentMethod}
                    >
                    <option value="">Selecione Forma Pagamento</option>
                    <option value={1}>Dinheiro</option>
                    <option value={2}>Pix</option>
                    <option value={3}>Cartão Débito</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.paymentMethod && errors.paymentMethod.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6} lg={6}>
                <Form.Group className="p-1 mb-2" controlId="groupPaymentDate">
                    <Form.Label > Data Pagamento * </Form.Label>
                    <Form.Control   
                        type="date" 
                        name="paymentDate"
                        {...register("paymentDate")}
                        isInvalid={!!errors.paymentDate }
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.paymentDate && errors.paymentDate.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
    )
}

export default RowFirst