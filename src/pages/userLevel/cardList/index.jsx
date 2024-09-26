import React, { useState } from 'react'
import * as S from './styled'
import { useNavigate } from 'react-router-dom'
import { Badge, Button } from 'react-bootstrap'
import { Theme } from '../../../theme'
import ChangeRegistrationModal from '../modal'
import { TextC } from '../../../components/Typography'


const CardList = ({data}) => {
    const [showModal, setShowModal] = useState(false);
    const [dataUserModal, setDataUserModal] = useState(null);

    const navigate = useNavigate();

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
    const handleClose = () => setShowModal(false);

    const handleShow = () => setShowModal(true);

    return (
        <S.Container>
            {
                data && data.map(({uid, firstName, lastName, status, statusActive}) => (
                    <S.Card key={uid} >
                        <S.Header>
                            <Badge bg={handleBadge(status)} text="light">
                                {status}
                            </Badge>
                            
                        </S.Header>
                        <S.Body>
                            <S.Name>
                                <span> {firstName + ' ' + lastName} </span>
                            </S.Name>
                        </S.Body>
                        <S.Footer>
                            <S.WrapButton>
                                <Button 
                                    variant="outline-success"
                                    size='sm'
                                    onClick={() => {setDataUserModal({uid,firstName,lastName,status,statusActive}), handleShow()}}
                                >
                                    <Theme.Icons.MdEdit />
                                    <span>Alterar</span>
                                </Button>
                            </S.WrapButton>
                        </S.Footer>
                    </S.Card>
                ))
            }

            <ChangeRegistrationModal data={dataUserModal} showModal={showModal} handleClose={handleClose}  />
        </S.Container>
    )
}

export default CardList