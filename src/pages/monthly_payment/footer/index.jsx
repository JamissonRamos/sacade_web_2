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
        const {totalCalculated, valueInstallment } = formattedDataParcel;

        //Cacular total da parcela
        let calculateSubTotal = valueInstallment + totalCalculated;
        
        setCurrentInstallmentValue(valueInstallment);
        setTotalInterestRatesCurrent(totalCalculated);
        setSubTotal(calculateSubTotal);
    }, []);


    useEffect(() => {
        setCurrentValueDiscount(valueDiscount);
        setCurrentValueIncrease(valueIncrease);
        setCurrentValuePayments(valuePayments);
        calculateSubTotal();

    }, [valueDiscount, valueIncrease, valuePayments ])

    const calculateSubTotal = () => {

        // Cacular total da parcela
        let subTotalInstallment = currentInstallmentValue + totalInterestRatesCurrent;

        //Retorna sem fazer o calculo
        if(subTotalInstallment === 0 ) return;

        //Calcular total parcela aplicando desconto ou acrecimo
        let calculateNewValue = subTotalInstallment + valueIncrease - valueDiscount;

        //Calcular valor da parcela com o pagamento e arendeonda o valor final
        let paymentWithInstallmentValue = Math.round((calculateNewValue - valuePayments) * 100) / 100;
        
        setSubTotal(paymentWithInstallmentValue);

        if(paymentWithInstallmentValue < 0){
            setBlockPaymentProcess(true);
        }else{
            setBlockPaymentProcess(false);
        }
    }
    
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

                    <TextC.Body level={2} > Valor Pago: </TextC.Body>
                    <TextC.Body level={2} >{FormatToCurrency(currentValuePayments)}</TextC.Body>

                </S.WrapField>

                <S.WrapField>
                    <TextC.Body level={2} >Total a Ser Pago:</TextC.Body>
                    <TextC.Body level={2} >{FormatToCurrency(subTotal)}</TextC.Body>
                </S.WrapField>
            </S.WrapDataParcel>
        </S.Container>
    )
}

export default Footer