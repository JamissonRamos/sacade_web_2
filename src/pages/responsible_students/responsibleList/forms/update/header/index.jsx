import * as S from './styled';
import { TextC } from '../../../../../../components/Typography';

const HeaderForm = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Atualizar Responsáveis</TextC.Title>
            <TextC.Body level={1}>Fazer atualização do cadastro do responsáveis pelo aluno.</TextC.Body>
        </S.Container>
    )
}

export default HeaderForm