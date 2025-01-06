import * as S from './styled';
import { TextC } from '../../../../../components/Typography';

const HeaderForm = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Cadastro de Aluno</TextC.Title>
            <TextC.Body level={2}> Fazer o cadastro de novo aluno. </TextC.Body>
        </S.Container>
    )
}

export default HeaderForm