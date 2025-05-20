// import React, { useEffect } from 'react'
// import Fields from '../../components/fields';
// import { useMonthlyFee } from '../../../../hooks/monthlyFee';
// import { ConvertDateBrUSS, FormatToCurrency } from '../../scripts';


// const FormUpdate = (props) => {
//     const { idPayment, register, errors, setValue, setValueDiscount, setValueIncrease, setValuePayments} = props;

//     const { documentsID, loading } = useMonthlyFee.useGetDocumentsID();

//     const fetchDocuments = async () => {
        
//         const result = await documentsID(idPayment);
//         const { success, data, message } = result;
//         if (success) {
            
//             const { amountPaid, installmentDiscount, installmentIncrease, paymentDate, paymentMethod } = data;
            
//             setValue('paymentMethod', paymentMethod);
//             setValue('paymentDate', ConvertDateBrUSS(paymentDate));
//             setValue('installmentDiscount', FormatToCurrency(installmentDiscount));
//             setValue('installmentIncrease', FormatToCurrency(installmentIncrease));
//             setValue('amountPaid', FormatToCurrency(amountPaid));
//         } else {
//             console.log('Erro ao recuperar documento: ', message);
//         }
//     }


//     useEffect(() => {
//         console.log('passou');
//         console.log('idPayment: ', idPayment);
        
//         fetchDocuments();  // Chama a função ao renderizar o componente
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);


//     return (

//         <>
//             {
//                 loading
//                 ?  <>Carregando...</>
//                 : <>
//                     <Fields 
//                         register = {register}
//                         errors = {errors}
//                         setValue = {setValue}
//                         setValueDiscount = {setValueDiscount}
//                         setValueIncrease = {setValueIncrease}
//                         setValuePayments = {setValuePayments}
//                     />
                
//                 </>
//             }
//         </>
//     )
// }

// export default FormUpdate