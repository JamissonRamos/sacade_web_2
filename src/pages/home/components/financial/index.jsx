import * as S from './styled';
import FinancialCards from "./financial_cards";
import { useEffect, useState } from 'react';
import { useInstallments } from '../../../../hooks/installments'
import { useMonthlyFee } from '../../../../hooks/monthlyFee'
import { AccountantPaymentOpen, CalculateAllDelays, CalculateAllDelaysMonth, CalculateAllPaymentsMonth, CalculateAllPaymentsYear } from '../../script';
import PaymentReceiptGraph from './payment_receipt_graph';
import PaymentsGraphicMonth from './payments_graphic_month';

const Financial = () => {
    const [dataInstallments, setDataInstallments] =  useState([]);
    const [dataMonthlyFee, setDataMonthlyFee] =  useState([]);
    const [resultsPayments, setResultsPayments] = useState({});
    const [resultsAllDelays, setResultsAllDelays] = useState({});
    const [resultsDelaysMonth, setResultsDelaysMonth] = useState({});
    const [resultsPaymentReceiptGraph, setPaymentReceiptGraph] = useState({});
    const [resultAllPaymentsPerYear, setResultAllPaymentsPerYear] = useState({});

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
        // Valores padrão para manter a estrutura consistente

        if (!dataMonthlyFee || dataMonthlyFee.length == 0) {
            setResultsPayments({ totalPaid: 0, totalPayments: 0 });
            setResultAllPaymentsPerYear({allPaymentsPerMonth: 0});
            return;
        }
        const {totalPaid, totalPayments} = CalculateAllPaymentsMonth(dataMonthlyFee)
        const {allPaymentsPerMonth} = CalculateAllPaymentsYear(dataMonthlyFee)
        setResultsPayments({ totalPaid, totalPayments });
        setResultAllPaymentsPerYear({allPaymentsPerMonth});
        
    }, [dataMonthlyFee]);


    useEffect(() => {
        /* Chamar todas as funções relacionadas calculos de parcelas */

        if (!dataInstallments || dataInstallments.length == 0) {
            setResultsDelaysMonth({totalAmountDue: 0, totalOverdueInstallments: 0});
            setResultsAllDelays({allTotalAmountDue: 0, allTotalOverdueInstallments: 0});
            setPaymentReceiptGraph({totalMonthlyFeesPaid: 0, totalMonthlyFeesOutstanding: 0} )
            return;
        }
        //Resultados dos calculos das parcelas, calculando o total e o valor de acordo a necessidade
        const {totalAmountDue, totalOverdueInstallments} = CalculateAllDelaysMonth(dataInstallments)        
        const {allTotalAmountDue, allTotalOverdueInstallments} = CalculateAllDelays(dataInstallments)
        const {totalMonthlyFeesPaid, totalMonthlyFeesOutstanding} = AccountantPaymentOpen(dataInstallments)
        
        //Atibuindo valores para ser repassado para os cards
        setResultsDelaysMonth({totalAmountDue, totalOverdueInstallments});
        setResultsAllDelays({allTotalAmountDue, allTotalOverdueInstallments});
        setPaymentReceiptGraph({totalMonthlyFeesPaid, totalMonthlyFeesOutstanding} )
    }, [dataInstallments]);
    
    return (
        <S.Container>

            <FinancialCards 
                loading={loadingInstallments || loadingMonthlyFee}
                resultsPayments={resultsPayments}
                resultsDelaysMonth={resultsDelaysMonth}
                resultsAllDelays={resultsAllDelays}
                
                />
            <PaymentReceiptGraph 
                resultsPaymentReceiptGraph={resultsPaymentReceiptGraph}
                resultsDelaysMonth={resultsDelaysMonth}
                /> 
            <PaymentsGraphicMonth 
                resultAllPaymentsPerYear={resultAllPaymentsPerYear}
            
            />
        </S.Container>
    )
}

export default Financial