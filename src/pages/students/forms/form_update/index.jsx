import * as S from './styled';


import HeaderForm  from './components/header'
import BodyForm from './components/body'
import { WrapPages } from '../../../../components/Wrappe/pages'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStudents } from '../../../../hooks/students'
import { useResponsibleStudents } from '../../../../hooks/responsibleStudents'
import { Alert, Spinner } from 'react-bootstrap';

const FormUpdateStudents = () => {
    const [registered, setRegistered] = useState(null);
    const [msgBox, setMsgBox] = useState(null);

    const { documentsID, isLoading } = useStudents.useGetDocumentsID();
    const { getDocumentsByIdStudents, loading: loadingResponsibleStudent } = useResponsibleStudents.useGetDocumentsByIdStudents();


    const location = useLocation();  // Captura o UID da URL
    const { uid } = location.state || {};  // Captura o UID do estado de navegação

    useEffect(() => {
        handleFetchDocument()
    }, []);

    const handleFetchDocument = async () => {
        const result = await documentsID(uid);  
        const resultResponsibleStudent = await getDocumentsByIdStudents(uid);  
        
        const {success, data, message} = result;
        const {success: successRS, data: dataRS, message: messageRS} = resultResponsibleStudent;
        console.log('dataRS: ', dataRS);
        if(success){
            setRegistered(data)
            if(successRS){
                /* 
                    - A criação da coleção no local storage teve que ser feita assim, passando a função esta dando adição dupla
                */
                // Salva o array atualizado de volta no localStorage
                localStorage.setItem('studentResponsible', JSON.stringify(dataRS));
            }else if(messageRS){
                setMsgBox({variant: 'success', message: messageRS});
            }
        }else {
            console.log("Não recuperou o ID: ", message);
            setMsgBox({variant: 'danger', message: message});
        }
    };

    return (
        <WrapPages>
            {
                msgBox && <Alert variant={msgBox.variant} > {msgBox.message} </Alert>
            }
            
            <S.Container> 
                <HeaderForm />
                {
                    isLoading || loadingResponsibleStudent ? 
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
                        <BodyForm uid={uid} data={registered}  /> 
                }
                
            </S.Container>
        </WrapPages>
    )
}

export default FormUpdateStudents