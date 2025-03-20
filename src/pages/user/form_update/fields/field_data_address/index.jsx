import { useState } from 'react';
import { Theme } from '../../../../../theme';
import { ApplyMask, CapitalizedValue } from '../../script';
import { Button, Col, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import { AlertCustom } from '../../../../../components/alert_custom';

const FieldDataAddress  = ({register, errors, setValue, getValues, handleOnClickCep, loading}) => {
    const [msgBox, setMsgBox] = useState(null); 
    const [showAlert, setShowAlert] = useState(false);

    const handleOnBlur = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value.trim();

        let newFieldValue = CapitalizedValue(fieldValue);

        setValue(fieldName, newFieldValue);
    };

    const handleChange =  (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        let maskedValue = ApplyMask(fieldName, fieldValue);

        setValue(fieldName, maskedValue);
    }

    const handleClickCep = async () => {
        handleCloseAlert();

        const cep = getValues('cep');

        const result = await handleOnClickCep(cep);
        const {success, message} = result;
        if(success){
            setMsgBox({variant: 'success', message: 'Cep encontrado com sucesso!'})
            setShowAlert(true)
        }else{
            setMsgBox({variant: 'danger', message: message})
            setShowAlert(true)
        }
    }

    // Função para fechar o alerta e preparar para nova mensagem
    const handleCloseAlert = () => {
        setShowAlert(false);
        setMsgBox(""); // Limpa a mensagem
    };

    return (
        <>
            {
                showAlert &&                                            
                <AlertCustom variant={msgBox.variant} handleCloseAlert={handleCloseAlert}> {msgBox.message} </AlertCustom>
            }
            <>
                <Row className="mb-2 p-1">
                    <Col lg={4}>
                        <Form.Group className="mb-2" controlId="groupCep">
                            <Form.Label>Cep</Form.Label>
                            <InputGroup>
                                <Form.Control 
                                    type="text"  
                                    name='cep' 
                                    placeholder="Digite seu cep" 
                                    {...register("cep")}
                                    isInvalid={!!errors.cep}
                                    onChange={(e) => handleChange(e)} // Captura a mudança no input
                                />
                                <Button 
                                    className="d-flex align-items-center gap-2"
                                    variant='success'
                                    onClick={() => handleClickCep()} 
                                    disabled={loading ? true : false}
                                >
                                    { loading 
                                        ?   <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />

                                        :   <Theme.Icons.MdSearch />    
                                    }
                                </Button>
                                <Form.Control.Feedback type="invalid" >
                                    {errors.cep && errors.cep.message}
                                </Form.Control.Feedback>
                            </InputGroup>

                        </Form.Group>
                    </Col>

                    <Col lg={8}>
                        <Form.Group className="mb-2 p-1" controlId="groupLogadouro">
                            <Form.Label >Logadouro</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="logadouro"
                                placeholder="Digite seu logadouro"
                                {...register("logadouro")} 
                                isInvalid={!!errors.logadouro} 
                                onChange={(e) =>  handleOnBlur(e)}
                            />
                            <Form.Control.Feedback type="invalid" >
                                {errors.logadouro && errors.logadouro.message}
                            </Form.Control.Feedback>
                        </Form.Group>             
                    </Col>
                </Row>

                <Row className="mb-2 ">
                    <Col lg={4}>
                        <Form.Group className="mb-2 p-1" controlId="groupResidenceNumber">
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

                    <Col lg={8}>
                        <Form.Group className="mb-2" controlId="formGridNeighborhood">
                            <Form.Label >Bairro</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="neighborhood"
                                placeholder="Digite o nome do see bairro" 
                                {...register("neighborhood")}
                                isInvalid={!!errors.neighborhood} 
                                onChange={(e) =>  handleOnBlur(e)}
                            />

                            <Form.Control.Feedback type="invalid" >
                                {errors.neighborhood && errors.neighborhood.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-2 p-1">
                    <Col lg={4}>
                        <Form.Group className="mb-2" controlId="groupFederativeUnit">
                            <Form.Label>UF</Form.Label>
                            <Form.Control 
                                type="text"  
                                name='federativeUnit' 
                                placeholder="Nome estado UF" 
                                {...register("federativeUnit")}
                                isInvalid={!!errors.federativeUnit} 
                                onChange={(e) => handleOnBlur(e)}
                            />
                            <Form.Control.Feedback type="invalid" >
                            {errors.federativeUnit && errors.federativeUnit.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col lg={8}>
                        <Form.Group className="mb-2" controlId="formGridCity">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control 
                            type="text"  
                            name='city' 
                            placeholder="Digite nome da cidade" 
                            {...register("city")}
                            isInvalid={!!errors.federativeUnit}
                            onChange={(e) => handleOnBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid" >
                            {errors.city && errors.city.message}
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                
            </>
        </>
    )
}

export default FieldDataAddress