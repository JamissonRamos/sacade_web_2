import { TextC } from '../../../../../../../Typography'
import * as S from '../../styled'

const InterestRates = ({fineInterestValues, styledStatus, interestValue}) => {
    
    const { bg, daysLate} = styledStatus;

    //Valores fixo de juros e multa monetário e porcentagem
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

    //Valor monetário de juros já calculado
    const { 
        interestFeesValue,
        interestDailyValue,
        interestMonthlyValue,
        interestAnnualValue
    } = interestValue

    return (
        <>
            {
                interestFeesValue !== "R$ 0,00" &&
                    <S.WrapInterestRates>

                        <S.WrapLabel $borderBColor={bg}>
                            <TextC.Label level={4}> Multa </TextC.Label>
                        </S.WrapLabel>

                        <S.WrapFeesMoney>
                            <TextC.Body level={1}> {interestFeesValue} </TextC.Body>
                        </S.WrapFeesMoney>

                    </S.WrapInterestRates>
            }

            {
                interestDailyValue !== "R$ 0,00" &&
                    <S.WrapInterestRates>
                        <S.WrapLabel $borderBColor={bg}>
                            <TextC.Label level={4}> Juros Diários </TextC.Label>
                        </S.WrapLabel>

                        <S.WrapFeesPercentage>
                            <TextC.Body level={1}> {interestDailyValue} </TextC.Body>
                        </S.WrapFeesPercentage>
                    </S.WrapInterestRates>
            }
            
            {
                interestMonthlyValue !== "R$ 0,00" &&
                    <S.WrapInterestRates>

                        <S.WrapLabel $borderBColor={bg}>
                            <TextC.Label level={4}> Juros Mesal </TextC.Label>
                        </S.WrapLabel>

                        <S.WrapFeesPercentage>
                            <TextC.Body level={1}> {interestMonthlyValue} </TextC.Body>
                        </S.WrapFeesPercentage>

                    </S.WrapInterestRates>
            }

            {
                interestAnnualValue !== "R$ 0,00" &&
                    <S.WrapInterestRates>

                        <S.WrapLabel $borderBColor={bg}>
                            <TextC.Label level={4}> Juros Anual </TextC.Label>
                        </S.WrapLabel>
                        
                        <S.WrapFeesPercentage>
                            <TextC.Body level={1}> {interestAnnualValue} </TextC.Body>
                        </S.WrapFeesPercentage>

                    </S.WrapInterestRates>
            }
        
        </>
    )
}

export default InterestRates