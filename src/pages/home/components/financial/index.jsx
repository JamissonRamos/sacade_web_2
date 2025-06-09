import * as S from './styled';
import FinancialCards from "./financial_cards";
import { useEffect, useState } from 'react';
import { useInstallments } from '../../../../hooks/installments'

const Financial = () => {
    const [registered, setRegistered] =  useState([]);
    const {getDocuments, loading } = useInstallments.useGetDocuments()

    const fetchData = async () => {
        const result = await getDocuments();
        const {success, data, message} = result;

        if(success){
            setRegistered(data)
        }else{
            console.log('Erro ao Buscas dados', message);
        }

    }

    useEffect(() => {
        console.log('Carregnado os meus dados');
        fetchData();
    }, [])



    return (
        <S.Container>

            <FinancialCards 
                loading={loading}
            />
            <div>porcentagem a receber no mes</div>
            <div>grafico do recebido do ano</div>
        </S.Container>
    )
}

export default Financial