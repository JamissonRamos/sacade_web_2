import { Col, Row, Form } from "react-bootstrap"

const RowFirst = (props) => {

    const {register, errors, handleChange, handleBlur } = props 

    return (
        <Row className="mb-2 px-2 ">
            <Col sm={6} md={6} lg={6}>
                <Form.Group className="p-1 mb-2" controlId="GroupFirstInstallmentDate">
                    <Form.Label > Data 1º Parcela * </Form.Label>
                    <Form.Control   
                        type="date" 
                        //name="dueDate"
                        {...register("dueDate")}
                        isInvalid={!!errors.dueDate}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.dueDate && errors.dueDate.message}
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