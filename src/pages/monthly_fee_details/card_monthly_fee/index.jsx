import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { useEffect } from 'react';
import { CalculateValueFeesInterest, FormatToCurrency } from '../scripts';

const CardMonthlyFee = (props) => {

    const { data, setTotalValueMonthlyFee } = props;
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
    const subTotal =  (valueInstallment + totalCalculated) ;


    //Formatação dos valores
    const formattedValueInstallment = FormatToCurrency(valueInstallment)
    const formattedTotalCalculated = FormatToCurrency(totalCalculated)
    const formattedSubTotal = FormatToCurrency(subTotal)

    // Salva no localStorage sempre que os dados mudam
    useEffect(() => {
        setTotalValueMonthlyFee(subTotal);
        const valueFormatted = {
            valueInstallment, //formattedValueInstallment,
            totalCalculated, //formattedTotalCalculated,
        };
        localStorage.setItem('cardParcelData', JSON.stringify(valueFormatted));

    }, [totalCalculated, valueInstallment, setTotalValueMonthlyFee, subTotal]);

    return (
        <S.Container>
            {/* Com a mudança devo retirar o atributo $BorderColor, não uso mais */}
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

                    <TextC.Title level={2}> Dados da Mensalidade </TextC.Title>
                    
                    <S.WrapDate $fontColor={styledComponent}>
                        <TextC.Body level={2}> Data de Vencimento: </TextC.Body>
                        <TextC.Body level={2}> {dueDate} </TextC.Body>
                    </S.WrapDate>

                </S.CardHeader>
                
                <S.CardBody $fontColor={styledComponent}>
                    {/* <S.WrapContentCard $bgColor={styledComponent}> */}
                        
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
                            daysLate > 0 &&
                                <S.WrapSubTotal $bgColor={styledComponent}>
                                    <TextC.Body level={3}>Total</TextC.Body>
                                    <TextC.Body level={3}>{formattedSubTotal}</TextC.Body>
                                </S.WrapSubTotal>
                        }

                    {/* </S.WrapContentCard> */}
                </S.CardBody>
            </S.Card>
        </S.Container>
    );
}

export default CardMonthlyFee