import * as S from './styled'
import { TextC } from '../../../Typography'
import { ButtonsC } from '../../../buttons'
import { Theme } from '../../../../theme'
import { MenuItem } from '../../../../constants/menuItem/index'
import { useAuth } from '../../../../contexts/authContext/AuthContex'
import { useNavigate } from 'react-router-dom'

const MenuMobile = ({handleShowMenu}) => {
    const {logout } = useAuth()
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        // Executa o logout
        await logout();
        // Limpa o sessionStorage
        sessionStorage.clear();
        // Redireciona o usuário para a página de login
        navigate("/login");
        handleShowMenu()
    }
    const WrapMenuItem = ({title, path, icon, subNav}, i) => {
        return (
            <S.WrapNavigation key={i}>
                <S.WrapHeaderNavigation>
                    <S.LabelNav>
                        <TextC.Label level={4} > {title} </TextC.Label>
                    </S.LabelNav>
                </S.WrapHeaderNavigation>
                {
                    subNav ?
                        subNav.map(({title, path, icon }, iSub) => (  
                        <S.Navigation key={iSub} to={path} onClick={handleShowMenu}>
                            <S.IconNav> {icon} </S.IconNav>
                            <S.LabelNav>
                                <TextC.Label level={3} > {title} </TextC.Label>
                            </S.LabelNav>
                        </S.Navigation>

                        ))
                    :
                    <S.Navigation to={path} onClick={handleShowMenu}>
                        <S.IconNav> {icon} </S.IconNav>
                        <S.LabelNav>
                            <TextC.Label level={3} > {title} </TextC.Label>
                        </S.LabelNav>
                    </S.Navigation>
                }
            </S.WrapNavigation>
        )
    }
    const WrapMenuItemClose = ({title, path, icon}, i) => {
        return (
            <S.WrapNavigation key={i}>
                <S.WrapHeaderNavigation>
                    <S.LabelNav>
                        <TextC.Label level={4} > {title} </TextC.Label>
                    </S.LabelNav>
                </S.WrapHeaderNavigation>
                
                <S.Navigation to={path} onClick={handleLogout}>
                    <S.IconNav> {icon} </S.IconNav>
                    <S.LabelNav>
                        <TextC.Label level={3} > {title} </TextC.Label>
                    </S.LabelNav>
                </S.Navigation>
                
            </S.WrapNavigation>
        )
    }

    return (
        <S.Container>
            <S.Header>
                <S.WrapText>
                    <TextC.Label level={4}>
                        Menu
                    </TextC.Label>
                </S.WrapText>
                <S.WrapIcon>
                    <ButtonsC.ButtonCircle onClick={handleShowMenu}  >
                        <Theme.Icons.MdClose />
                    </ButtonsC.ButtonCircle>
                </S.WrapIcon>
            </S.Header>
            <S.Main>
                {
                    MenuItem ? 
                    MenuItem.map(({title, path, icon, subNav}, i) => (
                        
                        title != "Sair" ? 
                            WrapMenuItem({title, path, icon, subNav}, i) : 
                            WrapMenuItemClose({title, path, icon}, i)
                    ))  

                    : null
                }
            </S.Main>
        </S.Container>
    )
}

export default MenuMobile