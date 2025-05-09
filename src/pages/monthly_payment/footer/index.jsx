import { useEffect, useState } from 'react'
import * as S from './styled';
import { TextC } from '../../../components/Typography';

const Footer = () => {
    const [valueInstallment, setValueInstallment] = useState('R$ 0,00');
    const [totalCalculated, setTotalCalculated] = useState('R$ 0,00');
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

        const {formattedSubTotal, formattedTotalCalculated, formattedValueInstallment } = formattedDataParcel

        setValueInstallment(formattedValueInstallment);
        setTotalCalculated(formattedTotalCalculated);
        setSubTotal(formattedSubTotal);
    }, [])
    

    return (
        <S.Container>
            <S.WrapDataParcel>
                <S.WrapField>
                    <TextC.Body level={2} >Valor da Parcela</TextC.Body>
                    <TextC.Body level={2} >(+)  {valueInstallment}</TextC.Body>
                </S.WrapField>

                <S.WrapField>
                    <TextC.Body level={2} >Multa e Juros:</TextC.Body>
                    <TextC.Body level={2} >(+) {totalCalculated}</TextC.Body>
                </S.WrapField>

                <S.WrapField>
                        <TextC.Body level={2} >Acréscimo:</TextC.Body>
                    <TextC.Body level={2} >(+) R$ 100,00</TextC.Body>
                    </S.WrapField>

                    <S.WrapField>     
                        <TextC.Body level={2} >Desconto:</TextC.Body>
                        <TextC.Body level={2} >(-) R$ 10,00</TextC.Body>
                    </S.WrapField>

                <S.WrapField>
                    <TextC.Body level={2} >Total a Ser Pago:</TextC.Body>
                    <TextC.Body level={2} >{subTotal}</TextC.Body>
                </S.WrapField>
            </S.WrapDataParcel>
        </S.Container>
    )
}

export default Footer