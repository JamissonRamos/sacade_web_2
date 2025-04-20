import { useEffect, useState } from 'react';
import { WrapPages } from '../../components/Wrappe/pages'
import { useNavigate } from 'react-router-dom';
import { useStudents } from "../../hooks/students";
import { AddAttributeList } from './scripts';
import { LoadingOverlay } from '../../components/spinner/global/styled';
import { Spinner } from 'react-bootstrap';
import * as S from './styled';
import ListPrimary from '../../components/lists_custom/students/list_primary';

const Payments = () => {
  const [registered, setRegistered] = useState(null);
  const navigate = useNavigate();

  const { getDocuments, loading} = useStudents.useGetDocuments();

  useEffect(() => {
      const fetch = async () => {
        const result = await getDocuments();
        const { success, data, error} = result;
        
        if(success) {
          // Adiciona o atributo isMinor a cada objeto no array data
          const newListStudent = await AddAttributeList(data);

          setRegistered(newListStudent)
          return;
        }else{
          console.log('Error ao Busca Student:', error);
        } 
      }
      fetch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleNavegation = (uid) =>{
//         //Recuperar nome compleo to aluno
//         const foundStudent = registered.find((item) => item.uid === uid);
//         const {firstName, lastName } = foundStudent;

//         navigate('/plotHistory', { state: { uid: uid, fullName: `${firstName} ${lastName} `} });
  }
  
  return (
    <WrapPages>
      {/* <Header /> */}
    {
      loading &&
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
    <S.WrapList>
        <ListPrimary data={registered} navigateOnClick={handleNavegation} />
    </S.WrapList>
</WrapPages>
  )
}

export default Payments