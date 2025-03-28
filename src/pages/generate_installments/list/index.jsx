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
    setStoreUid(selectAll ? data.map(item => ({ uid: item.uid, name: `${item.firstName} ${item.lastName}` })) : []);

  }, [selectAll, data, setStoreUid]);


  const handleCheckboxChange = (uid, name) => {

    /* Manipular o meu checkBox */    
    setCheckedItems((prev) => ({
      ...prev,
      [uid]: !prev[uid],
    }));

    /* Manipular array com os uids */
    setStoreUid((prev) => {
      if (prev.some((item) => item.uid === uid)) {
        
        // Filtra apenas os objetos cujo uid NÃO seja igual ao selecionado
        const newStoreUid = prev.filter((item) => item.uid !== uid);
        return newStoreUid;

      } else {
        // Se não estiver, adiciona-o
        return [...prev, { uid: uid, name: name}];
      }
    });
  };

  const handleCardClick = (uid, name ) => {
    handleCheckboxChange(uid, name);
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

              <S.Card key={i} checkedItems={checkedItems[uid]} onClick={() => handleCardClick(uid, `${firstName} ${lastName}`)}>

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
                    onChange={() => handleCheckboxChange(uid, `${firstName} ${lastName}` )} // Atualiza o estado ao mudar
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
