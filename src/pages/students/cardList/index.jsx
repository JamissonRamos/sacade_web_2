import * as S from './styled'
import { Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { TextC } from '../../../components/Typography';

const CardList = ({data}) => {
    
    const navigate = useNavigate();
    
    const handleBadge = (status) => 
    {
        let bg
        switch (status) {
        case 'inativo':
            bg = "warning"
            break;
        case 'bloqueado ':
            bg = "danger"
            break;
        case 'ativo':
            bg = "success"
            break;
    
        default:
            bg = "primary"
            break;
        }
    
        return bg 
    }

    // Exclui os dados do localStorage
    const handleDeleteLocalStorage = () => {
        localStorage.removeItem('studentResponsible');
    }

    const handleShowFormUpdate = (uid) => { 
        handleDeleteLocalStorage();
        navigate('/students/form_update', { state: { uid: uid } });
    };

    return (
        <S.Container> 
            {
                data && data.map(({uid, firstName, lastName, status}, i) => (
                    <S.WrapButton 
                        key={uid}
                        onClick={() => handleShowFormUpdate(uid)}>
                            
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
        </S.Container>
    )
}

export default CardList