import * as S from './styled';
import { TextC } from '../../../../components/Typography';
import { Theme } from '../../../../theme';



const Header = () => {

    return (
        <S.Container>
            <S.WrapTexts> 
                <TextC.Title level={2}> Relatórios dos Alunos </TextC.Title>
                <TextC.Body level={2}> Relação de todos os alunos cadastrados. </TextC.Body>
            </S.WrapTexts>
        </S.Container>
    )
}

export default Header;