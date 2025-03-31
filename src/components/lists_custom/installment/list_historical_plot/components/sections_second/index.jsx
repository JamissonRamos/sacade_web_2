import { TextC } from '../../../../../Typography'
import * as S from './styled'

const SectionsSecond = ({  fineInterestValues, styledStatus}) => {
    const { bg } = styledStatus;
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
            </S.WrapInterestRates>

        </S.Container>
    )
}

export default SectionsSecond