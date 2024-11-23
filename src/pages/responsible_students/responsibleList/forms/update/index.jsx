import * as S from './styled'
import { WrapPages } from "../../../../../components/Wrappe/pages"
import { useLocation } from 'react-router-dom';
import HeaderForm from './header'
// import BodyForm from './components/body'

import { useResponsibleStudents } from '../../../../../hooks/responsibleStudents' 
import { useEffect, useState } from 'react';
import FormUpdate from './form';
import { Spinner } from 'react-bootstrap';


const FormUpdateResponsible = () => {
    const [registered, setRegistered] = useState([]);
    const location = useLocation();  // Captura o UID da URL
    const { uid } = location.state || {};  // Captura o UID do estado de navegação

    const {documentsID, loading } = useResponsibleStudents.useGetDocumentsID()

    const fetchDocuments = async () => {
        const result = await documentsID(uid);
        const { success, data, message} = result;
        
        if(success)
        {
            data.uid = uid;
            setRegistered(data)

        }else{
            console.log("Error: ", message);
        }
    }
    
    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <WrapPages>
            <S.Container>
                <HeaderForm /> 
                {
                    loading ?

                        <Spinner
                            variant='warning'
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                    :
                        <FormUpdate registered={registered}/> 
                }
            </S.Container>
        </WrapPages>
    )
}

export default FormUpdateResponsible