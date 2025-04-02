import * as S from '../../styled'
import { TextC } from '../../../../../../../Typography'

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
        interestDailyValue,
        interestMonthlyValue,
        interestAnnualValue
    } = interestValue

    return (
        <>
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
        
        </>
    )
}

export default InterestRates