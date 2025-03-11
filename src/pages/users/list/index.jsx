// import * as S from './styled';
// import { TextC } from '../../../components/Typography'
// import { Badge, Button} from 'react-bootstrap';
// import { Theme } from '../../../theme';
// import { useNavigate } from 'react-router-dom';
// // import ChangeRegistrationModal from '../modal';

// const List = ({data}) => {
//   const navigate = useNavigate();

//   const handleBadge = (status) => 
//   {
//     let bg
//     switch (status) {
//       case 'Visitante':
//         bg = "warning"
//         break;
//       case 'Assistente':
//         bg = "info"
//         break;
//       case 'Administrador':
//         bg = "success"
//         break;

//       default:
//         bg = "primary"
//         break;
//     }

//     return bg 
//   }

//   const handleShowFormUpdate = (uid) => { 
//     navigate('/users/form_update', { state: { uid: uid } });
//   };

//   return (
//       <S.Content>
//         <S.TableHeader>
//           <S.TableRow>
//             <S.TableHeaderCell $flex={.1}>
//               <TextC.Label level={1}>#</TextC.Label>
//             </S.TableHeaderCell>
//             <S.TableHeaderCell $flex={2}>
//               <TextC.Label level={1}>Nome</TextC.Label>
//             </S.TableHeaderCell>
//             <S.TableHeaderCell>
//               <TextC.Label level={1}>Status</TextC.Label>
//             </S.TableHeaderCell>
//             <S.TableHeaderCell $flex={.5}>
//               <TextC.Label level={1}></TextC.Label>
//             </S.TableHeaderCell>
//           </S.TableRow>
//         </S.TableHeader>
//         <S.TableBody>
//           {
//             data && data.map(({uid, firstName, lastName, status }, i) => (
//               <S.TableRow key={i}>
//                 <S.TableBodyCell $flex={.1}>
//                   <TextC.Body level={1}>{1 + i}</TextC.Body>
//                 </S.TableBodyCell>
//                 <S.TableBodyCell $flex={2}>
//                   <S.CircleLetterName>
//                       {firstName && firstName.charAt(0)}
//                   </S.CircleLetterName>
//                   <TextC.Body level={1} className='fullName'>
//                     {firstName + " " + lastName}
//                   </TextC.Body>
//                 </S.TableBodyCell>
//                 <S.TableBodyCell>
//                     <Badge bg={handleBadge(status)} text="light">
//                       {status}
//                     </Badge>
//                 </S.TableBodyCell>
//                 <S.TableBodyCell $flex={.5}>
//                   <Button
//                     variant="outline-success"
//                     size="sm"
//                     onClick={() => handleShowFormUpdate(uid)}
//                   >
//                     <Theme.Icons.MdModeEdit />
//                   </Button>
//                 </S.TableBodyCell>
//               </S.TableRow>
//             ))
//           }

//         </S.TableBody>  
//       </S.Content>
//   );

// }

// export default List