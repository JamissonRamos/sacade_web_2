import * as S from './styled';
import {WrapPages} from '../../components/Wrappe/pages'
import Header from './header';
import Form from './form';

const ConfigurationInstallments = () => {
    return (
        <WrapPages>
            <S.Content>
                <Header />
                <Form />
            </S.Content>
        </WrapPages>
    )
}

export default ConfigurationInstallments