import * as S from './styled'
import { TextC } from '../../../../../../components/Typography'
import { useEffect, useState } from 'react';
import { FormatToCurrency, ParseCurrencyToNumber } from '../../../../scripts';

const Header = ({data, valueDiscount}) => {
    const [valueParcel, setValueParcel] = useState(0);
    const [formattedDiscountValue, setFormattedDiscountValue] = useState(valueDiscount);

    const { formattedSubTotal, formattedTotalCalculated, formattedValueInstallment
    } = data

    useEffect(() => {
            

        setFormattedDiscountValue(FormatToCurrency(valueDiscount))

        const valueSubTotal = ParseCurrencyToNumber(formattedSubTotal) 

        const calculeteValueParcel = valueSubTotal - valueDiscount
        
        const newValueParcel = FormatToCurrency(calculeteValueParcel)
        
        setValueParcel(newValueParcel)

    }, [valueDiscount, formattedSubTotal, data])
    
    return (
        <S.Container>
            <TextC.Display level={1} >Pagar Parcela</TextC.Display>
            <TextC.Body level={2} >Abaixo estão os dados da parcela.</TextC.Body>
            
            <S.WrapDataParcel>

                <S.WrapField>
                    <TextC.Body level={2} >Valor da Parcela</TextC.Body>
                    <TextC.Body level={2} > {formattedValueInstallment}</TextC.Body>
                </S.WrapField>

                {
                    formattedTotalCalculated !== 'R$ 0,00' 
                    ? (
                        <S.WrapField>
                            <TextC.Body level={2} >Multa e Juros:</TextC.Body>
                            <TextC.Body level={2} >{formattedValueInstallment}</TextC.Body>
                        </S.WrapField>
                    ) : null
                }
                {
                    valueDiscount > 0 
                    ? (
                        <S.WrapField>
                            <TextC.Body level={2} >Desconto:</TextC.Body>
                            <TextC.Body level={2} >{formattedDiscountValue}</TextC.Body>
                        </S.WrapField>
                    ) : null
                }
                
                <S.WrapField>
                    <TextC.Body level={2} >Total a ser pago:</TextC.Body>
                    <TextC.Body level={2} >{valueParcel}</TextC.Body>
                </S.WrapField>
            </S.WrapDataParcel>
        </S.Container>
    )
}

export default Header