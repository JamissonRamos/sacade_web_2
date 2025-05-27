import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';

const NotificationsMonthlyPayment = () => {
    const navigate = useNavigate();
    
    return (
        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdCheckCircleOutline />
                    <TextC.Title level={2}> Sucesso </TextC.Title>
                </S.Header>
                <S.Body>
                    <TextC.Body level={2}> 
                        Pagamento da mensalidade realizado com sucesso! </TextC.Body>
                    <S.WrapImg>
                        <img src={Theme.ImgC.TransferMoney} alt="Pagamento Mensalidade" />
                    </S.WrapImg>
                </S.Body>
                <S.Footer>

                    <S.ButtonOutline
                        onClick={() => navigate(-3)}
                    >
                        <TextC.Body level={2}>
                            Histórico Mensalidades
                        </TextC.Body>
                        <Theme.Icons.MdAttachMoney />
                    </S.ButtonOutline>

                    <S.ButtonContainer
                        onClick={() =>  navigate('/')}
                    >
                        <TextC.Body level={2}>Home</TextC.Body>
                        <Theme.Icons.MdHome />
                    </S.ButtonContainer>

                </S.Footer>
            </S.Content>
        </S.Container>
    )
}

export default NotificationsMonthlyPayment