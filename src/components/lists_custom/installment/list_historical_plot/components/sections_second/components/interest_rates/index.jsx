import * as S from '../../styled'
import { TextC } from '../../../../../../../Typography'


const InterestRates = ({styledStatus, interestValue}) => {
    
    //Valor monetário de juros já calculado
    const { 
        interestFeesValue,
        interestDailyValue,
        interestMonthlyValue,
        interestAnnualValue
    } = interestValue

    const fildsComponents = [
        {label: 'Multa 2', value: interestFeesValue},
        {label: 'Juros Diários', value: interestDailyValue},
        {label: 'Juros Mesal', value: interestMonthlyValue},
        {label: 'Juros Anual', value: interestAnnualValue},
    ]   

    
    return (
        <>
            {
                fildsComponents.map(({label, value}) => {

                    if (value === "R$ 0,00") return

                    return (
                        <S.WrapInterestRates
                            key={label}
                        >

                            <S.WrapLabel $borderBColor={styledStatus}>
                                <TextC.Label level={4}> {label} </TextC.Label>
                            </S.WrapLabel>

                            <S.WrapFeesMoney>
                                <TextC.Body level={1}> {value} </TextC.Body>
                            </S.WrapFeesMoney>

                        </S.WrapInterestRates>
                        
                    )
                })
            }
        </>
    )
}

export default InterestRates