import * as S from './styled'
import InterestRates from './components/interest_rates';
import { useEffect, useState } from 'react';
import { FormatToCurrency, ParseCurrencyToNumber } from '../../../scripts';

const SectionsSecond = ({ id, fineInterestValues, statusLabel, styledStatus, daysLate, onCalculateTotal  }) => {
    const [interestFeesValue, setInterestFeesValue] = useState("R$ 0,00");
    const [interestDailyValue, setInterestDailyValue] = useState("R$ 0,00");
    const [interestMonthlyValue, setInterestMonthlyValue] = useState("R$ 0,00");
    const [interestAnnualValue, setInterestAnnualValue] = useState("R$ 0,00");

    //Valores dos Juros e Taxas calculados
    const interestValue = {
        interestFeesValue,
        interestDailyValue,
        interestMonthlyValue,
        interestAnnualValue
    }

    const calculateDaily = () => {
        if (fineInterestValues?.newInterestDailyMoney) {            
            const dailyInterest = ParseCurrencyToNumber(fineInterestValues.newInterestDailyMoney);
            const dailyTotal = dailyInterest * daysLate;
            if(dailyTotal > 0) {
                setInterestDailyValue(FormatToCurrency(dailyTotal));                
                return dailyTotal;
            }else{
                return 0
            }
        }
    }

    const calculateMonthl = () => {
        // Cálculo do juros mensal (apenas a cada 30 dias completos)
        if (fineInterestValues?.newInterestMonthlyMoney) {
            const monthlyInterest = ParseCurrencyToNumber(fineInterestValues.newInterestMonthlyMoney);
            const monthsLate = Math.floor(daysLate / 30); // Apenas meses completos contam
            const monthlyTotal = monthlyInterest * monthsLate;

            if(monthlyTotal > 0){
                setInterestMonthlyValue(FormatToCurrency(monthlyTotal));
                return monthlyTotal;
            }else{
                return 0
            }
        }
    }

    const calculateAnnual = () => {
        if (fineInterestValues?.newInterestAnnualMoney) {
            const annualInterest = ParseCurrencyToNumber(fineInterestValues.newInterestAnnualMoney);
            const yearsLate = Math.floor(daysLate / 365); // Apenas anos completos contam
            const annualTotal = annualInterest * yearsLate;
            
            if(annualTotal > 0){
                setInterestAnnualValue(FormatToCurrency(annualTotal));
                return annualTotal
            }else{
                return 0
            }
        }
    }

    useEffect(() => {

        if (!fineInterestValues || daysLate <= 0) return;
        //valor de multa não tem calculo
        const newFeesMoney = fineInterestValues?.newFeesMoney;
        const fees = ParseCurrencyToNumber(newFeesMoney)
        const daily = calculateDaily() || 0;
        const monthl = calculateMonthl() || 0;
        const annual = calculateAnnual() || 0;
                
        const total =  fees + daily + monthl + annual || 0 ;
        
        //Multa não tem calculo por dias, passar o valor de multa
        setInterestFeesValue(FormatToCurrency(fees))
        // Chama a função de callback para passar o valor para o componente pai
        onCalculateTotal(id, FormatToCurrency(total));
    }, []);
    
    return(
        <S.Container>
            {   
                //Assim os cards de juros não são mostrado quando é selecionado um tipo de parcela
                statusLabel == "Em Atraso" &&
                    <InterestRates 
                        styledStatus={styledStatus}
                        interestValue={interestValue}
                    />
            }
        </S.Container>
)}

export default SectionsSecond