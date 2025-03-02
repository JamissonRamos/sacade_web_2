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
  const [refresh, setRefresh] = useState(true);

  const location = useLocation();  // Captura o UID da URL
  const { idStudent, fullname } = location.state || {};  // Captura o UID do estado de navegação

  //Recuperando as Fichas do aluno;
  const {getDocumentsById, loading: loadingRegisterStudent} = useRegisterStudents.useGetDocumentsByIdRegisterStudent();
  //Atualizar a ficha com a maior faixa
  const {updateData, loading: loadingUpdate } = useRegisterStudents.usePostDocumentsUpdate()

  const tracksHierarchy = {
    //Dicionários das faixas, todas as fixas na sua hierarquia
    //Faixas para Adultos
    "branca": 1,
    "cinza_branca": 2,
    "cinza": 3,
    "cinza_preta": 4,
    "amarela_branca": 5,
    "amarela": 6,
    "amarela_preta": 7,
    "laranja_branca": 8,
    "laranja": 9,
    "laranja_preta": 10,
    "verde_branca": 11,
    "verde": 12,
    "verde_preta": 13,
    // Faixas para Adultos
    "azul": 14,
    "roxa": 15,
    "marrom": 16,
    "preta": 17,
    "coral": 18,
    "vermelha_preta": 19,
    "vermelha": 20
  }

  //Função para atualizar o campo historico das fichas
  const updateHistoryOne = async (uidActual) => {
    /*  Função para atualizar o campo currentHistory; */

    if (!uidActual) return

    //Obj da ficha atual
    const updateActual = {
        currentHistory: true,
        uid: uidActual
    }

    try {
        // Atualiza o primeiro uid
        const result1 = await updateData(updateActual);
        if (!result1.success) {
            console.log('Erro na atualização da ficha atual2: ', result1.message);
            return { success: false, message: result1.message };
        }
        setRefresh(true); // Reseta para evitar loop
    } catch (error) {
        console.log('Erro durante a atualização: ', error);
        return { success: false, message: error.message };
    }
  }

  //Função para atualizar o campo historico das fichas
  const updateCurrentHistory = async (uidActual, uidNew) => {
    /*  Função para atualizar o campo currentHistory; */
    if(!uidActual) return;
    if(!uidNew) return;

    //Obj da ficha atual
    const updateActual = {
        currentHistory: false,
        uid: uidActual
    }
    //Obj da ficha que vai ser atual
    const updateNew = {
        currentHistory: true,
        uid: uidNew
    }

    try {
        // Atualiza o primeiro uid
        const result1 = await updateData(updateActual);
        if (!result1.success) {
            console.log('Erro na atualização da ficha atual: ', result1.message);
            return { success: false, message: result1.message };
        }

        // Atualiza o segundo uid
        const result2 = await updateData(updateNew);
        if (!result2.success) {
            console.log('Erro na atualização da nova ficha atual: ', result2.message);
            return { success: false, message: result2.message };
        }
        setRefresh(true); // Reseta para evitar loop
    } catch (error) {
        console.log('Erro durante a atualização: ', error);
        return { success: false, message: error.message };
    }
  }

  const UpdateHistoryStudent = async (obj) => {
    /* 
      Função para mapear todas as fichas e recupera a maior faixa e faixa que esta como currentHistory true
    */
    if (!obj) return;

    //Retorna a maior faixa
    const highestRankObj = obj.reduce((max, obj) => {
      const currentRank = tracksHierarchy[obj.range] || 0; // Se não tiver `range`, assume 0
      const maxRank = tracksHierarchy[max.range] || 0;
      return currentRank > maxRank ? obj : max;
    }, { range: '' }); // Inicia com um objeto vazio para evitar erros

    //Filtra a ficha atual cadastrada
    let rangerActual = obj.find(obj => obj.currentHistory === true) || false// Filtra

    if (rangerActual === undefined || rangerActual === false){
      //Quando é a primeira ficha o campo currentHistory é gerado false
      await updateHistoryOne(highestRankObj.uid);
    }

    //comparar os uid dos objs para chamar ou não a função
    if( highestRankObj.uid === rangerActual.uid ) return 
    await updateCurrentHistory(rangerActual.uid, highestRankObj.uid);
  };

  const fetchDocuments = async () => {
    const result = await getDocumentsById(idStudent);
    const { success, data, message} = result;

    if(success)
    {          
      setRegistered(data)
      await UpdateHistoryStudent(data)
        
    }else
    {
        console.log('error:', message);
    }
  }

  useEffect(() => {
    if (refresh) {
      fetchDocuments();
      setRefresh(false); // Reseta para evitar loop
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);
  
            
  return (
    <WrapPages>
      <Header idStudent={idStudent} fullname={fullname}/>
      {
        (loadingRegisterStudent || loadingUpdate)  &&
          (
            <LoadingOverlay>
              <Spinner
                as="span"
                animation="border"
                role="status"
                aria-hidden="true"
              />
              <span className="sr-only">Carregando os dados...</span>
            </LoadingOverlay> 
          )
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
            <CardList data={registered} fullname={fullname} /> 
          </S.Content>
      }

    </WrapPages>
  )
}

export default CardListRegisterStudents