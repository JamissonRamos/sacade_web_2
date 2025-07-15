import * as S from './styled'

import { MenuItem } from '../../../../constants/menuItem'
import Menu from '../../menu'

const Body = ({showSidebar}) => {

    return (
        <S.Container>
            {
                MenuItem &&
                MenuItem
                    .filter(item => item.title !== "Sair") //Retirar o obj sair
                    .map((item, i) => (
                        <Menu
                            key={i}
                            item={item}
                            showSidebar={showSidebar}
                        />
                    ))
            }
        </S.Container>
    )
}

export default Body