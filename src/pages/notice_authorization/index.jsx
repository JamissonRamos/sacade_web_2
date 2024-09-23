// import React from 'react'
// import { WarapperMainPage } from '../../components/Wrapper/pages'
// import { Typography } from '../../components/Typography'
// import Buttons from '../../components/buttons'
import { useNavigate, useParams } from 'react-router-dom'
import * as S from './styled'
import { WrapPages } from '../../components/Wrappe/pages'
import { Theme } from '../../theme'
import { TextC } from '../../components/Typography'
import { useAuth } from '../../contexts/authContext/AuthContex';
import { Button } from 'react-bootstrap';

const NoticeAuthorization = () => {
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
                            Acesso negado
                        </TextC.Headline>
                    </S.WrapTitle>
                    <TextC.Body level='2' >
                        Desculpe, mas você não possui permissão para acessar esta seção do sistema :(
                    </TextC.Body>
                </S.WrapText>
                <S.WrapButton>
                    <Button 
                        onClick={() => navigate('/')}
                    >
                        <Theme.Icons.MdHome />
                        <span>Voltar Home</span>
                    </Button>
                </S.WrapButton>
                <S.WrapImg>
                    <img src={Theme.ImgC.Security } alt="Imagem de Segurança da Página"  />
                </S.WrapImg>
            </S.Container>
        </WrapPages>
    )
}

export default NoticeAuthorization