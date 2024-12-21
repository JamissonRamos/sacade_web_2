import * as S from './styled';
import { TextC } from '../../../../../components/Typography'
import { Badge, Form} from 'react-bootstrap';
import { useEffect, useState } from 'react';


const List = ({data, setStoreUid, selectAll}) => { 
  const [checkedItems, setCheckedItems] = useState({});
  
  // useEffect(() => {
  //   const newCheckedItems = {};
  //   data && data.forEach(item => {
  //     newCheckedItems[item.uid] = selectAll;
  //   });
  //   setCheckedItems(newCheckedItems);
  //   setStoreUid(selectAll ? data.map(item => item.uid) : []);
  // }, [selectAll, data, setStoreUid]);


  // const handleCheckboxChange = (uid) => {
  //   /* Manipular o meu checkBox */    
  //   setCheckedItems((prev) => ({
  //     ...prev,
  //     [uid]: !prev[uid],
  //   }));

  //   /* Manipular array com os uids */
  //   setStoreUid((prev) => {
  //     if (prev.includes(uid)) {
  //       // Se o uid já estiver no array, remove-o
  //       return prev.filter((id) => id !== uid);
  //     } else {
  //       // Se não estiver, adiciona-o
  //       return [...prev, uid];
  //     }
  //   });
  // };

  // const handleCardClick = (uid) => {
  //   handleCheckboxChange(uid);
  // };


  return (
      <S.Content>
      
        <S.Cards>
          {
            data && data.map(({uid, fullName, relationshipLevel }, i) => (

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
                        <span>{fullName && fullName.charAt(0)}</span>
                    </S.CircleLetterName>
                    <TextC.Body level={2}>{fullName}</TextC.Body>
                  </S.WrapName>

                </S.WrapContent>
              
                <S.WrapStatus>
                      <Badge bg={'primary'} text="light">
                        {relationshipLevel}
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
