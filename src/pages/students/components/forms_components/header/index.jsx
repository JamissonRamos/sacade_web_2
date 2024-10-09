import * as S from './styled';
import { TextC } from '../../../../../components/Typography';

const HeaderForm = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Cadastro de Alunos</TextC.Title>
            <TextC.Body level={1}> Fazer o cadastro de novos alunos. </TextC.Body>
        </S.Container>
    )
}

export default HeaderForm