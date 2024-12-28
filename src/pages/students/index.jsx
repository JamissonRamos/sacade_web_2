import { Alert, Spinner } from 'react-bootstrap'
import { LoadingOverlay } from '../../components/spinner/global/styled'
import { WrapPages } from '../../components/Wrappe/pages'
import { useStudents } from '../../hooks/students'
import Header from './components/header'
import { useEffect, useState } from 'react'
import * as S from './styled'
import { TextC } from '../../components/Typography'
import List from './list'
import CardList from './cardList'
import { useScreenWidth } from '../../hooks/screenWidth';
import { useAuth } from '../../contexts/authContext/AuthContex';

const Students = () => {
  const [registered, setRegistered] = useState(null);
  
  const { currentUser } = useAuth();

  const isValueScreen = useScreenWidth(590);

  // Recuperar uidStudentPermanently do localStorage
  const storedUids = JSON.parse(localStorage.getItem("uidStudentPermanently")) || [];
  
  const { getDocuments, loading: loadingAll , error: errorAll} = useStudents.useGetDocuments()
  
  const fetchDocuments = async () => {
    const result = await getDocuments();
    const { success, data, error} = result;

    if(success)
      {
        /*
          -1 verificar se tem user logado;
          -2 caso tenha mostrar todos os alunos;
          -3 caso não mostrar alunos cadastro e armazenado no local storage;
        */
        if (currentUser === null){
          // Filtra os dados
          const filtered = data && data.filter(obj => storedUids.includes(obj.uid));
          setRegistered(filtered);       
        }else{
          setRegistered(data);      
        }
    }else{
      console.log(error);
    };

  }

  useEffect(() => {
    fetchDocuments();  // Chama a função ao renderizar o componente
  }, []);

  return (
    <WrapPages>
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
            <CardList data={registered}/> 
          </S.Content>
      }
    </WrapPages>
  )
}

export default Students