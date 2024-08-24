//Css
import * as S from './styled';
//Hook
import { Theme } from '../../../../theme';

const ArrowShowSidebar = ({showSidebar, toggleSidebar}) => {
    return (
            <S.WrapArrow $showSidebar={showSidebar}>
                {
                    showSidebar ? 
                        <Theme.Icons.MdOutlineArrowForwardIos onClick={toggleSidebar}  /> 
                    :
                        <Theme.Icons.MdOutlineArrowBackIos  onClick={toggleSidebar} /> 
                }

            </S.WrapArrow>
    )
}

export default ArrowShowSidebar