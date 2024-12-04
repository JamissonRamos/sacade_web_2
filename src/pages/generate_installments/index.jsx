import * as S from './styled';

import { WrapPages } from "../../components/Wrappe/pages";
import Header from './header';
import { LoadingOverlay } from '../../components/spinner/global/styled';
import { Button, Spinner } from 'react-bootstrap';
import { TextC } from '../../components/Typography';
import { useEffect, useState } from 'react';
import { useStudents } from '../../hooks/students';
import List from './list';

const GenerateInstallments = () => {
    const [registered, setRegistered] = useState(null);
    const [storesUid, setStoreUid] = useState([])
    const { getDocuments, loading} = useStudents.useGetDocuments()
    
    const fetchDocuments = async () => {
        const result = await getDocuments();
        const { success, data, error} = result;
        if(success){
            //Passando para list gerar parcelas soemnte ativos e bloqueado
            const newData = data.filter(obj => obj.status === 'ativo' || obj.status === 'bloqueado');
            setRegistered( newData )

        }else{
            console.log('Error:', error);
        };
    }
    
    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
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

                {
                    registered && registered.length == 0
                    ?   <S.Empty>
                            <TextC.Display level={2} >
                            Nenhum cadastro
                            </TextC.Display>
                            <TextC.Body level={2}>
                                Não encontramos nenhum cadastro em nossa base de dados.
                            </TextC.Body>
                        </S.Empty>

                    :   <S.SectionList > 
                            <List data={registered} setStoreUid={setStoreUid}/>    
                        </S.SectionList> 

                }

                <S.WrapButtons>
                    <Button
                        variant='success'
                        disabled={storesUid.length <= 0 ? true : false}
                    >
                        <span>
                            gerar parcelas {storesUid.length <= 0 
                            ? null : storesUid.length} 
                            
                        </span>

                    </Button>
                </S.WrapButtons>
                

            </S.Content>
        </WrapPages>
    )
}

export default GenerateInstallments