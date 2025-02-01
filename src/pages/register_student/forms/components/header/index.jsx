import * as S from './styled';
import { TextC } from '../../../../../components/Typography';

const HeaderForm = ({fullname}) => {
    return (
        <S.Container>
            <TextC.Title level={2}> Ficha do Aluno</TextC.Title>
            <TextC.Body level={2}> Essa é a ficha do aluno: <strong>{fullname}</strong> </TextC.Body>
        </S.Container>
    )
}

export default HeaderForm