import * as S from './styled'
import { TextC } from '../../../../../../components/Typography'
import { useEffect, useState } from 'react';
import { FormatToCurrency, ParseCurrencyToNumber } from '../../../../scripts';

const Header = ({data, valueDiscount, valueIncrease, valuePayments, setStatusPayments}) => {
    const [valueParcel, setValueParcel] = useState(0);
    const [formattedDiscountValue, setFormattedDiscountValue] = useState(valueDiscount);
    const [formattedIncreaseValue, setFormattedIncreaseValue] = useState(valueIncrease);
    const [formattedPaymentsValue, setFormattedPaymentsValue] = useState(valuePayments);
    const [msgStatusParcel, setMsgStatusParcel] = useState('');

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

    //Verificar as depedencias e ajusta o status da parcela
    useEffect(() =>{
        setFormattedPaymentsValue(FormatToCurrency(valuePayments))
        const valueSubTotal = ParseCurrencyToNumber(valueParcel) 

        const calculatePaymentAmountInstallmentAmount = valueSubTotal - valuePayments

        if(calculatePaymentAmountInstallmentAmount > 0){
            //Parcela em Aberto
            setStatusPayments(false)
            setMsgStatusParcel(
                {status: false, msg:'A parcela ainda continua em aberto.'}
            )
        }else{
            //Parcela Fechada
            setStatusPayments(true)
            setMsgStatusParcel(
                {status: true, msg:'A parcela foi quitada.'}
            )
        }

    }, [valuePayments, valueParcel])

    return (
        <S.Container>
            <TextC.Display level={1}>Pagar Parcela</TextC.Display>
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
                    <TextC.Body level={2} >Total a Ser Pago:</TextC.Body>
                    <TextC.Body level={2} >{valueParcel}</TextC.Body>
                </S.WrapField>

                {
                    valuePayments > 0
                    ?
                        <S.WrapField>
                            <TextC.Body level={2} >Valor Pago:</TextC.Body>
                            <TextC.Body level={2} >{formattedPaymentsValue}</TextC.Body>
                        </S.WrapField>

                    :   null
                }
            </S.WrapDataParcel>
            {
                valuePayments > 0 &&
                <S.WrapStatusParcel $bg={msgStatusParcel.status}>
                    <TextC.Body level={2}>{msgStatusParcel.msg}</TextC.Body>
                </S.WrapStatusParcel>
            }

        </S.Container>
    )
}

export default Header