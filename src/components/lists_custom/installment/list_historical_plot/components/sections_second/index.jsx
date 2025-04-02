    import { useEffect, useState } from 'react';
    import { TextC } from '../../../../../Typography'
    import * as S from './styled'

    const SectionsSecond = ({ fineInterestValues, styledStatus }) => {
        const [interestDailyValue, setInterestDailyValue] = useState("R$ 0,00");
        const [interestMonthlyValue, setInterestMonthlyValue] = useState("R$ 0,00");
        const [interestAnnualValue, setInterestAnnualValue] = useState("R$ 0,00");
        
        const { bg, daysLate} = styledStatus;
        
        const {
            newFeesMoney,
            newFeesPercentage,
            newInterestDailyMoney,
            newInterestDailyPercentage,
            newInterestMonthlyMoney,
            newInterestMonthlyPercentage,
            newInterestAnnualMoney,
            newInterestAnnualPercentage
        } = fineInterestValues;

        // Função para converter o valor monetário para número
        const parseCurrencyToNumber = (currency) => {
            return parseFloat(
                currency
                    .replace("R$", "") // Remove símbolo da moeda
                    .replace(/\./g, "") // Remove pontos de milhar
                    .replace(",", ".")  // Troca vírgula decimal por ponto
                    .trim()
            );
        };

        // Função para formatar número para moeda
        const formatToCurrency = (value) => {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(value);
        };

        useEffect(() => {
            if (!fineInterestValues || daysLate <= 0) return;

            // Cálculo do juros diário
            if (fineInterestValues?.newInterestDailyMoney) {
                const dailyInterest = parseCurrencyToNumber(fineInterestValues.newInterestDailyMoney);
                const dailyTotal = dailyInterest * daysLate;

                if(dailyTotal > 0){

                    setInterestDailyValue(formatToCurrency(dailyTotal));
                }
            }

            // Cálculo do juros mensal (apenas a cada 30 dias completos)
            if (fineInterestValues?.newInterestMonthlyMoney) {
                const monthlyInterest = parseCurrencyToNumber(fineInterestValues.newInterestMonthlyMoney);
                const monthsLate = Math.floor(daysLate / 30); // Apenas meses completos contam
                const monthlyTotal = monthlyInterest * monthsLate;

                if(monthlyTotal > 0){

                    setInterestMonthlyValue(formatToCurrency(monthlyTotal));
                }
               // handleRecoverValuesInterest( monthlyTotal)

            }

            // Cálculo do juros anual (apenas a cada 365 dias completos)
            if (fineInterestValues?.newInterestAnnualMoney) {
                const annualInterest = parseCurrencyToNumber(fineInterestValues.newInterestAnnualMoney);
                const yearsLate = Math.floor(daysLate / 365); // Apenas anos completos contam
                const annualTotal = annualInterest * yearsLate;
                
                if(annualTotal > 0){
                    setInterestAnnualValue(formatToCurrency(annualTotal));
                }
            }

                //interestDailyValue,interestMonthlyValue,interestAnnualValue
                // const totaldia = parseCurrencyToNumber(interestDailyValue)
                // const totalMes = parseCurrencyToNumber(interestMonthlyValue)
                //const totalanual = parseCurrencyToNumber(interestAnnualValue)

        }, []); 

        console.log('interestDailyValue', interestDailyValue);
        console.log('interestMonthlyValue', interestMonthlyValue);
        console.log('interestAnnualValue', interestAnnualValue);
        console.log('Total', interestDailyValue + interestMonthlyValue + interestAnnualValue);
        
        return (
            
            <S.Container>

                <S.WrapInterestRates>
                    <S.WrapLabel $borderBColor={bg}>
                        <TextC.Label level={4}> Multa </TextC.Label>
                    </S.WrapLabel>
                    <S.WrapFeesMoney>
                        <TextC.Body level={1}> {newFeesMoney} </TextC.Body>
                    </S.WrapFeesMoney>
                    <S.WrapFeesPercentage>
                        <TextC.Body level={1}> {newFeesPercentage} </TextC.Body>
                    </S.WrapFeesPercentage>
                </S.WrapInterestRates>

                <S.WrapInterestRates>
                    <S.WrapLabel $borderBColor={bg}>
                        <TextC.Label level={4}> Diários </TextC.Label>
                    </S.WrapLabel>
                    <S.WrapFeesMoney>
                        <TextC.Body level={1}> {newInterestDailyMoney} </TextC.Body>
                    </S.WrapFeesMoney>
                    <S.WrapFeesPercentage>
                        <TextC.Body level={1}> {newInterestDailyPercentage} </TextC.Body>
                    </S.WrapFeesPercentage>
                    {
                        daysLate > 0 
                        ?
                            <S.WrapFeesPercentage>
                                <TextC.Body level={1}> {interestDailyValue} </TextC.Body>
                            </S.WrapFeesPercentage>
                        : null
                    }

                </S.WrapInterestRates>

                <S.WrapInterestRates>
                    <S.WrapLabel $borderBColor={bg}>
                        <TextC.Label level={4}> Mesal </TextC.Label>
                    </S.WrapLabel>
                    <S.WrapFeesMoney>
                        <TextC.Body level={1}> {newInterestMonthlyMoney} </TextC.Body>
                    </S.WrapFeesMoney>
                    <S.WrapFeesPercentage>
                        <TextC.Body level={1}> {newInterestMonthlyPercentage} </TextC.Body>
                    </S.WrapFeesPercentage>

                    {
                        daysLate >= 0 
                        ?
                            <S.WrapFeesPercentage>
                                <TextC.Body level={1}> {interestMonthlyValue} </TextC.Body>
                            </S.WrapFeesPercentage>
                        : null
                    }

                </S.WrapInterestRates>

                <S.WrapInterestRates>
                    <S.WrapLabel $borderBColor={bg}>
                        <TextC.Label level={4}> Anual </TextC.Label>
                    </S.WrapLabel>
                    <S.WrapFeesMoney>
                        <TextC.Body level={1}> {newInterestAnnualMoney} </TextC.Body>
                    </S.WrapFeesMoney>
                    <S.WrapFeesPercentage>
                        <TextC.Body level={1}> {newInterestAnnualPercentage} </TextC.Body>
                    </S.WrapFeesPercentage>

                    {
                        daysLate >= 0 
                        ?
                            <S.WrapFeesPercentage>
                                <TextC.Body level={1}> {interestAnnualValue} </TextC.Body>
                            </S.WrapFeesPercentage>
                        : null
                    }
                </S.WrapInterestRates>

            </S.Container>
        )
    }

    export default SectionsSecond