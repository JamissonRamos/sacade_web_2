import { WrapPages } from '../../components/Wrappe/pages'
import ListStudents from './list_students';
import Header from './header';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudents } from "../../hooks/students";
import { AddAttributeList } from './scripts';

const MonthlyFees = () => {
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
          setRegistered(newListStudent);
          return;
        }else{
          console.log('Error ao Busca Student:', error);
        } 
      }
      fetch();

      //Limpar o local storage ao renderizar o component
      localStorage.removeItem('cardParcelData');
      localStorage.removeItem('parcelData');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavegation = (uid) =>{
    //Recuperar nome compleo do aluno
    const foundStudent = registered.find((item) => item.uid === uid);
    const {firstName, lastName } = foundStudent;

    navigate('/plotHistory', { state: { uid: uid, typeForm: 2, fullName: `${firstName} ${lastName} `} });
  }
  
  return (
    <WrapPages>
      <Header />
      <ListStudents 
        registered={registered} 
        loading={loading} 
        handleNavegation={handleNavegation}
      /> 
    </WrapPages>
  )
}

export default MonthlyFees