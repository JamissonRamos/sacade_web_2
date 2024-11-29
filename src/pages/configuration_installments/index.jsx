import * as S from './styled';
import {WrapPages} from '../../components/Wrappe/pages'
import Header from './header';
import Form from './form';
import { useConfigurationInstallments } from '../../hooks/configuration_installments';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { LoadingOverlay } from '../../components/spinner/global/styled';
import { useNavigate } from 'react-router-dom';

const ConfigurationInstallments = () => {

    const [registered, setRegistered] = useState(null);

    const navigate = useNavigate();

    const {getDocuments, loading} = useConfigurationInstallments.useGetDocuments();

    const fetchDocuments = async () => {
        const result = await getDocuments();
        const { success, data, message } = result;
        if(success){
            setRegistered(data);
        }else{
            console.log('error: ', message);
            navigate('/notifications/error');
        }
    };
    
    useEffect(() => {
      fetchDocuments();  // Chama a função ao renderizar o componente
    }, []);


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
                    </> :
                    <Form registered={registered}/>
                }
            </S.Content>
        </WrapPages>
    )
}

export default ConfigurationInstallments