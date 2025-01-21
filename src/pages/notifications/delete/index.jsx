import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useLocation, useNavigate } from 'react-router-dom';

const NotificationsDelete = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { url = '/', uid = '', valueButton = { value: 'Home', icon: 'MdHome' } } = location.state || {};
    const { value: buttonValue = 'Default Value', icon: buttonIcon = 'Default Icon' } = valueButton;
    
    return (
        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdCancel />
                    <TextC.Title level={2}> Excluído </TextC.Title>
                </S.Header>
                <S.Body>
                    <TextC.Body level={2}> 
                        Seu item foi excluído com sucesso!
                    </TextC.Body>
                    <S.WrapImg>
                        <img src={Theme.ImgC.Delete} alt="delete" />
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

export default NotificationsDelete