import { useEffect, useState } from 'react'
import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { FormatToCurrency } from '../scripts';

const Footer = (props) => {
    const { valueDiscount, valueIncrease, valuePayments, setBlockPaymentProcess } = props;

    const [currentInstallmentValue, setCurrentInstallmentValue] = useState(0); //Receber o valor da parcela
    const [totalInterestRatesCurrent, setTotalInterestRatesCurrent] = useState(0); //Receber o total de multa e juros
    const [currentValueDiscount, setCurrentValueDiscount] = useState(0); //Receber o Valor de Desconto da parcela
    const [currentValueIncrease, setCurrentValueIncrease] = useState(0); //Receber o Valor de Acresimo da pacela
    const [currentValuePayments, setCurrentValuePayments] = useState(0); //Recebe o Valor pago na parcela
    const [subTotal, setSubTotal] = useState(0); //Recebe o valo atualizado da parcela


    //Recuperar dados do localStorage e aplicar valores nas states
    useEffect(() => {
        //Recuperar array do localStorage
        const formattedDataParcel = JSON.parse(localStorage.getItem('cardParcelData')) || [];

        //Verificar se o array está vazio
        if (formattedDataParcel.length === 0) {
            console.log('Valores da parcela não foi gerado');
            return
        }   

        //Extrair os valores da parcela
        const {subTotal, totalCalculated, valueInstallment } = formattedDataParcel;

        setCurrentInstallmentValue(valueInstallment)
        setTotalInterestRatesCurrent(totalCalculated)
        setSubTotal(subTotal)

    }, [])


    //Atualizar valor da parcela
    useEffect(()=>{

        const formatValue = () => {
            setCurrentValueDiscount(valueDiscount);
            setCurrentValueIncrease(valueIncrease);
            setCurrentValuePayments(valuePayments);
            
            //Cacular total da parcela
            let calculateSubTotal = currentInstallmentValue + totalInterestRatesCurrent;

            //Calcular total parcela aplicando desconto ou acrecimo
            let calculateNewValue = calculateSubTotal + valueIncrease - valueDiscount;

            let paymentWithInstallmentValue = calculateNewValue - valuePayments;
            
            if(paymentWithInstallmentValue < 0){
                setBlockPaymentProcess(true)
                setSubTotal(paymentWithInstallmentValue);
            }else{
                setBlockPaymentProcess(false)
                setSubTotal(paymentWithInstallmentValue);
            }
            
        }
        formatValue();

    }, [valueDiscount, valueIncrease, valuePayments]);
    
    
    return (
        <S.Container>
        
            <S.WrapNotice>
            {
                subTotal < 0 && 
                    <S.WrapText>
                            <TextC.Body level={1}>O valor do desconto e o valor do pagamento não podem ser maiores do que o valor da parcela.</TextC.Body>
                    </S.WrapText>
            }
            </S.WrapNotice>

            <S.WrapDataParcel>
                <S.WrapField>
                    <TextC.Body level={2} > Valor da Parcela: </TextC.Body>
                    <TextC.Body level={2} > (+) {FormatToCurrency(currentInstallmentValue)} </TextC.Body>
                </S.WrapField>

                {
                    totalInterestRatesCurrent > 0 &&
                        <S.WrapField>
                            <TextC.Body level={2} > Multa e Juros: </TextC.Body>
                            <TextC.Body level={2} > (+) {FormatToCurrency(totalInterestRatesCurrent)} </TextC.Body>
                        </S.WrapField>
                }

                {
                    currentValueIncrease > 0 &&
                    <S.WrapField>
                        <TextC.Body level={2} >Acréscimo:</TextC.Body>
                        <TextC.Body level={2} >(+) {FormatToCurrency(currentValueIncrease)}</TextC.Body>
                    </S.WrapField>
                }

                    {
                        currentValueDiscount > 0 &&
                        <S.WrapField>     
                            <TextC.Body level={2} >Desconto:</TextC.Body>
                            <TextC.Body level={2} >(-) {FormatToCurrency(currentValueDiscount)}</TextC.Body>
                        </S.WrapField>
                    }

                <S.WrapField>

                    {
                        subTotal === 0
                        ?   <>
                                <TextC.Body level={2} > Valor Pago: </TextC.Body>
                                <TextC.Body level={2} >{FormatToCurrency(currentValuePayments)}</TextC.Body>
                            </>
                        :
                            <>
                                <TextC.Body level={2} >Total a Ser Pago:</TextC.Body>
                                <TextC.Body level={2} >{FormatToCurrency(subTotal)}</TextC.Body>
                            </>
                    }
                </S.WrapField>
            </S.WrapDataParcel>
        </S.Container>
    )
}

export default Footer