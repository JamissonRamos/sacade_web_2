import { Button, Spinner } from 'react-bootstrap'
import { TextC } from '../../../components/Typography'
import * as S from './styled'
import { LoadingOverlay } from '../../../components/spinner/global/styled';

const ListMonthlyPayment = (props) => {
    const { clickButton, loading, data } = props;
    const dataMonthlyFee = data || [];
    const subTotalPayment = dataMonthlyFee.reduce((acc, item) => acc + item.amountPaid, 0) || 0;
    console.log('dataMonthlyFee', dataMonthlyFee);
    

    const handlepaymentMethod = (paymentMethod) => {
        switch (paymentMethod) {
            case 1:
                return 'Dinheiro';
            case 2:
                return 'Pix';
            case 3:
                return 'Cartão Débito';
            default:
                return 'Forma de Pagamento Desconhecida';
        }
    }

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
            <div>
                <TextC.Title level={2}>Pagamentos Feitos</TextC.Title>
                <div>
                    <TextC.Body level={3}> {dataMonthlyFee.length} Pagamentos</TextC.Body>
                    <TextC.Body level={3}> {subTotalPayment} Total Pago</TextC.Body>
                </div>
            </div>
            <S.Cards>
                {
                    dataMonthlyFee?.map(({paymentDate, paymentMethod, installmentIncrease, installmentDiscount, amountPaid}, index) => (
                        <S.Card key={index}>
                            <div>
                                <div>
                                    <TextC.Body level={3}> data Pagamento </TextC.Body>
                                    <TextC.Body level={3}> {paymentDate} </TextC.Body>
                                </div>
                                <div>
                                    <TextC.Body level={3}> Forma Pagamento </TextC.Body>
                                    <TextC.Body level={3}> {handlepaymentMethod(paymentMethod)} </TextC.Body>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <TextC.Body level={3}> Acréscimo </TextC.Body>
                                    <TextC.Body level={3}> {installmentIncrease} </TextC.Body>
                                </div>
                                <div>
                                    <TextC.Body level={3}> Descontos </TextC.Body>
                                    <TextC.Body level={3}> {installmentDiscount} </TextC.Body>
                                </div>
                            </div>

                            <div>
                                <TextC.Body level={3}> Valor Pago </TextC.Body>
                                <TextC.Body level={3}> {amountPaid} </TextC.Body>

                            </div>
                            <div>
                                <Button
                                    name='updatePay'
                                    onClick={(e) => clickButton(e)}
                                >Editar</Button>
                            </div>
                        </S.Card>
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