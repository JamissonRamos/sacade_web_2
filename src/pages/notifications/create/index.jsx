import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useLocation, useNavigate } from 'react-router-dom';

const NotificationsCreate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { url = '/', uid = '', valueButton = { value: 'Home', icon: 'MdHome' }, buttonNewRegister = true } = location.state || {};
    const { value: buttonValue = 'Default Value', icon: buttonIcon = 'Default Icon' } = valueButton;

    return (
        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdCheckCircleOutline />
                    <TextC.Title level={2}> Sucesso </TextC.Title>
                </S.Header>
                <S.Body>
                    <TextC.Body level={2}> 
                        Seu cadastro foi efetuado com sucesso!  </TextC.Body>
                    <S.WrapImg>
                        <img src={Theme.ImgC.Success} alt="sucesso" />
                    </S.WrapImg>
                </S.Body>
                <S.Footer>
                    <S.ButtonOutline
                        onClick={() => navigate(url, { state: { uid } })}
                    >
                        <span>{buttonValue}</span>
                        <>{Theme.Icons[buttonIcon]()}</>
                    </S.ButtonOutline>
                    {
                        buttonNewRegister &&

                        <S.ButtonContainer
                            onClick={() =>  navigate(-1)}
                        >
                            <span>Novo Cadastro</span>
                            <Theme.Icons.MdAddCircle />
                        </S.ButtonContainer>
                    }
                </S.Footer>
            </S.Content>
        </S.Container>
    )
}

export default NotificationsCreate