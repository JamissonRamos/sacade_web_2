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
  

  const handleShowFormUpdate = (uid) => { 
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



/* 
        <S.TableBody>
          {
            data && data.map(({uid, firstName, lastName, status }, i) => (
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
        //               onClick={() => handleShowFormUpdate(uid)}
        //             >
        //               <Theme.Icons.MdModeEdit />
        //             </Button>
        //           </S.WrapListButtons>

        //         </S.TableBodyCell>

        //       </S.TableRow>
        //     ))
        //   }

        // </S.TableBody>





