import { Alert, Spinner } from 'react-bootstrap'
import { LoadingOverlay } from '../../components/spinner/global/styled'
import { WrapPages } from '../../components/Wrappe/pages'
import { useStudents } from '../../hooks/students'
import Header from './components/header'
import { useEffect, useState } from 'react'
import * as S from './styled'
import { TextC } from '../../components/Typography'
import List from './list'

const Students = () => {
  const [registered, setRegistered] = useState(null);
  const { getDocuments, loading: loadingAll , error: errorAll} = useStudents.useGetDocuments()
  
  const fetchDocuments = async () => {
    const result = await getDocuments();
    const { success, data, error} = result;
    if(success)
    {
      setRegistered( data )
      
    }else{
      console.log(error);
      
    };

  }

  useEffect(() => {
    console.log('Carregando Lista de ALunos');
    
    fetchDocuments();  // Chama a função ao renderizar o componente
  }, []);

  return (
    <WrapPages>
      <S.Container>
        {
          errorAll && <Alert variant={'danger'}> {errorAll} </Alert>
        }
        <Header />
        {
          loadingAll &&
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
          ? <S.Empty>
              <TextC.Display level={2} >
                Nenhum cadastro
              </TextC.Display>
              <TextC.Body level={2}>
                  Não encontramos nenhum cadastro em nossa base de dados.
              </TextC.Body>
            </S.Empty> 
          :   
            <S.Content>
              {/* 
                - passar variavel que vai indicar se é card ou list;
                - passar o card quando for menor a page;
              */}
                <List data={registered}/>
            </S.Content>
        }
      
      </S.Container>
    </WrapPages>
  )
}

export default Students