import { Spinner } from 'react-bootstrap';
import TableCustom from '../components/tabel';
import * as S from './styled';
import { LoadingOverlay } from '../../../../../components/spinner/global/styled';
import { GeneratePdf } from '../../../../../hooks/createDocPdf';
import { useState } from 'react';
import { TextC } from '../../../../../components/Typography';
import { Theme } from '../../../../../theme';
import { ConverterFormatPayment, ConverterStatusMonthlyFee, FormatToCurrency } from '../../script';
import { AlertCustom } from '../../../../../components/alert_custom';

const Body = (props) => {
    const {loading, data} = props;
    // Estado para controlar o alerta de criação do PDF
    const [isCreatDocPdf, setIsisCreatDocPdf] = useState({showAlert: false, success: false, message: ''});
        
    const totalStudents = data.length || 0

    const {createDocPdf, loading: loadingCreateDocPdf } = GeneratePdf()
    
    // Função para gerar o PDF (placeholder)
    const handleGeneratePdf = async () => {
        // Recuperar o cabeçalho da tabela
        const headersDoc = ['#', 'Nome', 'Pagamento', 'Pago', 'Forma', 'Status'];
        // Recuperar o título do PDF
        const titleDoc = 'Relatório dos Pagamentos feitos no Mês';
        // Recuperar os dados do PDF
        const dataDoc = data.map((item, index) =>{
            const {paymentDate, amountPaid, paymentMethod, installment} = item
            const {statusPayment, student} = installment;
            const {firstName, lastName} = student;

            return [
                index + 1,
                `${firstName} ${lastName}`,
                paymentDate,
                FormatToCurrency(amountPaid),
                ConverterFormatPayment(paymentMethod),
                ConverterStatusMonthlyFee(statusPayment)

        ]});
        
        // Nome do arquivo PDF  
        const nameDoc = `relatorio_pagamentos_mes`;

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
                        totalStudents={totalStudents}
                    />
                    
            }

            <S.WrapButton> 
                <S.Button
                    type="button"
                    onClick={() => {handleGeneratePdf()}}
                    disabled={loadingCreateDocPdf}
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
        </S.Container>
    )
}

export default Body