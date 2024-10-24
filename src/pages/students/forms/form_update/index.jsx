import * as S from './styled';


import HeaderForm  from './components/header'
import BodyForm from './components/body'
import { WrapPages } from '../../../../components/Wrappe/pages'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStudents } from '../../../../hooks/students'
import { Spinner } from 'react-bootstrap';

const FormUpdateStudents = () => {
    const [registered, setRegistered] = useState(null);

    const { documentsID, error, isLoading } = useStudents.useGetDocumentsID();

    const location = useLocation();  // Captura o UID da URL
    const { uid } = location.state || {};  // Captura o UID do estado de navegação
    /* 
        - Recuperar o dados do aluno;
        - Recuperar os dados do responsavel do aluno;
    */
    useEffect(() => {
        handleFetchDocument()
    }, []);

    const handleFetchDocument = async () => {
        const result = await documentsID(uid);  
        const {success, data, message} = result;
        if(success){
            setRegistered(data)
            //await Script.fetchDocumentID(data, setValue); // por enquanto passei as funções de handleChange e convertDate mais a ideia é retirar 
        }else{
            console.log("Não recuperou o ID: ", message);
            //setMsgBox({variant: 'danger', message: message});
        }
    };

    
    return (
        <WrapPages>
            <S.Container> 
                <HeaderForm />
                {
                    isLoading ? 
                        <>
                            <Spinner
                                variant="warning"
                                as="span"
                                animation="border"
                                role="status"
                                aria-hidden="true"
                            />
                            <span>Carregando os dados...</span>
                        </>
                    :
                        <BodyForm data={registered}/>

                }
                
            </S.Container>
        </WrapPages>
    )
}

export default FormUpdateStudents