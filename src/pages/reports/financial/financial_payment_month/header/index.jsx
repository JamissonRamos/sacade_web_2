import * as S from './styled';
import { TextC } from '../../../../../components/Typography';

const Header = () => {

    return (
        <S.Container>
            <S.WrapTexts> 
                <TextC.Title level={2}> Relatório Pagamentos do Mês </TextC.Title>
                <TextC.Body level={2}> Relação de todos os pagamentos feitos no mês. </TextC.Body>
            </S.WrapTexts>
        </S.Container>
    )
}

export default Header;