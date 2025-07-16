import * as S from './styled';
import { TextC } from '../../../../../components/Typography';

const Header = () => {

    return (
        <S.Container>
            <S.WrapTexts> 
                <TextC.Title level={2}> Relatórios dos Competidores </TextC.Title>
                <TextC.Body level={2}> Relação de todos os alunos que participaram da competição </TextC.Body>
            </S.WrapTexts>
        </S.Container>
    )
}

export default Header;