import * as S       from './styled';
import { TextC }    from '../../../Typography';
import { Badge }    from 'react-bootstrap';

const ListPrimary = ({data, navigateOnClick}) => {
    
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

    return (
        <S.Container>
        {
            data && data.map(({uid, firstName, lastName, status, statusActive}, i) => { 
                return (
                    <S.WrapButton
                        key={uid}
                        $isActive={!statusActive}
                        onClick={() => navigateOnClick(uid)}
                    >   

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
                )})}
        </S.Container>
    )}

export default ListPrimary