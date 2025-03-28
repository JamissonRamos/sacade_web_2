import * as S from './styled';

import { WrapPages } from "../../components/Wrappe/pages";
import Header from './header';
import { LoadingOverlay } from '../../components/spinner/global/styled';
import { Button, Form, Spinner } from 'react-bootstrap';
import { TextC } from '../../components/Typography';
import List from './list';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStudents } from '../../hooks/students';

const GenerateInstallments = () => {
    const [registered, setRegistered] = useState(null);
    const [storesUid, setStoreUid] = useState([])
    const [selectAll, setSelectAll] = useState(false) //CheckBox All Students

    const navigate = useNavigate();

    const { getDocuments, loading} = useStudents.useGetDocuments()
    
    const postCreateLocalStorage = (data) => {
        // Armazenando o array no Local Storage
        localStorage.setItem("uisStudents", JSON.stringify(data));
    }
    //clearLocalStored
    const clearLocalStored = () => {
        // Exclui os dados do localStorage
        localStorage.removeItem('uisStudents');
        localStorage.removeItem("generatedInstallments");
    }

    const fetchDocuments = async () => {
        clearLocalStored()
        const result = await getDocuments();
        const { success, data, error} = result;
        if(success){
            //Passando para list gerar alunos somente ativos e bloqueado
            const newData = data
                            .filter(obj => obj.status === 'ativo' || obj.status === 'bloqueado')
                            .sort((a, b) => a.firstName?.localeCompare(b.firstName));
            
            setRegistered( newData )

        }else{
            console.log('Error:', error);
        };
    }
    
    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    const handleSelectAllChange = () => {
        /* Função para manipular o status do checkBox all */
        const newCheckedStatus = !selectAll;
        setSelectAll(newCheckedStatus);
        
        const newCheckedItems = {};
        registered.forEach(item => {
            newCheckedItems[item.uid] = newCheckedStatus;
        });
        
        setStoreUid(newCheckedStatus ? registered.map(item => item.uid) : []);
    };

    const handleClick =  (data) => {
        postCreateLocalStorage(data);
        navigate('/configurationInstallments');
    }


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
                            <Form.Check 
                                className="px-1"
                                label={'Todos Alunos'}
                                type={'checkbox'}
                                id={'checkAll'}
                                checked={selectAll}
                                onChange={handleSelectAllChange} // Atualiza o estado ao mudar
                            />
                            <List data={registered} setStoreUid={setStoreUid} selectAll={selectAll}/>    
                        </S.SectionList> 

                }

                <S.WrapButtons>

                    <Button
                        variant='success'
                        disabled={storesUid.length <= 0 ? true : false}
                        onClick={() => handleClick(storesUid)}
                    >
                        <span>
                            {
                                storesUid.length <= 0 ? 'Selecione Aluno(s)' : 
                                `Gerar ${storesUid.length} Parcela(s)`
                            }                            
                        </span>

                    </Button>
                </S.WrapButtons>
                
            </S.Content>
        </WrapPages>
    )
}

export default GenerateInstallments