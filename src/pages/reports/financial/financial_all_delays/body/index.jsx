import * as S from './styled';
import { Spinner } from 'react-bootstrap';
//import TableCustom from '../components/tabel';
import { LoadingOverlay } from '../../../../../components/spinner/global/styled';
import { GeneratePdf } from '../../../../../hooks/createDocPdf';
import { useState } from 'react';
import { TextC } from '../../../../../components/Typography';
import { Theme } from '../../../../../theme';
import { FormatToCurrency } from '../../script';
import { AlertCustom } from '../../../../../components/alert_custom';
import TableCustom from '../components/tabel';

const Body = (props) => {
    const {loading, data} = props;
    // Estado para controlar o alerta de criação do PDF
    const [isCreatDocPdf, setIsisCreatDocPdf] = useState({showAlert: false, success: false, message: ''});
        
    const totalItemQuery = data.reduce(
        (total, student) => total + (student.overdueInstallments?.length || 0),0
    );

    const {createDocPdf, loading: loadingCreateDocPdf } = GeneratePdf()
    
    // Função para gerar o PDF (placeholder)
    const handleGeneratePdf = async () => {
        // Recuperar o cabeçalho da tabela
        const headersDoc = ['#', 'Nome', 'Vencimento', 'Dias', 'Mensalidade', 'Multa e Juros', "Total"];
        // Recuperar o título do PDF
        const titleDoc = 'Relatório Atraso do Mês';
        // Recuperar os dados do PDF
        const dataDoc = data.flatMap((students, i) => 
        {
            const {overdueInstallments, firstName, lastName } = students;

            return overdueInstallments.map((installment) => {
                const { dueDate, daysDelay, valueInstallment, feesValueMonetary, interestAnnualValueMonetary, interestDailyValueMonetary, interestMonthlyValueMonetary} = installment;
                    const totalInterest = feesValueMonetary + interestAnnualValueMonetary + interestDailyValueMonetary + interestMonthlyValueMonetary
                    const subInstallment = valueInstallment + totalInterest;

                    return [
                        i + 1,
                        `${firstName} ${lastName}`, 
                        dueDate,
                        daysDelay,
                        FormatToCurrency(valueInstallment),
                        FormatToCurrency(totalInterest),
                        FormatToCurrency(subInstallment),
                    ]
            })

        });

        // Nome do arquivo PDF  
        const nameDoc = `relatorio_atraso_do_mes`;

        //GeneratePdf
        const result = await createDocPdf({headersDoc, titleDoc, dataDoc, nameDoc});
        const { success, message } = result;
        if (success) {
            setIsisCreatDocPdf({showAlert: true, success: true, message: 'PDF gerado com sucesso!'});
        }else{
            setIsisCreatDocPdf({showAlert: true, success: false, message: 'Erro ao gerar PDF.'});
            console.error('Erro ao gerar PDF:', message); 
        }
    } 

    return (
        <S.Container>
            {isCreatDocPdf.showAlert &&
                <AlertCustom 
                    variant={isCreatDocPdf.success ? 'success' : 'danger'}
                    handleCloseAlert={() => setIsisCreatDocPdf({success: false, message: ''})}>
                    {isCreatDocPdf.message}
                </AlertCustom>
            }
            
            {loading
                ?
                    <LoadingOverlay>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        <span>Carregando os dados...</span>
                    </LoadingOverlay>
                :
                    <TableCustom 
                        data={data} 
                        totalItemQuery={totalItemQuery}
                    />
                    
            }

            {
                totalItemQuery > 0 &&
                <S.WrapButton> 
                    <S.Button
                        type="button"
                        onClick={() => {handleGeneratePdf()}}
                        disabled={loadingCreateDocPdf || !totalItemQuery}
                        
                    >
                        { loadingCreateDocPdf 
                            ?   
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span> Gerando Documento... </span>
                                </> 
                            :
                                <>
                                    <TextC.Label>Baixar Dados</TextC.Label>
                                    <Theme.Icons.MdSaveAlt />
                                </>
                        }

                    </S.Button>
                </S.WrapButton>
            }
        </S.Container>
    )
}

export default Body