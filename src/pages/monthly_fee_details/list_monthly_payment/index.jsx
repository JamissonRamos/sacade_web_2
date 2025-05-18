import { Button, Spinner } from 'react-bootstrap'
import { TextC } from '../../../components/Typography'
import * as S from './styled'
import { LoadingOverlay } from '../../../components/spinner/global/styled';
import { FormatToCurrency } from '../scripts';
import MonthlySummaries from './components/monthly_summaries';
import PaymentListData from './components/payment_list_data';

const ListMonthlyPayment = (props) => {
    const { clickButton, loading, data, totalValueMonthlyFee } = props;
    const dataMonthlyFee = data || [];
    const subTotalPayment = dataMonthlyFee.reduce((acc, item) => acc + item.amountPaid, 0) || 0;
   

    console.log('totalValueMonthlyFee', totalValueMonthlyFee);
    console.log('subTotalPayment', subTotalPayment);

  

    return (
        <S.Container>  
            {
                loading &&
                    <LoadingOverlay>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Carregando os pagamentos...</span>
                    </LoadingOverlay> 
            }
            <S.Header>
                <TextC.Title level={2}> Dados de Pagamento </TextC.Title>
                <MonthlySummaries 
                    dataMonthlyFee={dataMonthlyFee.length}
                    totalValueMonthlyFee={totalValueMonthlyFee}
                    subTotalPayment={subTotalPayment}
                />
            </S.Header>

            <S.Cards>
                {
                    dataMonthlyFee?.map(({paymentDate, paymentMethod, installmentIncrease, installmentDiscount, amountPaid}, index) => (
                        <PaymentListData key={index}
                            clickButton={clickButton}
                            loading={loading}
                            paymentDate={paymentDate}
                            paymentMethod={paymentMethod}   
                            installmentIncrease={installmentIncrease}
                            installmentDiscount={installmentDiscount}
                            amountPaid={amountPaid}
                        />
                    ))
                }

            </S.Cards>
        </S.Container>
    )
}

export default ListMonthlyPayment


// /* 
// <ul>
//                     <li>data</li>
//                     <li>Forma Pagamento</li>
//                     <li>Acrescimos</li>
//                     <li>Descontos</li>
//                     <li>Valor Pago</li>
//                     {/* Ajusta possição do botão coloquei so para ver como fica a logica do botão */}
//                     <li>
//                         <button
//                             name='update'
//                             onClick={clickButton}
//                         >Editar</button>
//                     </li>
//                 </ul>

// */