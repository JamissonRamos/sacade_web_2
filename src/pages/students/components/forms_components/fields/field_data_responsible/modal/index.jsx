import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Theme } from "../../../../../../../theme";
import * as S from './styled'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../../../../validations'
import { TextC } from "../../../../../../../components/Typography";
import { createStudentResponsible, updateStudentResponsible } from "../scripts";
import { MaskInput, CapitalizedValue } from "../../../body/script";
import { useEffect, useState } from "react";
import { AlertCustom } from "../../../../../../../components/alert_custom";

const ModalResponsible = ({showModal, handleClose, fetchDataResponsible, registeredModify} ) => {
    const [activeButton, setActiveButton] = useState(false);
    const [msgBox, setMsgBox] = useState(null)
    const [showAlert, setShowAlert] = useState(false);

    const { register, handleSubmit, setValue, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ModalResponsibleSchema)
    });

    useEffect(() => {
        setMsgBox(null)
        if (registeredModify) {
            const {fullName, relationshipLevel, responsibleBirthDate, responsibleCellPhone, responsibleEmail} = registeredModify.data
            setValue('fullName', fullName);
            setValue('relationshipLevel', relationshipLevel);
            setValue('responsibleBirthDate', responsibleBirthDate && responsibleBirthDate.split('T')[0]); // Formato YYYY-MM-DD
            setValue('responsibleCellPhone', responsibleCellPhone);
            setValue('responsibleEmail', responsibleEmail);
            setActiveButton(true)// Ativando o button de atualizar os dados 
        }
    }, [registeredModify, setValue]);

    
    // Função para fechar o alerta e preparar para nova mensagem
    const handleCloseAlert = () => {
        setShowAlert(false);
        setMsgBox(""); // Limpa a mensagem
    };

    const handleBlur = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let capitalized = CapitalizedValue(fieldValue)
        setValue(fieldName, capitalized)
    };

    const handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let maskedValue = MaskInput(fieldName, fieldValue)
        setValue(fieldName, maskedValue)
    };

    const handleCloseModal = () => {
        reset();
        //Mudar a variavel para atualizar o components que ativar o btn 
        setActiveButton(false);
        setMsgBox(false);
        handleClose();
        handleCloseAlert();
    }

    const handleUpdate = async (key, data) => {
        // Atualiza os dados no localStorage com a chave "responsavel"
        const result = await updateStudentResponsible(key, data);
        if(result){
            fetchDataResponsible();
            reset();
            handleCloseModal();
        }else{
            console.log('Erro ao tenta atualizar dados no localStorage:');
            setMsgBox({variant: 'danger', message: 'Erro ao tenta atualizar dados no localStorage'})
        }
    };

    const handleOnSubmit = async (data) => {

        handleCloseAlert();

        if (activeButton){
            handleUpdate(registeredModify.id, data)
        }else{
            const result = await createStudentResponsible(data); 
            if (result) {
                fetchDataResponsible();
                reset()
                setMsgBox({variant: 'success', message: 'Cadastro Adicionado com sucesso!'})
                setShowAlert(true)
            }else{
                console.log('Erro ao tenta criar dados no localStorage:');
                setMsgBox({variant: 'danger', message: 'Erro ao tenta criar dados no localStorage'})
                // setShowAlert(true)
            }
        }

    }
    
    return (
        <S.Container>
            <Modal show={showModal} onHide={handleClose}>
                {
                    showAlert &&                                            
                    <AlertCustom variant={msgBox.variant} handleCloseAlert={handleCloseAlert}> {msgBox.message} </AlertCustom>
                }
                <Modal.Header >
                    <Modal.Title>
                        <TextC.Headline level={1}>
                            Cadastro de Responsáveis
                        </TextC.Headline>
                        <S.DescriptionModal>
                            <TextC.Body level={1}>Cadastro de parentes do aluno </TextC.Body>
                        </S.DescriptionModal>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="responsibleForm" className="custom-form" onSubmit={(e) => e.preventDefault()}>
                        <S.WrapFields>
                            <Row className="mb-2 px-2 ">
                                <Col>
                                    <Form.Group className="p-1" controlId="GroupFullName">
                                        <Form.Label className="m-0"> Nome Completo </Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="fullName"
                                            placeholder="Digite seu nome." 
                                            {...register("fullName")}
                                            isInvalid={!!errors.fullName}
                                            onBlur={(e) => handleBlur(e)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.fullName && errors.fullName.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-2 px-2 ">
                                <Col >
                                    <Form.Group className="p-1" controlId="GroupRelationshipLevel">
                                        <Form.Label className="m-0"> Nível de Parentesco </Form.Label>
                                        <Form.Select
                                            name='relationshipLevel'
                                            {...register("relationshipLevel")}
                                            isInvalid={!!errors.relationshipLevel}
                                        >
                                        <option value="">Selecione Parente</option>
                                        <option value="pai">Pai</option>
                                        <option value="mae">Mãe</option>
                                        <option value="irmao">Irmão</option>
                                        <option value="irma">Irmã</option>
                                        <option value="filho">Filho</option>
                                        <option value="filha">Filha</option>
                                        <option value="avô">Avô</option>
                                        <option value="avó">Avó</option>
                                        <option value="tio">Tio</option>
                                        <option value="tia">Tia</option>
                                        <option value="primo">Primo</option>
                                        <option value="prima">Prima</option>
                                        <option value="cunhado">Cunhado</option>
                                        <option value="cunhada">Cunhada</option>
                                        <option value="outro">Outro</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.relationshipLevel && errors.relationshipLevel.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-2 px-2 ">
                                <Col sm={6}>
                                    <Form.Group className="p-1" controlId="GroupResponsibleBirthDate">
                                        <Form.Label className="m-0"> Data Nascimento </Form.Label>
                                        <Form.Control   
                                            type="date" 
                                            name="responsibleBirthDate"
                                            placeholder="Digite seu Data Nascimento." 
                                            {...register("responsibleBirthDate")}
                                            isInvalid={!!errors.responsibleBirthDate}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.responsibleBirthDate && errors.responsibleBirthDate .message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={6} >
                                    <Form.Group className="p-1" controlId="GroupResponsibleCellPhone">
                                        <Form.Label className="m-0"> Celular </Form.Label>
                                        <Form.Control 
                                            type="tel" 
                                            name="responsibleCellPhone"
                                            placeholder="Digite seu Celular." 
                                            inputMode="numeric" // Adiciona o teclado numérico
                                            pattern="[0-9]*"   // Limita a entrada apenas a números
                                            {...register("responsibleCellPhone")}
                                            isInvalid={!!errors.responsibleCellPhone}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.responsibleCellPhone && errors.responsibleCellPhone.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                            <Row className="mb-2 px-2 ">
                                <Col >
                                    <Form.Group className="p-1" controlId="GroupResponsibleEmail">
                                        <Form.Label className="m-0"> Email </Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            name="responsibleEmail"
                                            placeholder="Digite seu Email." 
                                            {...register("responsibleEmail")}
                                            isInvalid={!!errors.responsibleEmail}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.responsibleEmail && errors.responsibleEmail.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            
                            </Row>
                        </S.WrapFields>
                    </Form>
                    {/* {
                        msgBox &&
                        <Alert variant={msgBox.variant}> {msgBox.message} </Alert>
                    } */}
                </Modal.Body>
                <Modal.Footer>
                    <S.WrapButtons>
                        <Button variant="danger" onClick={handleCloseModal}>
                            <Theme.Icons.MdClose />
                            <span>Cancelar</span>
                        </Button>
                        {
                            !activeButton ? 
                                <Button
                                    variant="outline-success"
                                    size='sm' 
                                    form="responsibleForm"
                                    onClick={handleSubmit(handleOnSubmit)}
                                >
                                    <Theme.Icons.MdAdd />
                                    <span>Adicionar</span>
                                </Button> : 
                                <Button
                                    variant="outline-success"
                                    size='sm' 
                                    form="responsibleForm"
                                    onClick={handleSubmit(handleOnSubmit)}
                                >
                                    <Theme.Icons.MdUpdate />
                                    <span>Atualizar</span>
                                </Button>                    
                        }
                    </S.WrapButtons>
                    
                </Modal.Footer>
            </Modal>
        </S.Container>
    )
}

export default ModalResponsible;

/* 

*/