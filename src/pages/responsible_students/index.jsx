//Styled
import * as S from './styled'
import { TextC } from '../../components/Typography'
import { WrapPages } from '../../components/Wrappe/pages'
import CardList from './studentsList'
import { useEffect, useState } from 'react'
import { useStudents } from '../../hooks/students'
import { Alert, Spinner } from 'react-bootstrap'
import { LoadingOverlay } from '../../components/spinner/global/styled'


const ResponsibleStudents = () => {
    const [registered, setRegistered] = useState(false);

    const { getDocuments, loading: loadingStudents , error: errorStudents} = useStudents.useGetDocuments()

    const isUnderage = (birthDate) => {
        if (!birthDate) return false; // Caso a data seja inválida ou não fornecida
        const today = new Date();
        const birth = new Date(birthDate);
    
        const age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        const dayDiff = today.getDate() - birth.getDate();
    
        // Ajuste caso o aniversário ainda não tenha acontecido este ano
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            return age - 1 < 18;
        }
        return age < 18;
    };

    const fetchDocuments = async () => {
        const result = await getDocuments();
        const { success, data} = result;
         /*  adicionar um novo campo ao objeto verificando se é menor ou de maior */
        const newData = data && data.map((item) => {
            const { birthDate } = item;
            const isMinor = isUnderage(birthDate)
            return {
            ...item,
            isMinor,
            }
        })
        if(success)
        {
            setRegistered( newData )
        }
    }
    
    useEffect(() => {
        fetchDocuments();  // Chama a função ao renderizar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <WrapPages>
            {
                errorStudents && <Alert variant={'danger'}> {errorStudents} </Alert>
            }
            <S.HeaderPage>
                <TextC.Title level={2}> Lista de Alunos </TextC.Title>
                <TextC.Body level={2}> Deve selecionar um aluno já cadastrado para adicionar ou editar responsável </TextC.Body>
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