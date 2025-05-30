import * as S from './styled'
import { TextC } from '../../../../../Typography'
import { FormatToCurrency, ParseCurrencyToNumber } from '../../../scripts';

const SectionsThird = ({daysLate, styledStatus, installmentValue, totalInterest}) => {
    

    
    const installment = ParseCurrencyToNumber(installmentValue);
    const fees = ParseCurrencyToNumber(totalInterest) || 0;

    const valueUpdated = FormatToCurrency(installment + fees)
    
    return (
    
        <S.Container>
            <S.WrapValues $fontColor={styledStatus}>

                <S.WrapValueInterest>
                    {
                        daysLate && daysLate > 0
                        ?
                            <>
                                <TextC.Title level={1}> Multa e Juros </TextC.Title>
                                <TextC.Title level={1}> {totalInterest} </TextC.Title>
                            </>
                        : null
                    }
    
                </S.WrapValueInterest>
                
                <S.WrapValueInterest>
                    <TextC.Title level={1}> Parcela </TextC.Title>
                    <TextC.Title level={1}> {installmentValue} </TextC.Title>
                </S.WrapValueInterest>

                <S.WrapSubTotal>
                    {
                        daysLate && daysLate > 0
                        ?
                            <>
                                <TextC.Title level={1}> SubTotal </TextC.Title>
                                <TextC.Title level={1}> {valueUpdated} </TextC.Title>
                            </>

                        :   null
                    }
                </S.WrapSubTotal>

            </S.WrapValues>
        </S.Container>
    )
}

export default SectionsThird;