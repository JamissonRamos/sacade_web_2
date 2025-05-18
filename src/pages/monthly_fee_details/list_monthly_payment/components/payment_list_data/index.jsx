import * as S from './stylyd'
import { Theme } from '../../../../../theme';
import { TextC } from '../../../../../components/Typography'
import { Button } from 'react-bootstrap';
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
        <S.Container>
            <S.WrapSection>
                <S.WrapRow>
                    <TextC.Body level={2}> data Pagamento: </TextC.Body>
                    <TextC.Body level={2}> {paymentDate} </TextC.Body>
                </S.WrapRow>
                <S.WrapRow>
                    <TextC.Body level={2}> Forma Pagamento </TextC.Body>
                    <TextC.Body level={2}> {handlepaymentMethod(paymentMethod)} </TextC.Body>
                </S.WrapRow>
            </S.WrapSection>

            <S.WrapSection>
                <S.WrapRow>
                    <TextC.Body level={2}> Acréscimo </TextC.Body>
                    <TextC.Body level={2}> {FormatToCurrency(installmentIncrease)} </TextC.Body>
                </S.WrapRow>
                <S.WrapRow>
                    <TextC.Body level={2}> Descontos </TextC.Body>
                    <TextC.Body level={2}> {FormatToCurrency(installmentDiscount)} </TextC.Body>
                </S.WrapRow>
            </S.WrapSection>

            <S.WrapSection>
                <S.WrapRow>
                    <TextC.Body level={2}> Valor Pago </TextC.Body>
                    <TextC.Body level={2}> {FormatToCurrency(amountPaid)} </TextC.Body>
                </S.WrapRow>
            </S.WrapSection>

            <S.WrapButton>
                <Button
                    variant="outline-primary"
                    name='updatePay'
                    onClick={(e) => clickButton(e)}
                >
                <TextC.Label level={4}>Atualizar</TextC.Label>
                <Theme.Icons.MdEdit />
                </Button>
            </S.WrapButton>
        </S.Container>
    )
}
export default PaymentListData