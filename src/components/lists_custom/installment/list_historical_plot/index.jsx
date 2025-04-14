import * as S from './styled';
import SectionsFirst from './components/sections_first';
import SectionsThird from './components/sections_third';
import SectionsSecond from './components/sections_second';
import { useState } from 'react';
import { FormatNumberMoney, FormatNumberPercentage, FormatToCurrency } from '../scripts';

const ListHistoricalPlot = ({data, navigation}) => {
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
            data && data.map(({id, dueDate, valueInstallment: value, fees, interestAnnual, interestDaily, interestMonthly, statusLabel, styledComponent, daysLate}, i) => {

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
                        $borderLeft={styledComponent}
                        onClick={() =>  navigation(id)}
                    >
                        <SectionsFirst 
                            dueDate={dueDate}
                            daysLate={daysLate}
                            statusText={statusLabel}
                            styledStatus={styledComponent}
                        />
                    
                        <SectionsSecond 
                            id={id} //Retorna dentro da função handleTotalCalculated
                            fineInterestValues={fineInterestValues}
                            daysLate={daysLate}
                            statusLabel={statusLabel}
                            styledStatus={styledComponent}
                            onCalculateTotal={handleTotalCalculated}
                        />
                    
                        <SectionsThird 
                            daysLate={daysLate}
                            styledStatus={styledComponent}
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