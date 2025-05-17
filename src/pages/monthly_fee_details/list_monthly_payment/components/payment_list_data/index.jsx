import { Button } from 'react-bootstrap';
import { TextC } from '../../../../../components/Typography'
import * as S from './stylyd'
import { FormatToCurrency } from '../../../scripts';

const PaymentListData = (props) => {
    const { clickButton, paymentDate, paymentMethod, installmentIncrease, installmentDiscount, amountPaid } = props;

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
            <S.TableContainer>
      <S.Table>
        <tbody>
          <S.TableRow>
            {/* <S.TableHeader>Data Pagamento</S.TableHeader> */}
            <S.TableCell>{paymentDate}</S.TableCell>
          </S.TableRow>
          
          <S.TableRow>
            {/* {/* <S.TableHeader>Forma Pagamento</S.TableHeader> */} 
            <S.TableCell>{handlepaymentMethod(paymentMethod)}</S.TableCell>
          </S.TableRow>
          
          <S.TableRow>
            {/* <S.TableHeader>Acréscimo</S.TableHeader> */} 
            <S.TableCell>{FormatToCurrency(installmentIncrease)}</S.TableCell>
          </S.TableRow>
          
          <S.TableRow>
            {/* {/* <S.TableHeader>Descontos</S.TableHeader> */} 
            <S.TableCell>{FormatToCurrency(installmentDiscount)}</S.TableCell>
          </S.TableRow>
          
          <S.TableRow>
            {/* <S.TableHeader>Valor Pago</S.TableHeader> */}
            <S.TableCell highlight>{FormatToCurrency(amountPaid)}</S.TableCell>
          </S.TableRow>
        </tbody>
      </S.Table>
      
      <S.ButtonContainer>
        <Button
          name='updatePay'
          onClick={(e) => clickButton(e)}
        >
          Editar
        </Button>
      </S.ButtonContainer>
    </S.TableContainer>
    )
}

export default PaymentListData


/* 


  <S.Container>
            <S.WrapRow>
                <div>
                    <TextC.Body level={3}> data Pagamento </TextC.Body>
                    <TextC.Body level={3}> {paymentDate} </TextC.Body>
                </div>
                <div>
                    <TextC.Body level={3}> Forma Pagamento </TextC.Body>
                    <TextC.Body level={3}> {handlepaymentMethod(paymentMethod)} </TextC.Body>
                </div>
            </S.WrapRow>

            <div>
                <div>
                    <TextC.Body level={3}> Acréscimo </TextC.Body>
                    <TextC.Body level={3}> {FormatToCurrency(installmentIncrease)} </TextC.Body>
                </div>
                <div>
                    <TextC.Body level={3}> Descontos </TextC.Body>
                    <TextC.Body level={3}> {FormatToCurrency(installmentDiscount)} </TextC.Body>
                </div>
            </div>

            <div>
                <TextC.Body level={3}> Valor Pago </TextC.Body>
                <TextC.Body level={3}> {FormatToCurrency(amountPaid)} </TextC.Body>

            </div>

            <div>
                <Button
                    name='updatePay'
                    onClick={(e) => clickButton(e)}
                >Editar</Button>
            </div>
        </S.Container>
    )
*/