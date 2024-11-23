import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';

const NotificationsUpdate = () => {
    const navigate = useNavigate();

    return (

        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdUpdate />
                    <TextC.Title level={2}> Atualização </TextC.Title>
                </S.Header>
                <S.Body>
                    <TextC.Body level={2}> Seu item foi atualizado com sucesso!  </TextC.Body>
                    <S.WrapImg>
                        <img src={Theme.ImgC.Update } alt="Update" />
                    </S.WrapImg>
                </S.Body>
                <S.Footer>
                    <S.ButtonOutline
                        onClick={() =>  navigate('/')}
                    >
                        <span>Home</span>
                        <Theme.Icons.MdHome />
                    </S.ButtonOutline>
                </S.Footer>
            </S.Content>
        </S.Container>
    )
}

export default NotificationsUpdate