import * as S from './styled';
import { TextC } from '../../../../../components/Typography';
import { CalculateValueFeesInterest, FormatToCurrency } from '../../../scripts';


const Card = (props) => {
    const { data } = props;
    const {dueDate, daysLate, statusLabel, styledComponent, valueInstallment, fees, interestDaily, interestMonthly, interestAnnual } = data[0] || {};

    const formattedValueInstallment = FormatToCurrency(valueInstallment)
    const totalFees = CalculateValueFeesInterest(fees, valueInstallment);
    const totalInterestDaily = CalculateValueFeesInterest(interestDaily, valueInstallment);
    const totalInterestMonthly = CalculateValueFeesInterest(interestMonthly, valueInstallment);
    const totalInterestAnnual = CalculateValueFeesInterest(interestAnnual, valueInstallment);

    const totalCalculated = totalFees + (totalInterestDaily * daysLate) + (totalInterestMonthly * Math.floor(daysLate / 30)) + (totalInterestAnnual * Math.floor(daysLate / 365));
    const formattedTotalCalculated = FormatToCurrency(totalCalculated)
    
    const subTotal = (valueInstallment + totalCalculated)
    const formattedSubTotal = FormatToCurrency(subTotal)
    
    return (
        <S.Container>
            <S.Card $BorderColor={styledComponent}>
                <S.CardHeader>
                    <S.WrapDate $fontColor={styledComponent}>
                        <TextC.Title level={1}> {dueDate} </TextC.Title> 
                    </S.WrapDate>
        
                    <S.WrapStatus $bgColor={styledComponent}>
                        {
                            daysLate > 0 &&
                                <S.WrapDaysLate>
                                    <TextC.Body> {daysLate} </TextC.Body>
                                </S.WrapDaysLate>
                        }
                        <TextC.Body> {statusLabel} </TextC.Body>
                    </S.WrapStatus> 
                </S.CardHeader>

                <S.CardBody>
                    {
                        daysLate > 0 &&
                            <S.WrapInterestRates $bgColor={styledComponent}>
                                <TextC.Body level={2}>Multa e Juros</TextC.Body>
                                <TextC.Body level={2}>{formattedTotalCalculated}</TextC.Body>
                            </S.WrapInterestRates>
                    }

                    <S.WrapInstallment $bgColor={styledComponent}>
                        <TextC.Body level={2}>Parcela</TextC.Body>
                        <TextC.Body level={2}>{formattedValueInstallment}</TextC.Body>
                    </S.WrapInstallment>

                    {
                        daysLate > 0 &&
                            <S.WrapSubTotal $bgColor={styledComponent}>
                                <TextC.Body level={3}>Total</TextC.Body>
                                <TextC.Body level={3}>{formattedSubTotal}</TextC.Body>
                            </S.WrapSubTotal>
                    }
                </S.CardBody>
            </S.Card>
        </S.Container>
    )
}

export default Card