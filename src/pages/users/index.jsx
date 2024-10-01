//Styled
import * as S from './styled'
//Hooks
import { useEffect, useState } from 'react';
import { WrapPages } from '../../components/Wrappe/pages'
import { useScreenWidth } from '../../hooks/screenWidth';
import { useUsers } from '../../hooks/users';
import { Alert, Spinner } from 'react-bootstrap';
//Components
import List from './list';
import { TextC } from '../../components/Typography';
import CardList from './cardList';
import { LoadingOverlay } from '../../components/spinner/global/styled';

const Users = () => {
  const [registered, setRegistered] = useState({})
  const isValueScreen = useScreenWidth(590);

  const { documents, isLoading, error } = useUsers.useGetDocuments()


  const fetchDocuments = async () => {
    const result = await documents();
    console.log(result);
    
    if(result.success){
      setRegistered({
        success: result.success,
        data: result.data
      }) // Exibe o resultado no console
    }
  };

  useEffect(() => {
    fetchDocuments();  // Chama a função ao renderizar o componente
  }, []);

  return (
    <WrapPages>
      {
        error && <Alert variant={'danger'}> {error} </Alert>
      }
      <S.HeaderPage>
        <TextC.Title level={2}> Lista de Usuários</TextC.Title>
        <TextC.Body level={1}>  Todos os usuários cadastrados no sistema </TextC.Body>
      </S.HeaderPage>
      {
        isLoading &&
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
        registered.data && registered.data > 0 ?
          <S.Empty>
          <TextC.Display level={2} >
            Nenhum cadastro
          </TextC.Display>
            <TextC.Body level={2}>
                Não encontramos nenhum cadastro em nossa base de dados.
            </TextC.Body>
          </S.Empty> 
        :
          <S.BodyPage>
            { isValueScreen ?  <CardList data={registered.data}  onUserUpdate={fetchDocuments}/> : <List data={registered.data} onUserUpdate={fetchDocuments}/>  }
          </S.BodyPage>
      } 
    </WrapPages>
  )
}

export default Users