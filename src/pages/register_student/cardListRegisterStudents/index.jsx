/* eslint-disable react-hooks/exhaustive-deps */
import * as S                   from './styled'
import { WrapPages }            from '../../../components/Wrappe/pages'
import CardList                 from './cardList'
import Header                   from './header'
import { TextC }                from '../../../components/Typography'
import { LoadingOverlay }       from '../../../components/spinner/global/styled'
import { Spinner }              from 'react-bootstrap'
import { useLocation }          from 'react-router-dom';
import { useRegisterStudents }  from '../../../hooks/registerStudent';
import { useEffect, useState }  from 'react';

const CardListRegisterStudents = () => {
  const [registered, setRegistered] = useState(false);

  const location = useLocation();  // Captura o UID da URL
  const { idStudent, fullname } = location.state || {};  // Captura o UID do estado de navegação

  //Recuperando as Fichas do aluno;
  const {getDocumentsById, loading: loadingRegisterStudent} = useRegisterStudents.useGetDocumentsByIdRegisterStudent();
  
  const fetchDocumentsLocalStorage = () => { 
    /* Função para selecionar obj que esta com o currentHistory true e recuperar alguns dados e passar para local storage */
    const localStorageHistory = registered .filter(obj => obj.currentHistory === true) // Filtra
      .map(obj => ({
        uid: obj.uid,
        range: obj.range,
        dateUpdate: obj.dateUpdate
    })); // Mapeia para selecionar campos específicos

    localStorage.setItem('currentHistory', JSON.stringify(localStorageHistory));
  }

  const fetchDocuments = async () => {
      const result = await getDocumentsById(idStudent);
      const { success, data, message} = result;

      if(success)
      {          
          setRegistered(data)
      }else
      {
          console.log('error:', message);
      }
  }
              
  useEffect(() => {
    
    fetchDocuments(); //Chama a função ao renderizar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
            
  return (
    <WrapPages>
      <Header idStudent={idStudent} fullname={fullname} fetchDocumentsLocalStorage={fetchDocumentsLocalStorage}/>
      {
        loadingRegisterStudent &&
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
        !registered || registered.length == 0
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
            <CardList data={registered} fullname={fullname} fetchDocumentsLocalStorage={fetchDocumentsLocalStorage}/> 
          </S.Content>
      }

    </WrapPages>
  )
}

export default CardListRegisterStudents