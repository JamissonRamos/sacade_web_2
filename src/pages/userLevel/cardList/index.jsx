import React, { useState } from 'react'
import * as S from './styled'
import { Badge, Button } from 'react-bootstrap'
import { Theme } from '../../../theme'
import ChangeRegistrationModal from '../modal'

const CardList = ({data, onUserUpdate}) => {
    const [showModal, setShowModal] = useState(false);
    const [dataUserModal, setDataUserModal] = useState(null);

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
                    <S.WrapButton 
                        key={uid}
                        onClick={() => console.log('Clicou em :' , uid)}>

                        <S.Card>
                            <S.CircleFirstLetterNome>
                                {firstName && firstName.charAt(0)}
                            </S.CircleFirstLetterNome>

                            <S.Name>
                                {firstName + ' ' + lastName}
                            </S.Name>
                            <S.Status>
                                <Badge bg={handleBadge(status)} text="light">
                                    {status}
                                </Badge>
                            </S.Status>
                        </S.Card>

                    </S.WrapButton>
                ))
            }

            <ChangeRegistrationModal data={dataUserModal} showModal={showModal} handleClose={handleClose}  onUserUpdate={onUserUpdate}/>
        </S.Container>
    )
}

export default CardList













/* 

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







*/