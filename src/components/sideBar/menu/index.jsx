import React, { useState } from 'react'
import * as S from './styled';
import { TextC } from "../../../components/Typography/index"

const Menu = ({item, showSidebar, handleShowModal}) => {
    const [subMenu, setSubMenu] = useState(false);
    const showSubMenu = () => {setSubMenu(!subMenu); };
    const handleClick = () => { showSubMenu();  };

    console.log(showSidebar)
    const { title, path, icon, subNav, iconOpened, iconClosed } = item;



    const handleOnclick = () =>{

        if(subNav){
            setSubMenu(!subMenu);
        }
        // Chama o handleShowModal se for o botão "Sair"
        if (item.title === 'Sair') {
            handleShowModal();
        }
    }
    return (
        <S.Container>
            <S.Navigator to={path} onClick={handleOnclick}>
                <S.WrapItens>
                    <S.IconNav> {icon } </S.IconNav>
                    <S.LabelNav $showSidebar={showSidebar}>
                        <TextC.Label level={3} > {title} </TextC.Label>
                    </S.LabelNav>
                </S.WrapItens>
                <S.WrapArrowShowSubMenu>
                {
                    subNav && subMenu 
                    ? iconOpened 
                    : subNav
                    ? iconClosed
                    : null
            }
                </S.WrapArrowShowSubMenu>
            </S.Navigator>

            <S.SubMenu>
                {
                    subMenu && 
                    subNav.map((item, i) => {
                        return (
                            <S.DropdownLink key={i} to={item.path} onClick={handleClick}>
                                <S.IconNav> {item.icon } </S.IconNav>
                                <S.LabelNav $showSidebar={showSidebar}>
                                    <TextC.Label level={3} > {item.title} </TextC.Label>
                                </S.LabelNav>
                            </S.DropdownLink>
                        )
                    })
                }
            </S.SubMenu>

        </S.Container>
    )
}

export default Menu