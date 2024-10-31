//Styled
import * as S from './styled'
import { TextC } from '../../components/Typography'
import { WrapPages } from '../../components/Wrappe/pages'
import CardList from './cardList'
import { useEffect, useState } from 'react'
import { useStudents } from '../../hooks/students'
import { Alert, Spinner } from 'react-bootstrap'
import { LoadingOverlay } from '../../components/spinner/global/styled'


const ResponsibleStudents = () => {
    const [registered, setRegistered] = useState(null);

    const { getDocuments, loading: loadingStudents , error: errorStudents} = useStudents.useGetDocuments()

    const fetchDocuments = async () => {
        const result = await getDocuments();
        const { success, data} = result;
        if(success)
        {
            setRegistered( data )
        }
    }
    
    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    }, []);

    return (
        <WrapPages>
            {
                errorStudents && <Alert variant={'danger'}> {errorStudents} </Alert>
            }
            <S.HeaderPage>
                <TextC.Title level={2}> Lista de Alunos</TextC.Title>
                <TextC.Body level={1}> Deve selecionar um aluno já cadastrado para adicionar ou editar responsável </TextC.Body>
            </S.HeaderPage>

            {
                loadingStudents &&
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
                registered && registered.length == 0
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
                    <S.Content>
                    {
                        <CardList data={registered}/>
                    }
                    </S.Content>
            }
        </WrapPages>
    ) 
}

export default ResponsibleStudents