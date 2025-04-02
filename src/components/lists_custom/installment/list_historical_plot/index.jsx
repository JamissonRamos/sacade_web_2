import * as S from './styled';
import { FormatNumberMoney, FormatNumberPercentage, FormatToCurrency, SetStatus } from '../scripts';
import SectionsFirst from './components/sections_first';
import SectionsThird from './components/sections_third';
import SectionsSecond from './components/sections_second';
import { useState } from 'react';


const ListHistoricalPlot = ({data}) => {
    const [totalInterest, setTotalInterest] = useState({});

    const handleSetStatus = (status, dueDate) => {
    /* Função para definir o status da parcela */

        return SetStatus(status, dueDate)
    }

    const handleTotalCalculated = (id, calculatedValue) => {
        setTotalInterest((prev) => ({
            ...prev,
            [id]: calculatedValue
        }));
    };
    return (

        <S.Container>
        {
            data && data.map(({id, dueDate, value, fees, interestAnnual, interestDaily, interestMonthly, statusPayment}, i) => {
                const newStatus = handleSetStatus(statusPayment, dueDate)
                const newValorParcela = FormatToCurrency(value)  
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
                        $borderLeft={newStatus.bg}
                    >
                        <SectionsFirst 
                            dueDate={dueDate}
                            statusText={newStatus.textLabel}
                            styledStatus={newStatus}
                        />
                    
                        <SectionsSecond 
                            id={id} //Retorna dentro da função handleTotalCalculated
                            fineInterestValues={fineInterestValues}
                            styledStatus={newStatus}
                            onCalculateTotal={handleTotalCalculated}
                        />
                    
                        <SectionsThird 
                            styledStatus={newStatus}
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

