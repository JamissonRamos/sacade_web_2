import * as S from './styled'
import Body from './body'
import Header from './header'
import { useStudents } from '../../../../hooks/students'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExtractStudentData } from '../script'
import { useInstallments } from '../../../../hooks/installments'
import { DelayMonthlyPaymentsMonth } from '../../../../hooks/consultations/students_installments/delay_monthly_paymentsMonth'

const FinancialDelayMonth = () => {
    const [consultation, setConsultation] = useState([]) //Uma cnsulta(csl) todos os pagamentos, com alunos e suas parcelas
    const navigate = useNavigate();

    const {getDocuments: getStudents, loading: loadingStudent} = useStudents.useGetDocuments();
    const {getDocuments: getInstallments, loading: loadingInstallments } = useInstallments.useGetDocuments();

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

                //Verificando se tem dados a ser mostrados 
                if(!studentsResult.data || studentsResult.data.length === 0 ) return
                if(!installmentsResult.data || installmentsResult.data.length === 0 ) return

                //Extrair dados das lista e passar para os states e ser alterados
                const resultExtractStudents = ExtractStudentData(studentsResult.data);
                const resultCls = DelayMonthlyPaymentsMonth(resultExtractStudents, installmentsResult.data);
                
                setConsultation(resultCls);

            } catch (err) {
                console.log('Erro inesperado', err);
                navigate('/notifications/error');
            }
        };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return (
        <S.Container>
            <Header />

            <Body 
                loading={loadingStudent || loadingInstallments}
                data={consultation}
            />             
        </S.Container>
    )
}

export default FinancialDelayMonth