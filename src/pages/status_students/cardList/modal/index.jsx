import * as S from './styled'
import { Badge, Button, Form, Modal, Spinner } from 'react-bootstrap'
import { TextC } from '../../../../components/Typography'
import { Theme } from '../../../../theme';
import { useState } from 'react'
import { useStudents } from '../../../../hooks/students';

const ChangeRegistrationModal = ({data, showModal, handleClose, onUserUpdate}) => {
    const [error, setError] = useState(null);

    //Extraindo dados do data
    const {uid, fillName, status } = data || false;
    const [formData, setFormData] = useState({
        uid: uid,
        status: status,
    });   

    const { UpdateStudents, isLoadingUpdate } = useStudents.usePostDocumentsUpdate();


    const handleChange = (e) => { 
        const { name, value } = e.target;
        
        setError(null);
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
            uid: uid
        }));
    };

    const handleBadge = (status) => 
    {
        let bg
        switch (status) {
            case 'ativo':
                bg = "success"
                break;
            case 'bloqueado':
                bg = "warning"
                break;
            case 'inativo':
                bg = "danger"
                break;

            default:
                bg = "primary"
                break;
        }
        return bg 
    }

    // Função para lidar com o submit do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação do campo 'status'
        if (formData.status === "") {
            setError("Por favor, selecione um Status valido.");
            return; // Interrompe o envio do formulário
        }else if(formData.status === status) {
            setError("Por favor, selecione um Status diferente do atual.");
            return; // Interrompe o envio do formulário
        }
        
        let result = await UpdateStudents(formData);
        const {success, message } = result;


        if (success) {
            onUserUpdate() //função que vem do index
            handleCloseModal()
        }else{
            setError(message)
        }
    };

    const handleCloseModal = () => {
        setFormData({
            uid: '',
            fillName,
            status: '',
        });
        handleClose()
    }

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <TextC.Headline level={1}>
                        {fillName}
                    </TextC.Headline>
                    <S.WrapDescription>
                        <TextC.Body level={2}>Fazer mudanças no Status do Aluno</TextC.Body>
                    </S.WrapDescription>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4 p-1" controlId="GroupStudent">
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
                            <option value="ativo">Ativo</option>
                            <option value="bloqueado">Bloqueado</option>
                            <option value="inativo">Inativo</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid" >
                            {error}
                        </Form.Control.Feedback>
                    </Form.Group >

                </Form>

            </Modal.Body>

            <Modal.Footer>
                <S.WrapButtons>
                    <Button 
                        variant="outline-danger" 
                        size='sm'
                        onClick={handleCloseModal}
                    >
                        <span> Cancelar </span>
                        <Theme.Icons.MdCancel />
                    </Button>

                    <Button 
                        variant="success" 
                        type='submit' 
                        disabled= { isLoadingUpdate ? true : false}
                        onClick={handleSubmit}
                    > 
                        { isLoadingUpdate 
                        ?   <>
                                <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                                    <span className="sr-only"> Atualizando... </span>
                            </> 
                        :
                            <>
                                <span>Atualizar</span>
                                <Theme.Icons.MdUpdate />
                            </>
                        }
                    </Button>
            </S.WrapButtons>
            </Modal.Footer>

        </Modal>
    )
}

export default ChangeRegistrationModal