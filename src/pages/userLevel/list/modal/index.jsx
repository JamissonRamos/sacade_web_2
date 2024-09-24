import React, { useEffect, useState } from 'react'
import { Badge, Button, Form, Modal } from 'react-bootstrap'
import { TextC } from '../../../../components/Typography'
import * as S from './styled'

const ChangeRegistrationModal = ({data, showModal, handleClose}) => {

    const {uid, firstName, lastName, status} = data || " ";

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
    const [formData, setFormData] = useState({
        status: '',
        activeUser: false, // Inicia como false, já que é um checkbox/switch
    });
    // Função para lidar com mudanças em qualquer campo
    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

        // Se for checkbox, usa o valor de 'checked', senão usa 'value'
        setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
        });
    };


    // Função para lidar com o submit do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Exibe os valores capturados
        console.log('Form Data:', formData);
    };


    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Cadastro do Usuário  
                    <S.Name>
                        <TextC.Label level={5}>
                            {firstName + " " + lastName }
                        </TextC.Label>
                    </S.Name>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formModalUsers">
                        <Form.Label>
                            <S.WrapFormLabel>
                                <span>Status atual: </span>
                                <Badge bg={handleBadge(status)} text="light">
                                    {status}
                                </Badge> 
                            </S.WrapFormLabel>
                        </Form.Label>
                        <Form.Select
                            name='status'
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="">Selecione um Status</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Assistente">Assistente</option>
                            <option value="Visitante">Visitante</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Check 
                        type="switch"
                        name="activeUser"
                        label="Ativar Usuário?"
                        checked={formData.activeUser}
                        onChange={handleChange}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" type='submit' onClick={handleClose}>
                    Salvar Mudanças
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ChangeRegistrationModal