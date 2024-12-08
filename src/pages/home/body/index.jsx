import * as S from "./styled";
import {TextC} from "../../../components/Typography";
import { Theme } from "../../../theme";
import { useEffect, useState } from "react";
import { useStudents } from "../../../hooks/students";
import { useInstallments } from "../../../hooks/installments";
import { Spinner } from "react-bootstrap";
import { TotalInDelay } from "../script";

/* 
    Cria o hooks para pegar todoas as parcelas e mostra no home;


*/
const Body = () => {
    const [accountantStudents, setAccountantStudents] = useState(0);
    const [totalDelayedInstallments, setTotalDelayedInstallments] = useState(0);

    const {getDocuments, loading: loadingStudents} = useStudents.useGetDocuments();
    const {getDocuments: documentsInstallments, loading: loadingInstallments} = useInstallments.useGetDocuments();

    const fetchDocuments = async () => {
        const result = await getDocuments();
       

        const { success, data, message } = result;
        
        if(success){
            setAccountantStudents(data.length);
        }else{
            console.log('error: ', message);
            setAccountantStudents(`#Error`);
        }

        const resultInstallments = await documentsInstallments();
        
        
        if(resultInstallments.success){
            let result = TotalInDelay(resultInstallments.data)
            setTotalDelayedInstallments(result);

        }else{
            console.log('error: ',resultInstallments.message);
            setTotalDelayedInstallments(`#Error`);
        }
    };
    
    useEffect(() => {
      fetchDocuments();  // Chama a função ao renderizar o componente
    

    }, []);




    return (
        <S.Container>
            <S.SectionCards>
                <S.Card>
                    <S.WrapImg>
                        <img src={Theme.ImgC.CardStudentActive} alt="Alunos Ativos"/>
                    </S.WrapImg>

                    <S.WrapText>
                        <S.Title >
                        {
                            loadingStudents 
                                ?  <Spinner
                                        variant='success'
                                        size="sm"
                                        as="span"
                                        animation="border"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                :   <TextC.Label level={4}>{accountantStudents}</TextC.Label>
                            }
                        </S.Title>

                        <S.SubTitle >
                            <TextC.Body level={1}>Total de alunos ativos</TextC.Body>
                        </S.SubTitle>
                        
                    </S.WrapText>
                </S.Card>

                <S.Card>
                    <S.WrapImg>
                        <img src={Theme.ImgC.CardTotalRecebidoMes} alt="Total Recebido no Mes"/>
                    </S.WrapImg>

                    <S.WrapText>
                        <S.Title >
                            <TextC.Label level={3}>0</TextC.Label>
                        </S.Title>

                        <S.SubTitle >
                            <TextC.Body level={1}>Total recebido no mês</TextC.Body>
                        </S.SubTitle>
                        
                    </S.WrapText>
                </S.Card>

                <S.Card>
                    <S.WrapImg>
                        <img src={Theme.ImgC.CardTotalAtrasadoMes} alt="Total de Atrasados no Mês"/>
                    </S.WrapImg>

                    <S.WrapText>
                        <S.Title >
                            <TextC.Label level={3}>{totalDelayedInstallments}</TextC.Label>
                        </S.Title>

                        <S.SubTitle >
                            <TextC.Body level={1}>Total em atraso no mês</TextC.Body>
                        </S.SubTitle>
                        
                    </S.WrapText>
                </S.Card>
            </S.SectionCards>
        </S.Container>
    ) 
}

export default Body