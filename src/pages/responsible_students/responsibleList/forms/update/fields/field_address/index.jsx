import { Alert, Button, Col, Form, InputGroup, Row, Spinner } from "react-bootstrap"
import { Theme } from "../../../../../../../theme"
import { ApplyMask, CapitalizedValue, FetchCep, GetAddressLocalStorage } from "../../form/script";
import { useState } from "react";

const FieldAddress = ({register, setValue, getValues, errors}) => {
    const [msgBox, setMsgBox] = useState(null); // Gerencia o estado do CEP
    const [showAlert, setShowAlert] = useState(false);
    const {searchCep, loadingCep } = FetchCep();

    const GetAddress = () => {
        const { cep, logadouro, residenceNumber, city, neighborhood, federativeUnit } = GetAddressLocalStorage();

        if(cep){
            let maskedValue = ApplyMask('cep', cep)
            // Atualiza os valores dos campos com os dados recebidos  
            setValue('cep', maskedValue);
            setValue('logadouro', logadouro);
            setValue('residenceNumber', residenceNumber);
            setValue('city', city);
            setValue('neighborhood', neighborhood);
            setValue('federativeUnit', federativeUnit);
            
        }else{
            setMsgBox({variant: 'warning', message: 'Cadastro do aluno não tem endereço'})
            setShowAlert(true)
        }

    }

    const ClearAddress = () => {
         // Atualiza os valores dos campos com os dados recebidos  
        setValue('cep', "");
        setValue('logadouro', "");
        setValue('residenceNumber', "");
        setValue('city', "");
        setValue('neighborhood', "");
        setValue('federativeUnit', "");
        setShowAlert(false)
    }

    const handleOnClickFetchCep = async () => {
        const cep = getValues('cep');
        const result = await searchCep(cep);
        const { success, data, message  } = result;
        if(success){
            // Atualiza os valores dos campos com os dados recebidos  
            setValue('logadouro', data.logadouro);
            setValue('neighborhood', data.neighborhood);
            setValue('city', data.city);
            setValue('federativeUnit', data.federativeUnit);
            setMsgBox({variant: 'success', message: 'Endereço encontrado com sucesso!'})
            setShowAlert(true)
        }else{
            setMsgBox({variant: 'danger', message: message})
            setShowAlert(true)
        }
    }

    const handleOnClickCheck = (e) =>{

        let CheckedValue = e.target.checked;

        if (CheckedValue){
            GetAddress()
        }else{
            ClearAddress()
        }
        
    }

    const handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let maskedValue = ApplyMask(fieldName, fieldValue)
        setValue(fieldName, maskedValue)
    };

    const handleBlur = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let capitalized = CapitalizedValue(fieldValue)
        setValue(fieldName, capitalized)
    };


    return (
        <>
            <Row className="mb-2 px-1">

                <Col className="mb-2 px-4">
                    <Form.Label >Mesmo endereço do aluno?
                        <Form.Check //prettier-ignore
                            onClick={(e) => handleOnClickCheck(e)}
                        />
                    </Form.Label>
                        
                </Col>

                <Col lg={8}>
                    {
                        showAlert && <Alert variant={msgBox.variant}  onClose={() => setShowAlert(false)} dismissible > {msgBox.message} </Alert>
                    }
                </Col>

                <Col lg={8}>
                    <Form.Group className="p-1" controlId="GroupCep ">
                        <Form.Label className="m-0">Cep</Form.Label>
                            <InputGroup>
                                <Form.Control 
                                    type="text"  
                                    name='cep' 
                                    placeholder="Digite seu cep" 
                                    {...register("cep")}
                                    isInvalid={!!errors.cep}
                                    onChange={handleChange}
                                />
                                <Button 
                                    variant='success'
                                    onClick={handleOnClickFetchCep}
                                    disabled={loadingCep ? true : false}
                                >
                                    {
                                        loadingCep ? 
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                        /> : <Theme.Icons.MdSearch />
                                    }
                                </Button>
                                <Form.Control.Feedback type="invalid" >
                                    {errors.cep && errors.cep.message}
                                </Form.Control.Feedback>
                            </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-1">
                <Col className="mb-2" lg={8}>
                    <Form.Group className="p-1"  controlId="GroupLogadouro">
                        <Form.Label >Logadouro</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="logadouro"
                            placeholder="Digite seu logadouro"
                            {...register("logadouro")}
                            isInvalid={!!errors.logadouro}
                            onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid" >
                            {errors.logadouro && errors.logadouro.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col  lg={4}>
                    <Form.Group className="p-1" controlId="GroupResidenceNumber ">
                        <Form.Label>Número Residencia</Form.Label>
                        <Form.Control 
                            type="text"  
                            name='residenceNumber' 
                            placeholder="Número Residencia" 
                            {...register("residenceNumber")}
                            isInvalid={!!errors.residenceNumber}
                        />
                        <Form.Control.Feedback type="invalid" >
                            {errors.residenceNumber && errors.residenceNumber.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-1">
                <Col className="mb-2" lg={5}>
                    <Form.Group className="p-1" controlId="GroupCity">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control 
                            type="text"  
                            name='city' 
                            placeholder="Nome da cidade" 
                            {...register("city")}
                            isInvalid={!!errors.city}
                            onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid" >
                            {errors.city && errors.city.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col className="mb-2" lg={5}>
                    <Form.Group className="p-1" controlId="GroupNeighborhood">
                        <Form.Label >Bairro</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="neighborhood"
                            placeholder="Nome do bairro" 
                            {...register("neighborhood")}
                            isInvalid={!!errors.neighborhood}
                            onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid" >
                            {errors.neighborhood && errors.neighborhood.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col className="mb-2" lg={2}>
                    <Form.Group  className="p-1" controlId="GroupFederativeUnit">
                        <Form.Label>UF</Form.Label>
                        <Form.Control 
                            type="text"  
                            name='federativeUnit' 
                            placeholder="UF" 
                            {...register("federativeUnit")}
                            isInvalid={!!errors.federativeUnit}
                            onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid" >
                            {errors.federativeUnit && errors.federativeUnit.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </>
    )
}

export default FieldAddress