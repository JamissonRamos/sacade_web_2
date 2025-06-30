import * as S from './styled';
import { Theme } from '../../../theme';
import { TextC } from '../../../components/Typography'

const Header = () => {

    return (
        <S.Container>
            <S.WrapTitleIcone>
                <Theme.Icons.TbReportAnalytics />
                <TextC.Headline level={4}> Relatórios </TextC.Headline>
            </S.WrapTitleIcone>

            <S.WrapSubTitle>
                <TextC.Headline level={3}> Todos os relatórios reunidos em um só lugar.  </TextC.Headline>
            </S.WrapSubTitle>

        </S.Container>
    )
}

export default Header