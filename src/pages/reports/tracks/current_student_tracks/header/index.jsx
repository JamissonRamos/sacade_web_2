import * as S from './styled';
import { TextC } from '../../../../../components/Typography';

const Header = () => {

    return (
        <S.Container>
            <S.WrapTexts> 
                <TextC.Title level={2}> Relatórios das Faixas </TextC.Title>
                <TextC.Body level={2}> Relação de todos alunos e sua atuais faixas e graus </TextC.Body>
            </S.WrapTexts>
        </S.Container>
    )
}

export default Header;