import { Col, Row, Form } from "react-bootstrap"
import { FormatCurrency, FormatPercentage, FormatPercentageMoney} from "../../scripts";
import { useState } from "react";

import { mask } from 'remask';
import { MaskList } from '../../../../constants/mask';

const Fields = ({register, setValue, getValues, errors, fieldDisabled, setFieldDisabled}) => {
    const [formatFees, setFormatFees] = useState("");
    const [formatInterestDaily, setFormatInterestDaily] = useState("");
    const [formatInterestMonthly, setFormatInterestMonthly] = useState("");
    const [formatInterestAnnual, setFormatInterestAnnual] = useState("");
    // const [fieldDisabled, setFieldDisabled] = useState(true);

    const handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let maskedValue = fieldValue;

        if (/[a-zA-Z]/.test(fieldValue) && fieldName !== 'valueInstallment' ) {
            maskedValue = mask(fieldValue, MaskList.onlyNumber )

        }else if (fieldName === 'valueInstallment'){
            maskedValue = FormatCurrency(fieldValue)
            const numberValue = parseInt(fieldValue, 10) / 100; // Divide por 100 para ajustar as casas decimais
            if(numberValue === 0)
            {
                setFieldDisabled(true)
                
            }else{
                setFieldDisabled(false)
            }

        }else if (fieldName !== 'dayGenerateInstallment' ){
            maskedValue = FormatPercentage(fieldValue)
        }
            setValue(fieldName, maskedValue)
    };


    const applyAmountMoneyPercentage = () => {
        /* Função para aplicar a regras de mostra valores quando alterar o valor da parcela */
        const fields = ['fees', 'interestDaily', 'interestMonthly', 'interestAnnual'];
        const fieldValueInstallment = getValues('valueInstallment');
        let fieldValue = '';

        fields.map((field)=>{
            fieldValue = getValues(field)

            if(!fieldValue > 0)  return

            let maskedValue = FormatPercentageMoney(fieldValue, fieldValueInstallment)

            if (field === "fees")
                setFormatFees(maskedValue);
            else if(field === "interestDaily"){
                setFormatInterestDaily(maskedValue);
            }else if(field === "interestMonthly"){
                setFormatInterestMonthly(maskedValue);
            }else if(field === "interestAnnual"){
                setFormatInterestAnnual(maskedValue);
            }
        })

    }

    const handleBlur = (e) => {
        let fieldValueInstallment = getValues('valueInstallment')
        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        let maskedValue = FormatPercentageMoney(fieldValue, fieldValueInstallment);

        if(fieldValueInstallment === 'R$ 0,00'){
            setFormatFees("");
            setFormatInterestDaily("");
            setFormatInterestMonthly("");
            setFormatInterestAnnual("");
            return
        }
        
        if (fieldName === "fees")
            setFormatFees(maskedValue);
        else if(fieldName === "interestDaily"){
            setFormatInterestDaily(maskedValue);
        }else if(fieldName === "interestMonthly"){
            setFormatInterestMonthly(maskedValue);
        }else if(fieldName === "interestAnnual"){
            setFormatInterestAnnual(maskedValue);
        }

    }

    return (
        <>
            <Row className="mb-2 px-2 ">
                <Col sm={6} md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupFirstInstallmentDate">
                        <Form.Label className="m-0"> Data 1 Parcela </Form.Label>
                        <Form.Control 
                            type="text" 
                            inputMode="numeric"
                            name="dayGenerateInstallment"
                            placeholder="Dia do mês" 
                            {...register("dayGenerateInstallment")}
                            isInvalid={!!errors.dayGenerateInstallment}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.dayGenerateInstallment && errors.dayGenerateInstallment.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col sm={6} md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupFirstInstallmentDate">
                        <Form.Label className="m-0"> Data 1 Parcela </Form.Label>
                        <Form.Control 
                            type="text" 
                            inputMode="numeric"
                            name="dayGenerateInstallment"
                            placeholder="Dia do mês" 
                            {...register("dayGenerateInstallment")}
                            isInvalid={!!errors.dayGenerateInstallment}
                            onChange={handleChange}
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
                            inputMode="numeric"
                            name="valueInstallment"
                            placeholder="Valor da parcela" 
                            {...register("valueInstallment")}
                            isInvalid={!!errors.valueInstallment}
                            onChange={(e) => handleChange(e)}
                            onBlur={applyAmountMoneyPercentage}
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
                        <Form.Label className="m-0"> 
                            Taxas Juros   
                            {
                                formatFees == "R$ 0,00" ? null :
                                    <span className="valueInterestRate">{formatFees}</span>
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
                <Col  sm={6} md={6} lg={6}>
                    <Form.Group className="p-1" controlId="GroupInterestDaily">
                        <Form.Label className="m-0"> 
                            Juros Diário 
                            {
                                formatInterestDaily == "R$ 0,00" ? null :
                                    <span className="valueInterestRate">{formatInterestDaily}</span>
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
            <Row className="mb-2 px-2 ">
                <Col  sm={6} md={6} lg={6}>
                        <Form.Group className="p-1" controlId="GroupInterestMonthly">
                            <Form.Label className="m-0"> 
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
                    <Form.Group className="p-1" controlId="GroupInterestAnnual">
                        <Form.Label className="m-0"> 
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
        </>
    )
}

export default Fields