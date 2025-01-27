import * as S from './styled';
import { TextC } from '../../../../components/Typography';

const HeaderForm = ({FullName}) => {

    return (
        <S.Container>
            <TextC.Title level={2}> Ficha do Aluno</TextC.Title>
            <TextC.Body level={2}> Essa é a ficha do aluno: <S.FullName> {FullName} </S.FullName> </TextC.Body>
        </S.Container>
    )
}

export default HeaderForm