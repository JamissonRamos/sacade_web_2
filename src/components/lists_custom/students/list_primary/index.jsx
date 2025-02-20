import * as S from './styled';
import { TextC } from '../../../Typography'
import { Badge } from 'react-bootstrap'

const ListPrimary = ({index, firstName, lastName, status}) => {

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

    return (
        <S.Card>
            <S.SectionPrime>
                <S.WrapIndex>
                    <TextC.Body level={3}> {index + 1} </TextC.Body>
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
    )
}

export default ListPrimary