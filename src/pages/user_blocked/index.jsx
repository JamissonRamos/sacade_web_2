// import React from 'react'
// import { WarapperMainPage } from '../../components/Wrapper/pages'
// import { Typography } from '../../components/Typography'
// import Buttons from '../../components/buttons'
import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import { WrapPages } from '../../components/Wrappe/pages'
import { Theme } from '../../theme'
import { TextC } from '../../components/Typography'
import { useAuth } from '../../contexts/authContext/AuthContex';
import { Button } from 'react-bootstrap';

const Userblocked = () => {
    const { currentUser } = useAuth(); // Obtém o estado de autenticação
    const { firstName } = currentUser || null;
    const navigate = useNavigate();
    return (
        <WrapPages >
            <S.Container>
                <S.WrapIcon>
                    <Theme.Icons.MdLockPerson />
                </S.WrapIcon>
                <S.WrapText>
                    <S.WrapTitle> 
                        <TextC.Headline level='2'  >
                            { firstName ? `${firstName}! ` : " "  }
                        </TextC.Headline>
                        <TextC.Headline level='2' color={Theme.Colors.grey600} >
                            Acesso Bloqueado
                        </TextC.Headline>
                    </S.WrapTitle>
                    <TextC.Body level='2' >
                        Desculpe, mas seu acesso foi bloqueado. Por favor, entre em contato com o administrador do sistema para mais informações :(
                    </TextC.Body>
                </S.WrapText>
                <S.WrapButton>
                    <Button 
                        onClick={() => navigate('/login')}
                    >
                        <Theme.Icons.MdLogout />
                        <span>Voltar Login</span>
                    </Button>
                </S.WrapButton>
                <S.WrapImg>
                    <img src={Theme.ImgC.Security } alt="Imagem de Segurança da Página"  />
                </S.WrapImg>
            </S.Container>
        </WrapPages>
    )
}

export default Userblocked