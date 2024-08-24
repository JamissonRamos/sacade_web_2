
import * as S from './styled';
import { useScreenWidth } from '../../hooks/screenWidth';
import Desktop from './desktop';
import Mobile from './mobile';
import { useState } from 'react';


const Sidebar = () => {
    const isValueScreen = useScreenWidth(425);
    const [showSidebar, setShowSidebar] = useState(true);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    return (
        <S.Container $isValueScreen={isValueScreen} $showSidebar={showSidebar}>
            {!isValueScreen ? 
                <Desktop showSidebar={showSidebar} toggleSidebar={toggleSidebar}/> : <Mobile />}
        </S.Container>
    )
}

export default Sidebar