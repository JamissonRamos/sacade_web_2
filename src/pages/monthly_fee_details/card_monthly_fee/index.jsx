import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { useEffect } from 'react';
import { CalculateValueFeesInterest, FormatToCurrency } from '../scripts';

const CardMonthlyFee = (props) => {

    const { data, subTotalPayment, subTotalIncrease, subTotalDiscount, setTotalValueMonthlyFee } = props;
    const {dueDate, daysLate, statusLabel, styledComponent, valueInstallment, fees, interestDaily, interestMonthly, interestAnnual } = data[0] || {};

    //Calculo de juros e taxas
    const totalFees = daysLate > 0 
                        ? CalculateValueFeesInterest(fees, valueInstallment) : 0;
    const totalInterestDaily = daysLate > 0 
                        ? CalculateValueFeesInterest(interestDaily, valueInstallment) : 0;
    const totalInterestMonthly = daysLate > 0 
                        ? CalculateValueFeesInterest(interestMonthly, valueInstallment) : 0;
    const totalInterestAnnual = daysLate > 0 
                        ? CalculateValueFeesInterest(interestAnnual, valueInstallment) : 0;
    const totalCalculated = daysLate > 0 
                        ? totalFees + (totalInterestDaily * daysLate) + (totalInterestMonthly * Math.floor(daysLate / 30)) + (totalInterestAnnual * Math.floor(daysLate / 365)) : 0;

    const Total =  Number((valueInstallment + totalCalculated).toFixed(2)); //Calcular Valor Original da Parcel
    let subTotal = (valueInstallment + totalCalculated - subTotalPayment) || 0; // Calcular Valor descontando pagamento
    subTotal += subTotalIncrease; //Valor da parcela com o total de acrescimo
    subTotal -=  subTotalDiscount; //Valor da parcela com o total de desconto

    //Formatação dos valores
    const formattedValueInstallment = FormatToCurrency(valueInstallment)
    const formattedTotalCalculated = FormatToCurrency(totalCalculated)
    const formattedTotal = FormatToCurrency(Total)
    const formattedSubTotal = FormatToCurrency(subTotal)
    const formattedSubTotalPayment = FormatToCurrency(subTotalPayment)
    const formattedSubTotalIncrease = FormatToCurrency(subTotalIncrease)
    const formattedSubTotalDiscount = FormatToCurrency(subTotalDiscount)  

    // Salva no localStorage sempre que os dados mudam
    useEffect(() => {
        setTotalValueMonthlyFee(subTotal);
        const valueFormatted = {
            subTotal
        };
        localStorage.setItem('cardParcelData', JSON.stringify(valueFormatted));

    }, [totalCalculated, valueInstallment, setTotalValueMonthlyFee, subTotal]);

    return (
        <S.Container>
            <S.Card>
                <S.CardHeader>
                    <S.WrapStatus $bgColor={styledComponent}>
                        {
                            daysLate > 0 &&
                                <S.WrapDaysLate>
                                    <TextC.Body> {daysLate} </TextC.Body>
                                </S.WrapDaysLate>
                        }
                        <TextC.Body> 
                            { daysLate > 0 
                                ? `dias ${statusLabel}` : statusLabel} 
                        </TextC.Body>

                    </S.WrapStatus>

                    <S.WrapTitle>
                        <TextC.Title level={1}> Dados da Mensalidade </TextC.Title>
                    </S.WrapTitle>
                    
                    <S.WrapDate $fontColor={styledComponent}>
                        <TextC.Body level={2}> Data de Vencimento: </TextC.Body>
                        <TextC.Body level={2}> {dueDate} </TextC.Body>
                    </S.WrapDate>

                </S.CardHeader>
                
                <S.CardBody $fontColor={styledComponent}>                        
                    <S.WrapInstallment >
                        <TextC.Body level={2}>Parcela</TextC.Body>
                        <TextC.Body level={2}>{formattedValueInstallment}</TextC.Body>
                    </S.WrapInstallment>

                    {
                        daysLate > 0 && fees > 0 &&
                            <S.WrapInterestRates >
                                <TextC.Body level={2}>Multa e Juros</TextC.Body>
                                <TextC.Body level={2}>{formattedTotalCalculated}</TextC.Body>
                            </S.WrapInterestRates>
                    }
                    {
                        daysLate > 0 && fees > 0 &&
                            <S.WrapInterestRates >
                                <TextC.Body level={2}>Total</TextC.Body>
                                <TextC.Body level={2}>{formattedTotal}</TextC.Body>
                            </S.WrapInterestRates>
                    }

                    {  
                        subTotalPayment  > 0 &&
                        <S.WrapInstallment >
                            <TextC.Body level={2}>Pagamento</TextC.Body>
                            <TextC.Body level={2}>{formattedSubTotalPayment}</TextC.Body>
                        </S.WrapInstallment>
                    }

                    {  
                        subTotalDiscount > 0 &&
                        <S.WrapInstallment >
                            <TextC.Body level={2}>Desconto</TextC.Body>
                            <TextC.Body level={2}>{formattedSubTotalDiscount}</TextC.Body>
                        </S.WrapInstallment>
                    }

                    {  
                        subTotalIncrease  > 0 &&
                        <S.WrapInstallment >
                            <TextC.Body level={2}>Acréscimo</TextC.Body>
                            <TextC.Body level={2}>{formattedSubTotalIncrease}</TextC.Body>
                        </S.WrapInstallment>
                    }
                
                    {
                        daysLate > 0 &&
                            <S.WrapSubTotal $bgColor={styledComponent}>
                                <TextC.Body level={3}>Falta Pagar</TextC.Body>
                                <TextC.Body level={3}>{formattedSubTotal}</TextC.Body>
                            </S.WrapSubTotal>
                    }

                </S.CardBody>
            </S.Card>
        </S.Container>
    );
}

export default CardMonthlyFee