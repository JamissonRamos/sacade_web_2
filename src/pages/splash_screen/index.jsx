import * as S           from './styled'
import { TextC }        from '../../components/Typography';
import { Theme }        from '../../theme';
import { Button }       from 'react-bootstrap';
import { useNavigate }  from "react-router-dom";

const SplashScreen = () => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.Content>
                <S.Cards>
                    <S.Card id='cardStudent'>
                        <S.SectionPrime>
                            <S.WrapImg> 
                                <img src={Theme.ImgC.AvatarsRemovebg} alt="Avatar Students" /> 
                            </S.WrapImg>
                            <S.WrapText> 
                                <TextC.Body level={2}> Não tem conta ainda? Sem problemas! Clique no botão abaixo para cadastrar um novo aluno! </TextC.Body>
                            </S.WrapText>
                        </S.SectionPrime>
                        <S.SectionSecondary>
                            <S.WrapButton>
                                <Button 
                                    variant='outline-success'
                                    onClick={() => navigate('/students')}
                                > 
                                    <Theme.Icons.MdPerson />
                                    <span>Novo Aluno </span>
                                </Button>
                            </S.WrapButton>
                        </S.SectionSecondary>
                    </S.Card>
                    <S.Card >
                        <S.SectionPrime>
                            <S.WrapImg> 
                                <img src={Theme.ImgC.SecurityRemoveBg} alt="Avatar Students" /> 
                            </S.WrapImg>
                            <S.WrapText> 
                                <TextC.Body level={2}>  Se sua conta já está liberada pelo admin, clique no botão abaixo para entrar! </TextC.Body> 
                            </S.WrapText>
                        </S.SectionPrime>
                        <S.SectionSecondary>
                            <S.WrapButton>
                                <Button 
                                    id='buttonLogin'
                                    variant='outline-warning'
                                    onClick={() => navigate('/login')}
                                > 
                                    <Theme.Icons.MdLogout />
                                    <span>Fazer login </span>
                                </Button>
                            </S.WrapButton>
                        </S.SectionSecondary>
                    </S.Card>
                </S.Cards>
                <S.WrapVersion>
                    <span> V. 1.6 </span>
                </S.WrapVersion>
            </S.Content>

        </S.Container>
    )
}
export default SplashScreen