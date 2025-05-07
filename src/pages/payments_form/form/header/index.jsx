import * as S from './styled';
import { TextC } from '../../../../components/Typography';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

const Header = () => {
    const [valueInstallment, setValueInstallment] = useState('R$ 0,00');
    const [totalCalculated, setTotalCalculated] = useState('R$ 0,00');
    const [subTotal, setSubTotal] = useState('R$ 0,00');
    

    const { pathname } = useLocation();
    
    // Determina o tipo de formulário baseado no pathname
    const isCreateForm = useMemo(() => {
        const lastPart = pathname.split('/').pop();
        return lastPart !== 'update';
    }, [pathname]);

    const title = isCreateForm ? 'Pagar Parcela' : 'Atualizar Parcela';

    //loading data from localStorage
    useEffect(() => {
        //Recuperar array do localStorage
        const dataParcel = JSON.parse(localStorage.getItem('cardParcelData')) || [];

        //Verificar se o array está vazio
        if (dataParcel.length === 0) {
            console.log('parcelData vazio, Alguma coisa errada aconteceu');
            return
        }

        const {formattedSubTotal, formattedTotalCalculated, formattedValueInstallment } = dataParcel

        setValueInstallment(formattedValueInstallment);
        setTotalCalculated(formattedTotalCalculated);
        setSubTotal(formattedSubTotal);
    }, [])
    
    

    return (
        <S.Container>
            <TextC.Display level={1}>
                {title}
            </TextC.Display>
            <TextC.Body level={2}>
                Abaixo estão os dados da parcela.
            </TextC.Body>

            <S.WrapDataParcel>
                <S.WrapField>
                    <TextC.Body level={2} >Valor da Parcela</TextC.Body>
                    <TextC.Body level={2} > {valueInstallment}</TextC.Body>
                </S.WrapField>

                
                <S.WrapField>
                    <TextC.Body level={2} >Multa e Juros:</TextC.Body>
                    <TextC.Body level={2} >{totalCalculated}</TextC.Body>
                </S.WrapField>
                <S.WrapField>
                    <TextC.Body level={2} >Total a Ser Pago:</TextC.Body>
                    <TextC.Body level={2} >{subTotal}</TextC.Body>
                </S.WrapField>

            </S.WrapDataParcel>
        </S.Container>
    );
};

export default Header;