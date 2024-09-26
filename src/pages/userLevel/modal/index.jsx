import React, { useEffect, useState } from 'react'
import { Alert, Badge, Button, Form, Modal, Spinner } from 'react-bootstrap'
import { TextC } from '../../../components/Typography'
import * as S from './styled'
import { useUsers } from '../../../hooks/users';

const ChangeRegistrationModal = ({data, showModal, handleClose}) => {
    const [error, setError] = useState(null);
    const [labelChecked, setLabelChecked] = useState('');
    const {uid, firstName, lastName, status, statusActive} = data || " ";
    // console.log(uid);
    
    const { UpdateUser, errorUpdate, isLoadingUpdate } = useUsers.usePostDocumentsID();

   console.log(errorUpdate);
   
    
    const [formData, setFormData] = useState({
        uid: '',
        status: '',
        statusActive: '', 
    });

    // console.log(formData);
    
    // UseEffect para carregar o valor do status e preencher o formulário
    useEffect(() => {
        if (data) {
            setFormData({
                //...formData,
                status: status || '', // Preenche o status recebido
                statusActive: statusActive || false // Se houver um valor ativo, ele será atribuído
            });
            setLabelChecked(
                statusActive ? 'Ativado' : 'Bloqueado'
            );
        }
    }, [data, status, statusActive]); // Executa o efeito quando os dados são recebidos

    const handleBadge = (status) => 
        {
            let bg
            switch (status) {
            case 'Visitante':
                bg = "warning"
                break;
            case 'Assistente':
                bg = "info"
                break;
            case 'Administrador':
                bg = "success"
                break;
        
            default:
                bg = "primary"
                break;
            }
        
            return bg 
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setError(null);
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
            uid: uid // Adiciona o uid aqui
        }));
        if(name === "statusActive") {
            setLabelChecked(
                formData.statusActive ? 'Bloqueado' : 'Ativado'
            )
        }
    };
    
    // Função para lidar com o submit do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

         // Validação do campo 'status'
        if (formData.status === "") {
            setError("Por favor, selecione um Status valido.");
            return; // Interrompe o envio do formulário
        }

        // Exibe os valores capturados
        console.log('Form Data:', formData);

        let result =  await UpdateUser(formData);

        console.log(result);

        handleCloseModal()
    };

    const handleCloseModal = () => {
        setFormData({
            status: '', 
            activeUser: '',
        });
        handleClose()
    }

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <TextC.Headline level={1}>
                        {firstName + " " + lastName }
                    </TextC.Headline>
                    <S.Name>
                        <TextC.Body level={1}>Fazer mudanças no cadastro do usuário</TextC.Body>
                    </S.Name>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4 p-1" controlId="formModalUsers">
                        <Form.Label className="mb-1">
                            <S.WrapFormLabel>
                                <TextC.Label level={5}>Status atual: </TextC.Label>
                                <Badge bg={handleBadge(status)} text="light">
                                    {status}
                                </Badge> 
                            </S.WrapFormLabel>
                        </Form.Label >
                        <Form.Select
                            name='status'
                            value={formData.status}
                            onChange={handleChange}
                            isInvalid={!!error} //!!error
                            >
                            <option value="">Selecione um Status</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Assistente">Assistente</option>
                            <option value="Visitante">Visitante</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid" >
                            {error}
                        </Form.Control.Feedback>
                    </Form.Group >
                    <Form.Group className="p-1">
                        <Form.Check 
                            type="switch"
                            name="statusActive"
                            label={'Usuário ' + labelChecked}
                            checked={formData.statusActive}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
                {/* {
                    isLoadingUpdate &&
                    <>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                            variant={'wrang'}
                        />
                        <span className="sr-only">Carregando os dados...</span>
                    </>
                } */}
                {
                    errorUpdate && <Alert variant={'danger'}> {errorUpdate} </Alert>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Fechar
                </Button>
                <Button 
                    variant="primary" 
                    type='submit' 
                    disabled= { isLoadingUpdate ? true : false}
                    onClick={handleSubmit}> 
                        { isLoadingUpdate ?
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="sr-only"> Salvando mudança... </span>
                            </> :
                            <span>Salvar Mudanças</span>
                        }
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ChangeRegistrationModal