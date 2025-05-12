import { useEffect, useState } from 'react'
import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { FormatToCurrency } from '../scripts';

const Footer = (props) => {
    const { valueDiscount, valueIncrease, valuePayments } = props;

    const [currentInstallmentValue, setCurrentInstallmentValue] = useState('R$ 0,00'); //Valor da Parcela Atual
    const [totalInterestRatesCurrent, setTotalInterestRatesCurrent] = useState('R$ 0,00'); // Juros e Taxas Caculadas
    const [currentValueDiscount, setCurrentValueDiscount] = useState('R$ 0,00'); //Valor de Desconto 
    const [currentValueIncrease, setCurrentValueIncrease] = useState('R$ 0,00'); // Valor de Acresimo 
    const [subTotal, setSubTotal] = useState('R$ 0,00');


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

        setCurrentInstallmentValue(valueInstallment);
        setTotalInterestRatesCurrent(totalCalculated);
        setSubTotal(subTotal);
    }, [])

    //Validar dados a ser prenchdo
    useEffect(()=>{

        const formatValue = () => {
            setCurrentValueDiscount(valueDiscount);
            setCurrentValueIncrease(valueIncrease);


        }
        formatValue();

    }, [valueDiscount, valueIncrease]);
    

    
    return (
        <S.Container>
            <S.WrapDataParcel>
                <S.WrapField>
                    <TextC.Body level={2} > Valor da Parcela: </TextC.Body>
                    <TextC.Body level={2} > (+) {FormatToCurrency(currentInstallmentValue)} </TextC.Body>
                </S.WrapField>

                {
                    totalInterestRatesCurrent > 0 &&
                        <S.WrapField>
                            <TextC.Body level={2} > Multa e Juros: </TextC.Body>
                            <TextC.Body level={2} > (+) {FormatToCurrency(totalInterestRatesCurrent)}</TextC.Body>
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
                    <TextC.Body level={2} >Total a Ser Pago:</TextC.Body>
                    <TextC.Body level={2} >{FormatToCurrency(subTotal)}</TextC.Body>
                </S.WrapField>
            </S.WrapDataParcel>
        </S.Container>
    )
}

export default Footer