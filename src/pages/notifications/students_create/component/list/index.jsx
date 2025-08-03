import * as S from './styled';
import { TextC } from '../../../../../components/Typography'
import { Badge, Form} from 'react-bootstrap';
import { useState } from 'react';


const List = ({data, setStoreUid}) => { 

  const [checkedItems, setCheckedItems] = useState({});
  //relationshipLevel
  const handleCheckboxChange = (uid ) => {
    
    /* Manipular o meu checkBox */    
    setCheckedItems((prev) => ({
      ...prev,
      [uid]: !prev[uid],
    }));

    /* Manipular array com os uids */
    setStoreUid((prev) => {
      // Verifica se já existe algum item com o mesmo uid
      const exists = prev.some(item => item.uidResponsible === uid);

      if (exists) {
        // Se o uid já estiver no array, remove todos os itens com esse uid
        return prev.filter((item) => item.uidResponsible !== uid);
      } else {
        // Se não estiver, adiciona o novo objeto
        return [...prev, {uidResponsible: uid , relationshipLevel:"Nenhum"}];
      } 
    });
  };

  //relationshipLevel
  const handleCardClick = (uid) => {
    //relationshipLevel
    handleCheckboxChange(uid);
  };

  return (
      <S.Content>
      
        <S.Cards>
          {
            //relationshipLevel
            data && data.map(({uid, fullName }, i) => (
              //relationshipLevel
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
                    //relationshipLevel
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
              
                {/* <S.WrapStatus>
                  <Badge bg={'primary'} text="light">
                    {relationshipLevel}
                  </Badge>

                </S.WrapStatus> */}
              </S.Card>
            ))
          }

        </S.Cards>  

      </S.Content>
  );

}

export default List
