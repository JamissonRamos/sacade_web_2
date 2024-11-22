import * as S from './styled';
import { TextC } from '../../../../components/Typography'
import { Badge, Button} from 'react-bootstrap';
import { Theme } from '../../../../theme';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const ListResponsible = ({data}) => {  
  const [registered] = useState(data || []);

  console.log(registered);
  console.log(data);
  
  const navigate = useNavigate();
  

  const handleNavForm = (uid) => { 
    navigate('/students/form_update', { state: { uid: uid } });
  };

  return (
      <S.Content>
        {
          registered && registered.map(({id, fullName, relationshipLevel,}) => (
          <S.CardItem key={id}>
            <S.Wrap>
              <S.CircleLetterName>
                {fullName && fullName.charAt(0)}
              </S.CircleLetterName>
              <S.Name>
                <TextC.Body level={2}>  {fullName} </TextC.Body>
              </S.Name>
              <S.Status>
                <TextC.Body level={2}> {relationshipLevel} </TextC.Body>
              </S.Status>
            </S.Wrap>

            <S.WrapButtons>

              <S.WrapButtonDelete>
                <Theme.Icons.MdDelete />
              </S.WrapButtonDelete>

              <S.WrapButtonEdit>
                <Theme.Icons.MdEdit />
              </S.WrapButtonEdit>

            </S.WrapButtons>

          </S.CardItem>
          ))
        }        

      </S.Content>
  );

}

export default ListResponsible