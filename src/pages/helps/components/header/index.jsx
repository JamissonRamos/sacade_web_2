import { Theme } from '../../../../theme';
import { TextC } from '../../../../components/Typography'
import * as S from './styled';

const Header = ({handleSearch}) => {

    const hanleOnChange = (event) => {
        const inputValue = event.target.value;
        handleSearch(inputValue);
    }

    return (
        <S.Container>
            <S.WrapTitleIcone>
                <Theme.Icons.MdHelp />
                <TextC.Headline level={4}> Central de Ajuda </TextC.Headline>
            </S.WrapTitleIcone>

            <S.WrapSubTitle>
                <TextC.Headline level={3}> Como podemos ajudar? </TextC.Headline>
            </S.WrapSubTitle>

            <S.WrapSearchBar>
                <Theme.Icons.FaMagnifyingGlass />
                <input 
                    type="text" 
                    placeholder='Pesquise artigo de Ajuda...'
                    onChange={(e) => hanleOnChange(e)}
                />
            </S.WrapSearchBar>

        </S.Container>
    )
}

export default Header