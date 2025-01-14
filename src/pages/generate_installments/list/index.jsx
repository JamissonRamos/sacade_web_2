import * as S from './styled';
import { TextC } from '../../../components/Typography'
import { Badge, Form} from 'react-bootstrap';
import { useEffect, useState } from 'react';


const List = ({data, setStoreUid, selectAll}) => { 
  const [checkedItems, setCheckedItems] = useState({});
  
  useEffect(() => {
    const newCheckedItems = {};
    data && data.forEach(item => {
      newCheckedItems[item.uid] = selectAll;
    });
    setCheckedItems(newCheckedItems);
    setStoreUid(selectAll ? data.map(item => item.uid) : []);
  }, [selectAll, data, setStoreUid]);


  const handleCheckboxChange = (uid) => {
    /* Manipular o meu checkBox */    
    setCheckedItems((prev) => ({
      ...prev,
      [uid]: !prev[uid],
    }));

    /* Manipular array com os uids */
    setStoreUid((prev) => {
      if (prev.includes(uid)) {
        // Se o uid já estiver no array, remove-o
        return prev.filter((id) => id !== uid);
      } else {
        // Se não estiver, adiciona-o
        return [...prev, uid];
      }
    });
  };

  const handleCardClick = (uid) => {
    handleCheckboxChange(uid);
  };

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

  return (
      <S.Content>
      
        <S.Cards>
          {
            data && data.map(({uid, firstName, lastName, status }, i) => (

              <S.Card key={i} checkedItems={checkedItems[uid]} onClick={() => handleCardClick(uid)}>

                <S.WrapContent>

                  <S.WrapIndex>
                    <TextC.Body level={2}> {i + 1} </TextC.Body>
                  </S.WrapIndex>

                  <Form.Check
                    className="px-1"
                    inline
                    type={'checkbox'}
                    id={i}
                    checked={!!checkedItems[uid]} // Verifica se o checkbox deve estar marcado
                    onChange={() => handleCheckboxChange(uid)} // Atualiza o estado ao mudar
                    onClick={(e) => e.stopPropagation()} // Impede que o clique no checkbox dispare o clique do card
                  />

                  <S.WrapName>
                    <S.CircleLetterName>
                        <span>{firstName && firstName.charAt(0)}</span>
                    </S.CircleLetterName>
                    <TextC.Body level={2}>{firstName + " " + lastName}</TextC.Body>
                  </S.WrapName>

                </S.WrapContent>
              
                <S.WrapStatus>
                      <Badge bg={handleBadge(status)} text="light">
                        {status}
                      </Badge>
                </S.WrapStatus>
              </S.Card>
            ))
          }

        </S.Cards>  

      </S.Content>
  );

}

export default List


/* 

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
                     
                      onClick={() => handleShowFormUpdate(uid)}
                    >
                      <Theme.Icons.MdModeEdit />
                    </Button>
                  </S.WrapListButtons>

                </S.TableBodyCell>

              </S.TableRow>



*/