import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';

const NotificationsCreate = () => {
    const navigate = useNavigate();

    return (

        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdCheckCircleOutline />
                    <TextC.Title level={2}> Sucesso </TextC.Title>
                </S.Header>
                <S.Body>
                    <TextC.Body level={2}> Seu cadastro foi efetuado com sucesso!  </TextC.Body>
                    <S.WrapImg>
                        <img src={Theme.ImgC.Success} alt="sucesso" />
                    </S.WrapImg>
                </S.Body>
                <S.Footer>
                    <S.ButtonOutline
                        onClick={() =>  navigate('/')}
                    >
                        <span>Home</span>
                        <Theme.Icons.MdHome />
                    </S.ButtonOutline>
                    <S.ButtonContainer
                        onClick={() =>  navigate(-1)}
                    >
                        <span>Novo Cadastro</span>
                        <Theme.Icons.MdAddCircle />
                    </S.ButtonContainer>
                </S.Footer>
            </S.Content>
        </S.Container>
    )
}

export default NotificationsCreate