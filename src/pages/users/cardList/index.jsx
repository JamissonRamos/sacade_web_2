import React from 'react'
import * as S from './styled'
import { Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import ChangeRegistrationModal from '../modal'

const CardList = ({data}) => {
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

    const handleShowFormUpdate = (uid) => { 
        navigate('/users/form_update', { state: { uid: uid } });
    };

    return (
        <S.Container>
            {
                data && data.map(({uid, firstName, lastName, status}) => (
                    <S.WrapButton 
                        key={uid}
                        onClick={() => handleShowFormUpdate(uid)}>
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
        </S.Container>
    )
}

export default CardList
