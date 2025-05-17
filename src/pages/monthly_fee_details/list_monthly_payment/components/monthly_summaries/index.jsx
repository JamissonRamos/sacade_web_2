import * as S from './styled'
import { TextC } from '../../../../../components/Typography'
import { FormatToCurrency } from '../../../scripts';

const MonthlySummaries = (props) => {
    const { dataMonthlyFee, totalValueMonthlyFee, subTotalPayment } = props;

    return (
        <S.Container>
            <S.WrapData>
                <TextC.Body level={2}> Pagamentos </TextC.Body>
                <TextC.Body level={2}> {dataMonthlyFee} </TextC.Body>
            </S.WrapData>
            <S.WrapData>
                <TextC.Body level={2}> Total Pago </TextC.Body>
                <TextC.Body level={2}> {FormatToCurrency(subTotalPayment)} </TextC.Body>
            </S.WrapData>
            <S.WrapData>
                <TextC.Body level={2}> Resta Pagar </TextC.Body>
                <TextC.Body level={2}> {FormatToCurrency(totalValueMonthlyFee - subTotalPayment)} </TextC.Body>
            </S.WrapData>
        </S.Container>
    )
}

export default MonthlySummaries