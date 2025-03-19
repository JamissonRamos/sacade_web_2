import { Theme } from '../../../../theme';
import { TextC } from '../../../../components/Typography'
import * as S from './styled';

const Header = () => {
    return (
        <S.Container>
            <S.WrapTitleIcone>
                <Theme.Icons.MdHelp />
                <TextC.Display level={2}> Central de Ajuda </TextC.Display>
            </S.WrapTitleIcone>

            <S.WrapSubTitle>
                <TextC.Headline level={3}> Como podemos ajudar? </TextC.Headline>
            </S.WrapSubTitle>

            <S.WrapSearchBar>
                <Theme.Icons.FaMagnifyingGlass />
                <input 
                    type="text" 
                    placeholder='Pesquise artigo de Ajuda...'
                />
            </S.WrapSearchBar>

        </S.Container>
    )
}

export default Header