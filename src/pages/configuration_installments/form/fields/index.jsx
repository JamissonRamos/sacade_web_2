import { Col, Row, Form } from "react-bootstrap"


const Fields = ({register, setValue, errors}) => {
    return (
        <>
            <Row className="mb-2 px-2 ">
                <Col sm={6} md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupDayGenerateInstallment">
                        <Form.Label className="m-0"> Dia Gerar Parcela </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="dayGenerateInstallment"
                            placeholder="Dia do mês" 
                            {...register("dayGenerateInstallment")}
                            isInvalid={!!errors.dayGenerateInstallment}
                            //onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.dayGenerateInstallment && errors.dayGenerateInstallment.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col  sm={6} md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupValueInstallment">
                        <Form.Label className="m-0"> Valor Parcela </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="valueInstallment"
                            placeholder="Valor da parcela" 
                            {...register("valueInstallment")}
                            isInvalid={!!errors.valueInstallment}
                            //onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.valueInstallment && errors.valueInstallment.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col  sm={6} md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupFees">
                        <Form.Label className="m-0"> Taxas Juros </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="fees"
                            placeholder="Taxas de juros" 
                            {...register("fees")}
                            isInvalid={!!errors.fees}
                            //onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.fees && errors.fees.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col  sm={6} md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupInterestDaily">
                        <Form.Label className="m-0"> Juros Diário </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="interestDaily"
                            placeholder="Juros Diário" 
                            {...register("interestDaily")}
                            isInvalid={!!errors.interestDaily}
                            //onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.interestDaily && errors.interestDaily.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col  sm={6} md={6} lg={6}>
                        <Form.Group className="p-1" controlId="GroupInterestMonthly">
                            <Form.Label className="m-0"> Juros Mensal </Form.Label>
                            <Form.Control 
                                type="text" 
                                name="interestMonthly"
                                placeholder="Juros Mensal" 
                                {...register("interestMonthly")}
                                isInvalid={!!errors.interestMonthly}
                                //onBlur={(e) => handleBlur(e)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.interestMonthly && errors.interestMonthly.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                <Col  sm={6} md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupInterestAnnual">
                        <Form.Label className="m-0"> Juros Diário </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="interestAnnual"
                            placeholder="Juros Anual" 
                            {...register("interestAnnual")}
                            isInvalid={!!errors.interestAnnual}
                            //onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.interestAnnual && errors.interestAnnual.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

        </>
    )
}

export default Fields