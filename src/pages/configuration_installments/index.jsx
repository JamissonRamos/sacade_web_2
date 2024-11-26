import * as S from './styled';
import {WrapPages} from '../../components/Wrappe/pages'
import Header from './header';
import Body from './body';

const ConfigurationInstallments = () => {
    return (
        <WrapPages>
            <S.Content>
                <Header />
                <Body />
            </S.Content>
        </WrapPages>
    )
}

export default ConfigurationInstallments