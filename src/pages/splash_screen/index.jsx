import * as S from './styled'
import { useNavigate } from "react-router-dom";
import { WrapPages } from "../../components/Wrappe/pages";
import { TextC } from '../../components/Typography';
import { Theme } from '../../theme';
import { Button } from 'react-bootstrap';

const SplashScreen = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Content>
                <S.Cards>
                    <S.Card id='cardStudent'>
                        <S.SectionPrime>
                            <S.WrapImg> <img src={Theme.ImgC.AvatarsRemovebg} alt="Avatar Students" /> </S.WrapImg>
                            <S.WrapText> <TextC.Body level={2}> Não tem conta ainda? Sem problemas! Clique no botão abaixo para cadastrar um novo aluno! </TextC.Body> </S.WrapText>
                        </S.SectionPrime>

                        <S.SectionSecondary>
                            <S.WrapButton>
                                <Button 
                                    variant='outline-success'
                                > Novo Aluno</Button>
                            </S.WrapButton>
                        </S.SectionSecondary>
                    </S.Card>

                    <S.Card >
                        <S.SectionPrime>
                            <S.WrapImg> <img src={Theme.ImgC.SecurityRemoveBg} alt="Avatar Students" /> </S.WrapImg>
                            <S.WrapText> <TextC.Body level={2}>  Se sua conta já está liberada pelo admin, clique no botão abaixo para entrar! </TextC.Body> </S.WrapText>
                        </S.SectionPrime>

                        <S.SectionSecondary>
                            <S.WrapButton>
                                <Button 
                                    id='buttonLogin'
                                    variant='outline-warning'
                                > Fazer login </Button>
                            </S.WrapButton>
                        </S.SectionSecondary>

                    </S.Card>
                </S.Cards>
            </S.Content>

        </S.Container>

    )
}

export default SplashScreen