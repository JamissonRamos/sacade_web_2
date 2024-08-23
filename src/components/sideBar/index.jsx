import React from 'react'
import * as S from './styled';
import { useScreenWidth } from '../../hooks/screenWidth';


const Sidebar = () => {
    const isValueScreen = useScreenWidth(425);
    console.log('Valor do screen: ', isValueScreen)
    return (
        <S.Container $isValueScreen={isValueScreen}>
            {!isValueScreen ? 
                'desktop' : 'mobile'}
        </S.Container>
    )
}

export default Sidebar