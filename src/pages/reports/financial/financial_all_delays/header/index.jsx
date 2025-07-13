import * as S from './styled';
import { TextC } from '../../../../../components/Typography';

const Header = () => {

    return (
        <S.Container>
            <S.WrapTexts> 
                <TextC.Title level={2}> Relatório Mensalidades Vencidas </TextC.Title>
                <TextC.Body level={2}> Relação de todos as mensalidades que estão vencidas no sistema. </TextC.Body>
            </S.WrapTexts>
        </S.Container>
    )
}

export default Header;