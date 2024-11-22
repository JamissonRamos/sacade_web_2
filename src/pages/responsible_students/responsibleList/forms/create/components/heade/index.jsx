import * as S from './styled';
import { TextC } from '../../../../../../../components/Typography';

const HeaderForm = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Cadastro de Responsáveis do Aluno</TextC.Title>
            <TextC.Body level={1}>Fazer o cadastro de responsáveis pelo aluno já cadastrado no sistema.</TextC.Body>
        </S.Container>
    )
}

export default HeaderForm