import * as S from './styled';
import { FormatNumberMoney, FormatNumberPercentage, SetStatus } from '../scripts';
import SectionsFirst from './components/sections_first';
import SectionsThird from './components/sections_third';
import SectionsSecond from './components/sections_second';
import { useState } from 'react';


const ListHistoricalPlot = ({data}) => {

    const handleSetStatus = (status, dueDate) => {
    /* Função para definir o status da parcela */

        return SetStatus(status, dueDate)
    }





    return (

        <S.Container>
        {
            data && data.map(({uid, dueDate, value, fees, interestAnnual, interestDaily, interestMonthly, statusPayment}, i) => {
                const newStatus = handleSetStatus(statusPayment, dueDate)
                const newValorParcela = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(value);
                
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
                        fineInterestValues={fineInterestValues}
                        styledStatus={newStatus}
                    
                    />
                    
                    <SectionsThird 
                        styledStatus={newStatus}
                        daysLate={newStatus.daysLate}
                        newValorParcela={newValorParcela}
                        fineInterestValues={fineInterestValues}
                    />

                </S.WrapButton>
                )
            })
        }
        </S.Container>
    )
}

export default ListHistoricalPlot

