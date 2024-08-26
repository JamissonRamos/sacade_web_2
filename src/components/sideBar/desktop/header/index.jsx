import * as S from './styled'
import { Theme } from '../../../../theme'
import { TextC } from '../../../Typography'


const Header = ({showSidebar}) => {
    return (
        <S.Container>
            <S.WrapLogo  >
                <S.ImgLogo src={Theme.ImgC.Logo} />
            </S.WrapLogo>
            <S.WrapNameBrand $showSidebar={showSidebar}>
                <TextC.Display level={1} >SACADE</TextC.Display>
            </S.WrapNameBrand>
        </S.Container>
    )
}

export default Header