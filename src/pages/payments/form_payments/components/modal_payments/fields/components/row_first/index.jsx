import { Col, Row, Form } from "react-bootstrap"

const RowFirst = (props) => {

    //const {register, errors, handleChange, handleBlur } = props 

    return (
        <Row className="mb-2 px-2 ">
            <Col lg={4}>
                <Form.Group className="p-1" controlId="grouPaymentMethod">
                    <Form.Label className="m-0"> Forma Pagamento *</Form.Label>
                    <Form.Select
                        name='paymentMethod'
                        // {...register("paymentMethod")}
                        // isInvalid={!!errors.paymentMethod}
                    >
                    <option value="">Selecione Forma Pagamento</option>
                    <option value={1}>Dinheiro</option>
                    <option value={2}>Pix</option>
                    <option value={3}>Cartão Débito</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        teste de error
                        
                        {/* {errors.paymentMethod && errors.paymentMethod.message} */}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col  sm={6} md={6} lg={6}>
                <Form.Group className="p-1 mb-2" controlId="GroupValueInstallment">
                    <Form.Label > Valor Parcela * </Form.Label>
                    <Form.Control 
                        type="text" 
                        inputMode="numeric"
                        name="valueInstallment"
                        placeholder="Valor da parcela" 
                        {...register("valueInstallment")}
                        isInvalid={!!errors.valueInstallment}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.valueInstallment && errors.valueInstallment.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
    )
}

export default RowFirst