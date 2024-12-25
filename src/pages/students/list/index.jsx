import * as S from './styled';
import { TextC } from '../../../components/Typography'
import { Badge, Button} from 'react-bootstrap';
import { Theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext/AuthContex';
import { useEffect, useState } from 'react';


const List = ({data}) => { 
  const [filteredData, setFilteredData] = useState([]);
  //Recuperando o user logado para verificar 
  const { currentUser } = useAuth()

    console.log('currentUser', currentUser);

    console.log('data', data);
    
  const navigate = useNavigate();

  // const recoverUidStudentsLocalStoragePermanently = () => {
  //   // Recuperar uidStudentPermanently do localStorage
  //   const uidStudentPermanently = JSON.parse(localStorage.getItem("uidStudentPermanently")) || [];

  //   console.log('uidStudentPermanently', uidStudentPermanently);

  //   const filteredData = data && data.filter(obj => uidStudentPermanently.includes(obj.uid));

  //   console.log('filteredData', filteredData);



  // }

  useEffect(() => {
    // Recuperar uidStudentPermanently do localStorage
    const storedUids  = JSON.parse(localStorage.getItem("uidStudentPermanently")) || [];

    console.log('storedUids', storedUids);
    
    // Filtra os dados
    const filtered = data && data.filter(obj => storedUids.includes(obj.uid));

    // Atualiza o estado com os dados filtrados
    setFilteredData(filtered);

    // recoverUidStudentsLocalStoragePermanently();
  }, [data]);



  const handleBadge = (status) => 
    {
      let bg
      switch (status) {
        case 'inativo':
          bg = "warning"
          break;
        case 'bloqueado':
          bg = "danger"
          break;
        case 'ativo':
          bg = "success"
          break;
  
        default:
          bg = "primary"
          break;
      }
  
      return bg 
  }

  // Exclui os dados do localStorage
  const handleDeleteLocalStorage = () => {
    localStorage.removeItem('studentResponsible');
  }

  const handleShowFormUpdate = (uid) => { 
    handleDeleteLocalStorage();
    navigate('/students/form_update', { state: { uid: uid } });
  };

  return (
      <S.Content>
        <S.TableHeader>
          <S.TableRow>
            <S.TableHeaderCell $flex={.1}>
              <TextC.Label level={1}>#</TextC.Label>
            </S.TableHeaderCell>
            <S.TableHeaderCell $flex={2}>
              <TextC.Label level={1}>Nome</TextC.Label>
            </S.TableHeaderCell>
            <S.TableHeaderCell>
              <TextC.Label level={1}>Status</TextC.Label>
            </S.TableHeaderCell>
            <S.TableHeaderCell $flex={.5}>
              <TextC.Label level={1}></TextC.Label>
            </S.TableHeaderCell>
          </S.TableRow>
        </S.TableHeader>
        <S.TableBody>
          {
            filteredData && filteredData.map(({uid, firstName, lastName, status }, i) => (
              <S.TableRow key={i}>
                <S.TableBodyCell $flex={.1}>
                  <TextC.Body level={1}>{1 + i}</TextC.Body>
                </S.TableBodyCell>
                <S.TableBodyCell $flex={2}>
                  <S.CircleLetterName>
                      {firstName && firstName.charAt(0)}
                  </S.CircleLetterName>
                  <TextC.Body level={1} className='fullName'>
                    {firstName + " " + lastName}
                  </TextC.Body>
                </S.TableBodyCell>
                <S.TableBodyCell className='status'>
                    <Badge bg={handleBadge(status)} text="light">
                      {status}
                    </Badge>
                </S.TableBodyCell>

                <S.TableBodyCell $flex={.4}>

                  <S.WrapListButtons>
                  
                    <Button
                      variant="outline-success"
                      /* - Busca o uid da base pegar quando tras os dados do banco não esta trazendo ainda */
                      onClick={() => handleShowFormUpdate(uid)}
                    >
                      <Theme.Icons.MdModeEdit />
                    </Button>
                  </S.WrapListButtons>

                </S.TableBodyCell>

              </S.TableRow>
            ))
          }

        </S.TableBody>  
      </S.Content>
  );

}

export default List