import * as S from './styled';
import HeaderForm  from './components/header'
import BodyForm from './components/body'
import { WrapPages } from '../../../../components/Wrappe/pages'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStudents } from '../../../../hooks/students'
import { Alert, Spinner } from 'react-bootstrap';

const FormUpdateStudents = () => {
    const [registered, setRegistered] = useState(null);
    const [msgBox, setMsgBox] = useState(null);

    const location = useLocation();  // Captura o UID da URL
    const { uid } = location.state || {};  // Captura o UID do estado de navegação
    
    const { documentsID, isLoading } = useStudents.useGetDocumentsID();

    useEffect(() => {
        handleFetchDocument()
    }, []);

    const handleFetchDocument = async () => {
        const result = await documentsID(uid);         
        const {success, data, message} = result;
    
        if(success){
            setRegistered(data)
        }else {
            console.log("Não recuperou o ID: ", message);
            setMsgBox({variant: 'danger', message: message});
        }
    };
    console.log('registered', registered);
    
    return (
        <WrapPages>
            {
                msgBox && <Alert variant={msgBox.variant} > {msgBox.message} </Alert>
            }
            
            <S.Container> 
                <HeaderForm uid={uid} data={registered}  />
                {
                    isLoading   
                    ?   <>
                            <Spinner
                                variant="warning"
                                as="span"
                                animation="border"
                                role="status"
                                aria-hidden="true"
                            />
                            <span>Carregando os dados...</span>
                        </>
                        
                    :   <BodyForm uid={uid} data={registered}  /> 
                }
                
            </S.Container>
        </WrapPages>
    )
}

export default FormUpdateStudents