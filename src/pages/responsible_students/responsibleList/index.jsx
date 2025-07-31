//Styled
import * as S from './styled'
import { TextC } from '../../../components/Typography'
import { WrapPages } from '../../../components/Wrappe/pages'
import { useEffect, useState } from 'react'
import { useResponsibleStudents } from '../../../hooks/responsibleStudents'
import { Spinner } from 'react-bootstrap'
import { LoadingOverlay } from '../../../components/spinner/global/styled'
import { useLocation } from 'react-router-dom'
import Header from './header'
import ListResponsible from './listResponsible'

const ResponsibleList = () => {
    const [registered, setRegistered] = useState(false);
    
    const location = useLocation();  // Captura o UID da URL
    const { uid } = location.state || false;  // Captura o UID do estado de navegação

    const dataStudentLocalStorage = JSON.parse(localStorage.getItem('student')) || [];
    const {firstName, lastName} = dataStudentLocalStorage[0] || "";
    const fillNameStudent = firstName + " " + lastName

    const { getDocumentsByIdStudents, loading: loadingResponsible } = useResponsibleStudents.useGetDocumentsByIdStudents()
    
    const fetchDocuments = async () => {
        const result = await getDocumentsByIdStudents(uid);
        const { success, data} = result;
        
        if(success)
        {            
            setRegistered(data)
        }
    }
    
    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <WrapPages>
            <Header fullFirstName={fillNameStudent}  />
            
            <S.BodyPage>
                {
                    loadingResponsible &&
                        <LoadingOverlay>
                            <Spinner
                                as="span"
                                animation="border"
                                role="status"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Carregando os dados...</span>
                        </LoadingOverlay> 
                }

                {
                    !registered 
                    ? 
                        <S.Empty>
                            <TextC.Display level={2} >
                                Nenhum cadastro
                            </TextC.Display>
                            <TextC.Body level={2}>
                                Não encontramos nenhum cadastro em nossa base de dados.
                            </TextC.Body>
                        </S.Empty> 
                    :   
                        <S.ContentListResponsible>
                        {
                            <ListResponsible data={registered}/>
                        }
                        </S.ContentListResponsible>
                }

            </S.BodyPage>
        </WrapPages>
    ) 
}

export default ResponsibleList