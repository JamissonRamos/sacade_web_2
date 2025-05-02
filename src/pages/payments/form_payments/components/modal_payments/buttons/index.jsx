// import * as S from './styled';
// import { Theme } from '../../../../../../theme';
// import { Button, Spinner } from 'react-bootstrap';

// const Buttons = (props) => {
//     const {showModal} = props
    
//     // const handleLoading = (type) => {
//     //     return (
//     //         <>
//     //             <Spinner
//     //                 as="span"
//     //                 animation="border"
//     //                 size="sm"
//     //                 role="status"
//     //                 aria-hidden="true"
//     //             />
//     //             { type === 'delete' ?
//     //                 <span > Excluindo... </span> :
//     //                 <span > Atualizando... </span>
//     //             }
//     //         </>
//     //     )
//     // }

//     return (
//         <S.Container>
//             <S.WrapButtonUpdateCancel>
//                 <Button 
//                     variant="outline-danger"
//                     onClick={showModal}
//                 >
//                     <Theme.Icons.MdClose />
//                     <span>Cancelar</span>
//                 </Button>
//                 <Button 
//                     variant="success"
//                     type='submit'
//                     //disabled={loadingUpdate ? true : false}
//                 >
//                 { 
//                     // loadingUpdate 
//                     // ?  handleLoading('update')
//                     // :
//                     <>
//                         <Theme.Icons.MdAttachMoney />
//                         <span>Pagar</span>
//                     </>
//                 } 
//                 </Button>
//             </S.WrapButtonUpdateCancel>
//         </S.Container>
//     )
// }

// export default Buttons