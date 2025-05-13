import { useEffect, useState } from 'react'
import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { FormatToCurrency } from '../scripts';

const Footer = (props) => {
    const { valueDiscount, valueIncrease, valuePayments } = props;

    const [currentInstallmentValue, setCurrentInstallmentValue] = useState(0); //Valor da Parcela Atual
    const [totalInterestRatesCurrent, setTotalInterestRatesCurrent] = useState(0); // Juros e Taxas Caculadas
    const [currentValueDiscount, setCurrentValueDiscount] = useState(0); //Valor de Desconto 
    const [currentValueIncrease, setCurrentValueIncrease] = useState(0); // Valor de Acresimo 
    const [currentValuePayments, setCurrentValuePayments] = useState(0); // Valor de Acresimo 
    const [subTotal, setSubTotal] = useState(0);


    //Recuperar dados do localStorage
    useEffect(() => {
        //Recuperar array do localStorage
        const formattedDataParcel = JSON.parse(localStorage.getItem('cardParcelData')) || [];

        //Verificar se o array está vazio
        if (formattedDataParcel.length === 0) {
            console.log('Valores da parcela não foi gerado');
            return
        }   

        const {subTotal, totalCalculated, valueInstallment } = formattedDataParcel;

        setCurrentInstallmentValue(valueInstallment)
        setTotalInterestRatesCurrent(totalCalculated)
        setSubTotal(subTotal)

    }, [])

    //Validar dados a ser prenchdo
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

            if(calculateNewValue !== 0){
                setSubTotal(paymentWithInstallmentValue);
            }
            
        }
        formatValue();

    }, [valueDiscount, valueIncrease, valuePayments]);
    
    
    return (
        <S.Container>

            <div>
                {
                    subTotal < 0 && <span>Valor a ser PAgo não pode ser menor que 0</span>
                }
            </div>
            <div>
                {
                    subTotal === 0 && <span>Parcela Quitada e Fechada!</span>
                }
            </div>





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
                                <TextC.Body level={2} >Valor Pago:</TextC.Body>
                                <TextC.Body level={2} >{FormatToCurrency(valuePayments)}</TextC.Body>
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