import * as S from './styled';

import { WrapPages } from "../../components/Wrappe/pages";
import Header from './header';
import { LoadingOverlay } from '../../components/spinner/global/styled';
import { Spinner } from 'react-bootstrap';
import { TextC } from '../../components/Typography';
import { useEffect, useState } from 'react';
import { useStudents } from '../../hooks/students';

const GenerateInstallments = () => {
    const [registered, setRegistered] = useState(null);
    const { getDocuments, loading} = useStudents.useGetDocuments()
    
    const fetchDocuments = async () => {
        const result = await getDocuments();
        const { success, data, error} = result;
        if(success){
            setRegistered( data )
        }else{
            console.log('Error:', error);
        };
    }
    
    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log('registered:', registered);
    
    return (
        <WrapPages>
            <S.Content>
                <Header />
                {
                    loading 
                    ?   <>
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
                        </> 
                    :   null 
                }


                {/* Colocar msg sem cadastro ou a lista */}

                <S.Empty>
                    <TextC.Display level={2} >
                    Nenhum cadastro
                    </TextC.Display>
                    <TextC.Body level={2}>
                        Não encontramos nenhum cadastro em nossa base de dados.
                    </TextC.Body>
                </S.Empty>


            </S.Content>
        </WrapPages>
    )
}

export default GenerateInstallments