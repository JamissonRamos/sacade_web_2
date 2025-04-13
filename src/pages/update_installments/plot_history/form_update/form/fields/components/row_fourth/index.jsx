import { Col, Row, Form } from "react-bootstrap"

const RowFourth = (props) => {
    const {register, errors, handleChange, handleBlur, interestValues, fieldDisabled } = props;

    const {
        formatInterestMonthly,
        formatInterestAnnual,
    } = interestValues

    return (
        
        <Row className="mb-2 px-2 ">
            <Col  sm={6} md={6} lg={6}>
                <Form.Group className="p-1 mb-2" controlId="GroupInterestMonthly">
                    <Form.Label > 
                        Juros Mensal 
                        {
                            formatInterestMonthly == "R$ 0,00" ? null :
                            <span className="valueInterestRate">{formatInterestMonthly}</span>
                        }
                    </Form.Label>
                    <Form.Control 
                        type="text" 
                        inputMode="numeric"
                        name="interestMonthly"
                        placeholder="Juros Mensal" 
                        {...register("interestMonthly")}
                        disabled= {fieldDisabled}
                        isInvalid={!!errors.interestMonthly}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.interestMonthly && errors.interestMonthly.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col  sm={6} md={6} lg={6}>
                <Form.Group className="p-1 mb-2" controlId="GroupInterestAnnual">
                    <Form.Label > 
                        Juros Anual 
                        {
                            formatInterestAnnual == "R$ 0,00" ? null :
                                <span className="valueInterestRate">{formatInterestAnnual}</span>
                            
                        }
                    </Form.Label>
                    <Form.Control 
                        type="text" 
                        inputMode="numeric"
                        name="interestAnnual"
                        placeholder="Juros Anual" 
                        {...register("interestAnnual")}
                        disabled= {fieldDisabled}
                        isInvalid={!!errors.interestAnnual}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.interestAnnual && errors.interestAnnual.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
    )
}

export default RowFourth