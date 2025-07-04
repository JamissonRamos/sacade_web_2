import * as S from './styled'
import Body from './body'
import Header from './header'
import { useStudents } from '../../../../hooks/students'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExtractStudentData, SetUpPaymentConsultation } from '../script'
import { useMonthlyFee } from '../../../../hooks/monthlyFee'
import { useInstallments } from '../../../../hooks/installments'

const FinancialPaymentMonth = () => {
    const [clsAllPayments, setClsAllPayments] = useState([]) //Uma cnsulta(csl) todos os pagamentos, com alunos e suas parcelas
    const navigate = useNavigate();

    const {getDocuments: getStudents, loading: loadingStudent} = useStudents.useGetDocuments()
    const {getDocuments: getMonthlyFee, loading: loadingMonthlyFee } = useMonthlyFee.useGetDocuments()
    const {getDocuments: getInstallments, loading: loadingInstallments } = useInstallments.useGetDocuments()

    //Busca os dados na base de dados 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentsResult = await getStudents();
                if (!studentsResult.success) {
                    console.log('Erro ao buscar Alunos', studentsResult.error);
                    navigate('/notifications/error');
                    return;
                }

                const installmentsResult = await getInstallments();                
                if (!installmentsResult.success) {
                    console.log('Erro ao buscar Parcelas dos Alunos', installmentsResult.message);
                    navigate('/notifications/error');
                    return;
                }

                const monthlyFeeResult = await getMonthlyFee();
                if (!monthlyFeeResult.success) {
                    console.log('Erro ao buscar Fichas dos Alunos', monthlyFeeResult.message);
                    navigate('/notifications/error');
                    return;
                }

                //Verificando se tem dados a ser mostrados 
                if(!studentsResult.data || studentsResult.data.length === 0 ) return
                if(!installmentsResult.data || installmentsResult.data.length === 0 ) return
                if(!monthlyFeeResult.data || monthlyFeeResult.data.length === 0 ) return

                //Extrair dados das lista e passar para os states e ser alterados
                const resultExtractStudents = ExtractStudentData(studentsResult.data);
                const resultCls = SetUpPaymentConsultation(resultExtractStudents, installmentsResult.data, monthlyFeeResult.data)
                setClsAllPayments(resultCls);

            } catch (err) {
                console.log('Erro inesperado', err);
                navigate('/notifications/error');
            }
        };

    fetchData();
    }, []);

    return (
        <S.Container>
            <Header />

            <Body 
                loading={loadingStudent || loadingMonthlyFee || loadingInstallments}
                data={clsAllPayments}
            /> 
            
            {clsAllPayments.length === 0 && (
                <div className="text-center text-muted py-3">
                    <p>Não foi indentificdo nenhum pagamento nesse mês.</p>
                </div>
            )}
            
        </S.Container>
    )
}

export default FinancialPaymentMonth