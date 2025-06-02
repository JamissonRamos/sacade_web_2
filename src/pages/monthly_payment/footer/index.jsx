import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { useEffect, useState } from 'react'
import { FormatToCurrency } from '../scripts';

const Footer = (props) => {
    const { valueDiscount, valueIncrease, valuePayments, setBlockPaymentProcess, setWasPaid} = props;

    const [valueIncreaseInput, setValueIncreaseInput] = useState(0); //Valor do Acrecimo Input;
    const [valueDiscountInput, setValueDiscountInput] = useState(0); //Valor de Desconto Input;

    const [subTotalFixed, setSubTotalFixed] = useState(0); //Valor da parcela calculando com valore fixado;
    const [subTotalInput, setSubTotalInput] = useState(0); //Valor da parcela calculando com valore do input;
    
    useEffect(() => {
        /* 
            -Carregar e atualizar staetes de valores da mensalidade;
            -Valores fixos
        */
        const dataPay = JSON.parse(localStorage.getItem('cardParcelData')) || [];
        
        if (dataPay.length === 0) return;

        //Verificar se vou precisar de todos esses valores, ou somente do subtotal
        const { subTotal } = dataPay;

        //SubTotal traz o valor que resta a pagar
        setSubTotalFixed(Math.round((subTotal) * 100 ) / 100 );
        // console.log('subTotal', subTotal);
        

    }, []); // Executa apenas na 1ª renderização

    useEffect(() => {
        // console.log('Passou inicio');
        
        setValueIncreaseInput(valueIncrease);
        setValueDiscountInput(valueDiscount);

        //Caso tenha alterados os campos para 0 voltar o valor inicial da mensalidade
        if(valuePayments === 0 && valueIncrease === 0 && valueDiscount === 0) {
            setSubTotalInput((prev) => {
                return prev - subTotalInput;
            }); 
            setBlockPaymentProcess(false);
            return
        }

        //Receber o valor do input de pagamento
        let calcInput = subTotalFixed; 
    
        calcInput += valueIncrease;
        calcInput -= valueDiscount;
        calcInput -= valuePayments; 
        
        setSubTotalInput(Math.round((calcInput) * 100 ) / 100);

        //Validar se foi pago o valor total da divida, caso sim true para alterar o status da parcela;
        calcInput <= 0 ? setWasPaid(true) : setWasPaid(false);

        console.log('calcInput', calcInput);
        console.log('calcInput formt', Math.round((calcInput) * 100 ) / 100);
        
        //Verifica se o valor do pagamento é maior que o valor da mensalidade
        if(calcInput <= -0.01 ){
            setBlockPaymentProcess(true);
        }else{
            setBlockPaymentProcess(false);
        }
        
        // console.log('Passou Final');
    }, [valuePayments, valueIncrease, valueDiscount])

    return (
        <S.Container>
            <S.WrapNotice>
                {
                    subTotalInput < 0 && 
                        <S.WrapText>
                                <TextC.Body level={1}>O valor do desconto ou do pagamento não pode ser superior ao valor da parcela.</TextC.Body>
                        </S.WrapText>
                }
                
            </S.WrapNotice>
            <S.WrapDataParcel>

                <S.WrapField>
                    <TextC.Body level={2} >Valor em Aberto:</TextC.Body>
                    <TextC.Body level={2} >{FormatToCurrency(subTotalFixed)}</TextC.Body>
                </S.WrapField>

                {
                    valueIncreaseInput > 0 &&
                    <S.WrapField>
                        <TextC.Body level={2} >Acréscimo:</TextC.Body>
                        <TextC.Body level={2} >(+) {FormatToCurrency(valueIncreaseInput)}</TextC.Body>
                    </S.WrapField>
                }
                {
                    valueDiscountInput > 0 &&
                    <S.WrapField>
                        <TextC.Body level={2} > Desconto: </TextC.Body>
                        <TextC.Body level={2} >(-) {FormatToCurrency(valueDiscountInput)}</TextC.Body>
                    </S.WrapField>
                }
                {
                    subTotalInput !== 0 && subTotalFixed !== subTotalInput &&
                    <S.WrapField>
                        <TextC.Body level={2} > { subTotalInput < 0 ? 'Ultrapassou:' : 'Falta Pagar:' } </TextC.Body>
                        <TextC.Body level={2} > {FormatToCurrency(subTotalInput)} </TextC.Body>
                    </S.WrapField>
                }
            </S.WrapDataParcel>

        </S.Container>
    )
}

export default Footer