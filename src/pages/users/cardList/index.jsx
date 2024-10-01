import React, { useState } from 'react'
import * as S from './styled'
import { Badge } from 'react-bootstrap'
// import ChangeRegistrationModal from '../modal'

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
                        onClick={() => {setDataUserModal({uid,firstName,lastName,status,statusActive}), handleShow()}}>
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

            {/* <ChangeRegistrationModal data={dataUserModal} showModal={showModal} handleClose={handleClose}  onUserUpdate={onUserUpdate}/> */}
        </S.Container>
    )
}

export default CardList
