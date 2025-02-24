
import * as S from './styled'
import { Button, Col, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { Theme } from "../../../../../../theme";
import { FetchCep } from '../../body/script';
import { useState } from 'react';
import { AlertCustom } from '../../../../../../components/alert_custom';
import { CapitalizedValue } from '../../body/script';

const DataAddress = ({register, setValue, getValues, errors, handleChange}) => {
    const [msgBox, setMsgBox] = useState(null); // Gerencia o estado do CEP
    const [showAlert, setShowAlert] = useState(false);
    const {searchCep, loadingCep } = FetchCep()

    // Função para fechar o alerta e preparar para nova mensagem
    const handleCloseAlert = () => {
            setShowAlert(false);
            setMsgBox(""); // Limpa a mensagem
    };
    const handleBlur = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value.trim();
        let capitalized = CapitalizedValue(fieldValue)
        setValue(fieldName, capitalized)
    };
    
    const handleOnClickCep = async () => {
        handleCloseAlert()
        const cep = getValues('cep');
        const result = await searchCep(cep);
        const { success, data, message  } = result;
        if(success){
            // Atualiza os valores dos campos com os dados recebidos  
            setValue('logadouro', data.logadouro);
            setValue('neighborhood', data.neighborhood);
            setValue('city', data.city);
            setValue('federativeUnit', data.federativeUnit);
            setMsgBox({variant: 'success', message: message})
            setShowAlert(true)
        }else{
            setMsgBox({variant: 'danger', message: message})
            setShowAlert(true)
        }
    }
    
    return (
        <>
            {
                showAlert &&                                            
                <AlertCustom variant={msgBox.variant} handleCloseAlert={handleCloseAlert}> {msgBox.message} </AlertCustom>
            }
            <S.Container>
                <Row className="mb-2 px-1">
                    <Col lg={8}>
                        <Form.Group className="p-1" controlId="GroupCep ">
                            <Form.Label className="m-0">Cep</Form.Label>
                            <InputGroup>
                                <Form.Control 
                                    type="text"  
                                    name='cep' 
                                    placeholder="Digite seu cep" 
                                    inputMode="numeric" // Adiciona o teclado numérico
                                    {...register("cep")}
                                    isInvalid={!!errors.cep}
                                    onChange={handleChange}
                                />
                                <Button 
                                    variant='success'
                                    onClick={ handleOnClickCep}
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
                        <Form.Group controlId="GroupFederativeUnit">
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
                <Row className="mb-2 px-1">
                    <Col className="mb-2" lg={8}>
                        <Form.Group className="p-1" controlId="GroupReference">
                            <Form.Label>Referência</Form.Label>
                            <Form.Control 
                                type="text"  
                                name='reference' 
                                placeholder="Ponto de referência" 
                                {...register("reference")}
                                onBlur={(e) => handleBlur(e)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </S.Container>
    </>
)
}

export default DataAddress;

/* 
    - verifica linha por linha os nomes de contolID passar Group + nome do campo;


*/