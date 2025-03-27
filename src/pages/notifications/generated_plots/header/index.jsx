import { TextC } from '../../../../components/Typography';
import { Theme } from '../../../../theme';
import * as S from './styled';

const Header = () => {
    
    return (
        <S.Header>
            <Theme.Icons.MdCheckCircleOutline />
            <TextC.Title level={3}> Sucesso </TextC.Title>
        </S.Header>
    )
}

export default Header