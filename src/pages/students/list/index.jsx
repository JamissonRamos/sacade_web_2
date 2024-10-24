import * as S from './styled';
import { TextC } from '../../../components/Typography'
import { Badge, Button} from 'react-bootstrap';
import { Theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';


const List = ({data}) => {  
  const navigate = useNavigate();

  const handleBadge = (status) => 
  {
    let bg
    switch (status) {
      case 'inativo':
        bg = "warning"
        break;
      case 'bloqueado ':
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

  const handleShowFormUpdate = (uid) => { 
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