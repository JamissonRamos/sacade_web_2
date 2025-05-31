/* eslint-disable react-hooks/exhaustive-deps */
import * as S from './styled';
import Header from './header';
import Form from './form';
import {WrapPages} from '../../components/Wrappe/pages'

const ConfigurationInstallments = () => {

    return (
        <WrapPages>
            <S.Content>
                <Header />
                {
                    <Form />
                }
            </S.Content>
        </WrapPages>
    )
}

export default ConfigurationInstallments