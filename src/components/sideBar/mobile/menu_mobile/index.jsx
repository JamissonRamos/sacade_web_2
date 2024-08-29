import * as S from './styled'
import { TextC } from '../../../Typography'
import { ButtonsC } from '../../../buttons'
import { Theme } from '../../../../theme'
import { MenuItem } from '../../../../constants/menuItem/index'

const MenuMobile = ({handleShowMenu}) => {
    
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

                        WrapMenuItem({title, path, icon, subNav}, i)
                    ))

                    : null
                }
            </S.Main>
        </S.Container>
    )
    }

export default MenuMobile