import * as S from './styled';
import FinancialCards from "./financial_cards";
import { useEffect, useState } from 'react';
import { useInstallments } from '../../../../hooks/installments'
import { useMonthlyFee } from '../../../../hooks/monthlyFee'
import { CalculateAllDelays, CalculateAllDelaysMonth, CalculateAllPaymentsMonth } from '../../script';


const Financial = () => {
    const [dataInstallments, setDataInstallments] =  useState([]);
    const [dataMonthlyFee, setDataMonthlyFee] =  useState([]);
    const [resultsPayments, setResultsPayments] = useState({});
    const [resultsAllDelays, setResultsAllDelays] = useState({});
    const [resultsDelaysMonth, setResultsDelaysMonth] = useState({});

    const {getDocuments:getInstallments, loading: loadingInstallments } = useInstallments.useGetDocuments()
    const {getDocuments: getMonthlyFee, loading: loadingMonthlyFee } = useMonthlyFee.useGetDocuments()

    //recuperando os dados da base de dados
    const fetchData = async () => {
        try {
            const [installmentsResult, monthlyFeeResult] = await Promise.all([
                getInstallments(),
                getMonthlyFee()
            ]);

            if (installmentsResult.success) {
                setDataInstallments(installmentsResult.data);
            } else {
                console.error('Erro ao buscar parcelas:', installmentsResult.message);
            }

            if (monthlyFeeResult.success) {
                setDataMonthlyFee(monthlyFeeResult.data);
            } else {
                console.error('Erro ao buscar mensalidade:', monthlyFeeResult.message);
            }
        } catch (error) {
            console.error('Erro na busca de dados:', error);
        }
    }


    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        /* Chamar todas as funções relacionadas calculos de pagamentos */
        if (!dataMonthlyFee || dataMonthlyFee.length == 0) {
            setResultsPayments(0);
            return;
        }
        const {totalPaid, totalPayments} = CalculateAllPaymentsMonth(dataMonthlyFee)
        setResultsPayments({ totalPaid, totalPayments });
    }, [dataMonthlyFee]);

    useEffect(() => {
        /* Chamar todas as funções relacionadas calculos de parcelas */
        if (!dataInstallments || dataInstallments.length == 0) {
            setResultsDelaysMonth(0);
            return;
        }
        //Resultados dos calculos das parcelas, calculando o total e o valor de acordo a necessidade
        const {totalAmountDue, totalOverdueInstallments} = CalculateAllDelaysMonth(dataInstallments)        
        const {allTotalAmountDue, allTotalOverdueInstallments} = CalculateAllDelays(dataInstallments)  
        //Atibuindo valores para ser repassado para os cards
        setResultsDelaysMonth({totalAmountDue, totalOverdueInstallments});
        setResultsAllDelays({allTotalAmountDue, allTotalOverdueInstallments});

    }, [dataInstallments]);

    
    return (
        <S.Container>

            <FinancialCards 
                loading={loadingInstallments || loadingMonthlyFee}
                resultsPayments={resultsPayments}
                resultsDelaysMonth={resultsDelaysMonth}
                resultsAllDelays={resultsAllDelays}
            />
            <div>porcentagem a receber no mes</div>
            <div>grafico do recebido do ano</div>
        </S.Container>
    )
}

export default Financial