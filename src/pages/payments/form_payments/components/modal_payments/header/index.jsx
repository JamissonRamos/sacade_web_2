import * as S from './styled'
import { TextC } from '../../../../../../components/Typography'
import { useEffect, useState } from 'react';
import { FormatToCurrency, ParseCurrencyToNumber } from '../../../../scripts';

const Header = ({data, valueDiscount, valueIncrease, valuePayments, setStatusPayments}) => {
    const [valueParcel, setValueParcel] = useState(0);
    const [formattedDiscountValue, setFormattedDiscountValue] = useState(valueDiscount);
    const [formattedIncreaseValue, setFormattedIncreaseValue] = useState(valueIncrease);

    const { formattedSubTotal, formattedTotalCalculated, formattedValueInstallment
    } = data

    //Carregar page e quando as depedencias for usadas
    useEffect(() => {
        setFormattedDiscountValue(FormatToCurrency(valueDiscount))
        setFormattedIncreaseValue(FormatToCurrency(valueIncrease))

        const valueSubTotal = ParseCurrencyToNumber(formattedSubTotal) 

        const calculeteValueParcel = (valueSubTotal - valueDiscount) + valueIncrease
        
        const FormattedValueParcel = FormatToCurrency(calculeteValueParcel)
        
        setValueParcel(FormattedValueParcel)

    }, [valueDiscount, valueIncrease, formattedSubTotal, data])
    
     //Limpar states ao desmontar page
    useEffect(() => {
        return () => {
            setValueParcel(0)
            setFormattedDiscountValue(0)
            setFormattedIncreaseValue(0)
        }
    }, [])

    //Veriifcar se parcela foi pago
    useEffect(() =>{
        console.log('Foi pago o valor de ', valuePayments);
        const valueSubTotal = ParseCurrencyToNumber(valueParcel) 
        console.log('Valor da parcela', valueSubTotal);
        
        
        const calculatePaymentAmountInstallmentAmount = valueSubTotal - valuePayments

        console.log('Valor da parcela', calculatePaymentAmountInstallmentAmount);
        
        
    }, [valuePayments, valueParcel])

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
                {
                    valueIncrease > 0 
                    ? (
                        <S.WrapField>
                            <TextC.Body level={2} >Acréscimo:</TextC.Body>
                            <TextC.Body level={2} >{formattedIncreaseValue}</TextC.Body>
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