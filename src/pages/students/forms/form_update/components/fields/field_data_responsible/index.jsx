import {Button} from "react-bootstrap";
import { Theme } from "../../../../../../../theme";
import * as S from './styled'
import ModalResponsible from "./modal";
import { useEffect, useState } from "react";
import { getStudentResponsible, deleteStudentResponsible } from "./scripts";
import { TextC } from "../../../../../../../components/Typography";
import DeleteData from "../../../../../../../components/alert_delete";
import { AlertCustom } from "../../../../../../../components/alert_custom";


const DataResponsible = () => {
    const [registered, setRegistered] = useState('');
    const [registeredModify, setRegisteredModify] = useState('');
    const [registeredDelete, setRegisteredDelete] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [msgBox, setMsgBox] = useState(null)

    // Função para fechar o alerta e preparar para nova mensagem
    const handleCloseAlert = () => {
        setShowAlert(false);
        setMsgBox(""); // Limpa a mensagem
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const handleShow = () => { 
        setRegisteredModify('')
        setShowModal(true)
    };


    const handleShowModalEdit = (id) => { 
        setShowModal(true)
        const filter = registered[id]
        setRegisteredModify({id: id, data: filter})
    };


    const handleShowDelete = (key, name) => {
        setRegisteredDelete({
            id: key,
            fullName: name
        })
        setShowDelete((prevState) => !prevState);
        handleCloseAlert();
    }

    const handleDeleteData = async(uid) => {
        const result = await deleteStudentResponsible(uid)
        const { success, message} = result;

        if(success){
            setMsgBox({
                variant: 'success',
                message: 'Cadastro excluído com sucesso!'
            })
            setShowAlert(true)
            fetchDataResponsible();
        }else{
            setMsgBox({
                variant: 'danger',
                message: message
            })
            setShowAlert(true)
        }
    }
    

    const fetchDataResponsible = async () => {
        const result = await getStudentResponsible();
        const { success, data } = result;
        if(success){
            setRegistered(
                data
            )
        }else{
            setRegistered(null)
        }
    };
    
    useEffect(() => {
        fetchDataResponsible();  // Chama a função ao renderizar o componente
    }, []);

    return (
        <S.Container>
            {
                showAlert &&
                <AlertCustom variant={msgBox.variant} handleCloseAlert={handleCloseAlert}> {msgBox.message} </AlertCustom>
            }
            <S.WrapButtons>
                <Button
                    variant="outline-primary"
                    size='sm'
                    onClick={handleShow}
                >
                    <Theme.Icons.MdAdd />
                    <span>Adicionar</span>
                </Button>                    
            </S.WrapButtons>

            <ModalResponsible  showModal={showModal} handleClose={handleClose} fetchDataResponsible={fetchDataResponsible} registeredModify={registeredModify} />
            
            {
                showDelete && <DeleteData registeredDelete={registeredDelete} handleDeleteData={handleDeleteData} handleShowDelete={handleShowDelete}/>
            }

            <S.DividingLine />

            <S.WrapListResponsible>
                {
                    registered && 
                    registered.map(({fullName, relationshipLevel }, i) => (
                        <S.Content key={i}> 
                            <S.WrapData>
                                <S.FullName> 
                                    <TextC.Body level={1} >
                                        {fullName}
                                    </TextC.Body>  
                                </S.FullName>
                                <S.RelationshipLevel>
                                    <TextC.Body level={1} >
                                        {relationshipLevel}
                                    </TextC.Body>
                                </S.RelationshipLevel>
                            </S.WrapData>
                            <S.WrapListButtons>
                                <Button 
                                    variant="outline-success"
                                    onClick={() => handleShowModalEdit(i)}
                                >
                                    <Theme.Icons.MdEdit />
                                </Button>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => handleShowDelete(i, fullName)}>
                                    <Theme.Icons.MdDelete />
                                </Button>
                            </S.WrapListButtons>
                        </S.Content>
                    ))
                }

            </S.WrapListResponsible>
        </S.Container>
    )
}

export default DataResponsible;

/* 

*/