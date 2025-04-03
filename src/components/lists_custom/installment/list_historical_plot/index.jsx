import * as S from './styled';
import SectionsFirst from './components/sections_first';
import SectionsThird from './components/sections_third';
import SectionsSecond from './components/sections_second';
import { FormatNumberMoney, FormatNumberPercentage, FormatToCurrency } from '../scripts';
import { useState } from 'react';

const ListHistoricalPlot = ({data}) => {
    const [totalInterest, setTotalInterest] = useState({});

    const handleTotalCalculated = (id, calculatedValue) => {
        setTotalInterest((prev) => ({
            ...prev,
            [id]: calculatedValue
        }));
    };

    return (

        <S.Container>
        {
            data && data.map(({id, dueDate, value, fees, interestAnnual, interestDaily, interestMonthly, statusLabel, daysLate}, i) => {
                const newStatus = statusLabel //handleSetStatus(statusPayment, dueDate);
                const { bg, textLabel } = statusLabel;
                
                const newValorParcela = FormatToCurrency(value);  
                const fineInterestValues = {
                    newFeesMoney: FormatNumberMoney(fees, value),
                    newFeesPercentage: FormatNumberPercentage(fees),

                    newInterestDailyMoney: FormatNumberMoney(interestDaily, value),
                    newInterestDailyPercentage: FormatNumberPercentage(interestDaily),
                
                    newInterestMonthlyMoney: FormatNumberMoney(interestMonthly, value),
                    newInterestMonthlyPercentage: FormatNumberPercentage(interestMonthly),
                
                    newInterestAnnualMoney: FormatNumberMoney(interestAnnual, value),
                    newInterestAnnualPercentage: FormatNumberPercentage(interestAnnual),
                };

                return (
                    <S.WrapButton 
                        key={i}
                        $borderLeft={bg}
                    >
                        <SectionsFirst 
                            dueDate={dueDate}
                            daysLate={daysLate}
                            statusText={textLabel}
                            styledStatus={bg}
                        />
                    
                        <SectionsSecond 
                            id={id} //Retorna dentro da função handleTotalCalculated
                            fineInterestValues={fineInterestValues}
                            daysLate={daysLate}
                            styledStatus={bg}
                            onCalculateTotal={handleTotalCalculated}
                        />
                    
                        <SectionsThird 
                            daysLate={daysLate}
                            styledStatus={bg}
                            installmentValue={newValorParcela}
                            totalInterest={totalInterest[id] || 0} // Passa o valor para o terceiro componente
                            
                        />

                    </S.WrapButton>
                )
            })
        }
        </S.Container>
    )
}

export default ListHistoricalPlot