import * as S from './styled';
import { TextC } from '../../../../../../../components/Typography';

const HeaderForm = () => {
    return (
        <S.Container>
            <S.WrapText>
                <TextC.Title level={2}> Cadastro de Responsáveis</TextC.Title>
                <TextC.Body level={1}> Fazer o cadastro de responsáveis pelo aluno.</TextC.Body>
            </S.WrapText>
        </S.Container>
    )
}

export default HeaderForm