import * as S from './styled';
import { TextC } from '../../../../../../components/Typography';

const HeaderForm = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Atualizar Cadastro</TextC.Title>
            <TextC.Body level={1}> Realizar a atualização dos dados dos alunos. </TextC.Body>
        </S.Container>
    )
}

export default HeaderForm