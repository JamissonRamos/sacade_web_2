import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useLocation, useNavigate } from 'react-router-dom';

const NotificationsMaintenance = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { url = '/', uid = '', valueButton = { value: 'Home', icon: 'MdHome' } } = location.state || {};
    const { value: buttonValue = 'Default Value', icon: buttonIcon = 'Default Icon' } = valueButton;
    
    return (
        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdUpdate />
                    <TextC.Title level={2}> Manutenção </TextC.Title>
                </S.Header>
                <S.Body>
                    <TextC.Body level={2}> Esta página está em manutenção. Você pode procurar o suporte do sistema para mais dúvidas. </TextC.Body>
                    <S.WrapImg>
                        <img src={Theme.ImgC.Maintenance } alt="Update" />
                    </S.WrapImg>
                </S.Body>
                <S.Footer>
                    <S.ButtonOutline
                        onClick={() => navigate(url, { state: { uid } })}
                    >
                        <span>{buttonValue}</span>
                        <>{Theme.Icons[buttonIcon]()}</>
                    </S.ButtonOutline>
                </S.Footer>
            </S.Content>
        </S.Container>
    )
}

export default NotificationsMaintenance