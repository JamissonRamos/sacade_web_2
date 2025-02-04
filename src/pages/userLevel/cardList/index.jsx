import { useState } from 'react'
import * as S from './styled'
import { Badge } from 'react-bootstrap'
import ChangeRegistrationModal from '../modal'
import { TextC } from '../../../components/Typography'

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
                data && data.map(({uid, firstName, lastName, status, statusActive}, i) => (
                    <S.WrapButton 
                        key={uid}
                        $isActive={!statusActive}
                        onClick={() => {setDataUserModal({uid,firstName,lastName,status,statusActive}), handleShow()}}>
                        {!statusActive && 
                            <S.WrapText>
                                <TextC.Body level={1}>Este usuário está bloqueado.</TextC.Body>
                            </S.WrapText>
                        }
                        <S.Card>
                            <S.SectionPrime>
                                <S.WrapIndex>
                                    <TextC.Body level={3}> {i + 1} </TextC.Body>
                                </S.WrapIndex>

                                <S.CircleFirstLetterNome>
                                    {firstName && firstName.charAt(0)}
                                </S.CircleFirstLetterNome>
                                <S.Name>
                                    {firstName + ' ' + lastName} 
                                </S.Name>
                            </S.SectionPrime>

                            <S.SectionSecondary>

                                <S.Status>
                                    <Badge bg={handleBadge(status)} text="light">
                                        {status}
                                    </Badge>
                                </S.Status>
                            </S.SectionSecondary>

                        </S.Card>

                    </S.WrapButton>
                ))
            }
        <ChangeRegistrationModal data={dataUserModal} showModal={showModal} handleClose={handleClose}  onUserUpdate={onUserUpdate}/>

        </S.Container>
    )
}

export default CardList