/* eslint-disable react-hooks/exhaustive-deps */
import * as S                   from './styled'
import CardList                 from './cardList'
import Header                   from './components/header'
import { TextC }                from '../../components/Typography'
import { WrapPages }            from '../../components/Wrappe/pages'
import { Alert, Spinner }       from 'react-bootstrap'
import { LoadingOverlay }       from '../../components/spinner/global/styled'
import { useStudents }          from '../../hooks/students'
import { useEffect, useState }  from 'react'
import { useAuth }              from '../../contexts/authContext/AuthContex';

const Students = () => {
  const [registered, setRegistered] = useState(null);
  const { currentUser } = useAuth();

  // Recuperar uidStudentPermanently do localStorage
  const storedUids = JSON.parse(localStorage.getItem("uidStudentPermanently")) || [];
  
  const { getDocuments, loading: loadingAll , error: errorAll} = useStudents.useGetDocuments()
  
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
    const { success, data, error} = result;

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
        /*
          -1 verificar se tem user logado;
          -2 caso tenha mostrar todos os alunos;
          -3 caso não mostrar alunos cadastro e armazenado no local storage;
        */
        if (currentUser === null || currentUser.statusActive === false){
          // Filtra os dados
          const filtered = newData && newData.filter(obj => storedUids.includes(obj.uid));
          setRegistered(filtered);   
          // Limpa o array de dados students
          newData && newData.splice(0, newData.length);
          data && data.splice(0, data.length);
        }else{
          setRegistered(newData);      
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