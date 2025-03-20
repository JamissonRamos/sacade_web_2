import { useState } from "react";
import  {MenuItem}  from "../../../constants/menuItem/index";
import { Theme } from "../../../theme";
import { TextC } from "../../Typography";

import * as S from './styled'
import MenuMobile from "./menu_mobile";

const Mobile = () => {
  const [sideBarMenu, setSideBarMenu] = useState(false);
  
  const filterSubItem = (mainTitle, subTitle = null) => {
    const mainItem = MenuItem.find(item => item.title === mainTitle);

    if (!mainItem) return null;

    if (!subTitle) return mainItem; // Se subTitle não for fornecido, retorna o item principal

    const mainSubTitle = mainItem.subNav ? mainItem.subNav.find(subItem => subItem.title === subTitle) : null;
    
    return mainSubTitle || null;
};

const itemHome = filterSubItem('Home');
const itemStudents = filterSubItem('Cadastros', 'Alunos');
const itemUsers = filterSubItem('Configurações', 'Usuário');
const itemPayments = filterSubItem('Pagamentos');

const handleShowMenu = () => { setSideBarMenu(!sideBarMenu);}

  return (
    <>
      <S.Container> 

          <S.WrapMenu>
            <S.WrapNavigation to={itemHome.path} >
              <S.IconNav> {itemHome.icon } </S.IconNav>
              <S.LabelNav>
                  <TextC.Label level={2} > {itemHome.title} </TextC.Label>
              </S.LabelNav>
            </S.WrapNavigation>

            <S.WrapNavigation to={itemUsers.path}>
              <S.IconNav> {itemUsers.icon } </S.IconNav>
                <S.LabelNav>
                  <TextC.Label level={2} > {itemUsers.title} </TextC.Label>
              </S.LabelNav>
            </S.WrapNavigation>
          </S.WrapMenu>

          <S.WrapMenu>
            <S.WrapNavigationCircule to={itemPayments.path}>
              <S.IconNavCircule> {itemPayments.icon } </S.IconNavCircule>
            </S.WrapNavigationCircule>

          </S.WrapMenu>

          <S.WrapMenu>
            <S.WrapNavigation to={itemStudents.path}>
              <S.IconNav> {itemStudents.icon } </S.IconNav>
              <S.LabelNav>
                  <TextC.Label level={2} > {itemStudents.title} </TextC.Label>
              </S.LabelNav>
            </S.WrapNavigation>
            <S.WrapNavigation  onClick={handleShowMenu} >
              <S.IconNav> {< Theme.Icons.MdMenu /> } </S.IconNav>
              <S.LabelNav>
                  <TextC.Label level={2} > Menu </TextC.Label>
              </S.LabelNav>
            </S.WrapNavigation>
          </S.WrapMenu>

          {
            sideBarMenu &&
            sideBarMenu ?  <MenuMobile handleShowMenu={handleShowMenu} /> : null
          }

        </S.Container>
    </>
  )
}

export default Mobile