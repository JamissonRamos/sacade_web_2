import * as S from './styled';

import { WrapPages } from "../../components/Wrappe/pages";
import Header from './header';
import { LoadingOverlay } from '../../components/spinner/global/styled';
import { Spinner } from 'react-bootstrap';

const GenerateInstallments = () => {
    const loading = false;
    return (
        <WrapPages>
            <S.Content>
                <Header />
                {
                    loading ?
                    <>
                        <LoadingOverlay>
                                <Spinner
                                    variant='warning'
                                    as="span"
                                    animation="border"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="sr-only">Carregando os dados...</span>
                            </LoadingOverlay> 
                    </> : null
                    // <Form registered={registered}/>
                }
            </S.Content>
        </WrapPages>
    )
}

export default GenerateInstallments