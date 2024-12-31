import * as S from './styled';
import { TextC } from '../../../../components/Typography'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';

const ListResponsible = ({data}) => {  
  const [registered] = useState(data || []);
  const navigate = useNavigate();

  const handleNavForm = (uid) => { 
    navigate('/responsibleStudents/form_update', { state: { uid: uid } });
  };

  return (
    <S.Container>
      {
        registered && registered.map(({id, fullName, relationshipLevel}, i) => (
          <S.WrapButton 
            key={id}
            onClick={() => handleNavForm(id)}  
          >
            <S.Card>
              <S.SectionPrime>
                <S.WrapIndex>
                  <TextC.Body level={3}> {i + 1} </TextC.Body>
                </S.WrapIndex>
                <S.CircleFirstLetterNome>
                  {fullName && fullName.charAt(0)}
                </S.CircleFirstLetterNome>
                <S.Name>
                    { fullName } 
                </S.Name>

              </S.SectionPrime>
              <S.SectionSecondary>
                <S.Status>
                  <Badge>
                    {relationshipLevel}
                  </Badge>
                </S.Status>
              </S.SectionSecondary>
            </S.Card>
          </S.WrapButton>
        ))}

    </S.Container>























      // <S.Content>
      //   {
      //     registered && registered.map(({id, fullName, relationshipLevel}, i) => (
      //       <S.WrapButtons 
      //         key={id}
      //         onClick={() => handleNavForm(id)}  
      //       >
      //         <S.CardItem >
      //           <S.Wrap>
      //             <S.WrapNameCircule>
      //               <S.CircleLetterName>
      //                 {fullName && fullName.charAt(0)}
      //               </S.CircleLetterName>
      //               <S.Name>
      //                 <TextC.Body level={2}>  {fullName} </TextC.Body>
      //               </S.Name>


      //             </S.WrapNameCircule>

      //             <S.Status>
      //               <TextC.Body level={2}> {relationshipLevel} </TextC.Body>
      //             </S.Status>

      //           </S.Wrap>
      //         </S.CardItem>

      //       </S.WrapButtons>
      //     ))
      //   }        

      // </S.Content>
  );

}

export default ListResponsible