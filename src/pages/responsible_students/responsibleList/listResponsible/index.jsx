import * as S from './styled';
import { TextC } from '../../../../components/Typography'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ListResponsible = ({data}) => {  
  const [registered] = useState(data || []);
  const navigate = useNavigate();

  const handleNavForm = (uid) => { 
    navigate('/responsibleStudents/form_update', { state: { uid: uid } });
  };

  return (
      <S.Content>
        {
          registered && registered.map(({id, fullName, relationshipLevel,}) => (
            <S.WrapButtons 
              key={id}
              onClick={() => handleNavForm(id)}  
            >
              <S.CardItem >
                <S.Wrap>
                  <S.WrapNameCircule>
                    <S.CircleLetterName>
                      {fullName && fullName.charAt(0)}
                    </S.CircleLetterName>
                    <S.Name>
                      <TextC.Body level={2}>  {fullName} </TextC.Body>
                    </S.Name>


                  </S.WrapNameCircule>

                  <S.Status>
                    <TextC.Body level={2}> {relationshipLevel} </TextC.Body>
                  </S.Status>

                </S.Wrap>
              </S.CardItem>
            </S.WrapButtons>
          ))
        }        

      </S.Content>
  );

}

export default ListResponsible