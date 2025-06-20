import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useCallback, useState } from 'react';

export const GeneratePdf = () =>  {
    const [loading, setLoading] = useState(false);    
    
    
    const createDocPdf = useCallback(async (props) => {
        const {headersDoc, titleDoc, dataDoc, nameDoc} = props;
        // Cria um novo documento PDF
        const doc = new jsPDF();

        setLoading(true)
        try {
            // Título do PDF
            doc.text(titleDoc, 14, 15);
    
            // Cabeçalho da tabela e o corpo
            const headers = [headersDoc];
            const data = dataDoc;
            
            // Gera a tabela no PDF
            autoTable(doc, {
                head: headers,
                body: data,
                startY: 20, // Posição inicial Y (depois do título)
            });
            
            // Salva o PDF
            doc.save(`${nameDoc}.pdf`);
    
            return {
                success: true
            }
        } catch (error) {
            console.log('error no processo de gerar documento pdf', error);
            return{
                success: false,
                message: error
            }
            
        } finally {           
            setLoading(false)
        }

    }, [])
    
    return {
        createDocPdf,
        loading
    }

}