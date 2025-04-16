import { Col, Row, Form } from "react-bootstrap"

const RowSecond = (props) => {
    const {register, errors, fieldDisabled, handleChange, handleBlur, interestValues } = props

    const {fees, interestDaily} = interestValues

    return (
        <Row className="mb-2 px-2 ">
            <Col sm={6} md={6} lg={6}>
                <Form.Group className="p-1 mb-2" controlId="GroupFees">
                    <Form.Label > 
                        Taxas Juros   
                        {
                            fees == "R$ 0,00" ? null :
                            <span  className="valueInterestRate">{fees}</span>
                        }
                    </Form.Label>
                    <Form.Control 
                        type="text" 
                        inputMode="numeric"
                        name="fees"
                        placeholder="Taxas de Juros" 
                        {...register("fees")}
                        disabled= {fieldDisabled}
                        isInvalid={!!errors.fees}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.fees && errors.fees.message}
                    </Form.Control.Feedback>
                    
                </Form.Group>
            </Col>
            <Col sm={6} md={6} lg={6}>
                <Form.Group className="p-1 mb-2" controlId="GroupInterestDaily">
                    <Form.Label > 
                        Juros Diário 
                        {
                            interestDaily == "R$ 0,00" ? null :
                            <span className="valueInterestRate">{interestDaily}</span>
                        }
                    </Form.Label>
                    <Form.Control 
                        type="text" 
                        inputMode="numeric"
                        name="interestDaily"
                        placeholder="Juros Diário" 
                        {...register("interestDaily")}
                        disabled= {fieldDisabled}
                        isInvalid={!!errors.interestDaily}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.interestDaily && errors.interestDaily.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
    )
}

export default RowSecond