import  * as S from './styled'

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInstallments } from "../../../hooks/installments";
import { DaysLate, SetStatus } from "./scripts";

import { WrapPages } from "../../../components/Wrappe/pages";
import Header from "./header";
import { LoadingOverlay } from "../../../components/spinner/global/styled";
import { Spinner } from "react-bootstrap";
import { TextC } from "../../../components/Typography";
import { ListsInstallment } from '../../../components/lists_custom/installment'


const PlotHistory = () => {
    const [registered, setRegistered] = useState([]);
    const { ListHistoricalPlot } = ListsInstallment;
    const location = useLocation();  // Captura o UID da URL
    const { uid, fullName } = location.state || {};  // Captura o UID do estado de navegação
    const { getDocuments, loading} = useInstallments.useGetDocuments()


    useEffect(() => {
        const fetch = async () => {
            const result = await getDocuments();
            const { success, data, error } = result;
            
            if(success){
                const filteredDataUid = data.filter(item => item.uid === uid) || []
                
                const addPropertyStatus = filteredDataUid.map(({ dueDate, statusPayment, ...props }) => ({
                    ...props, 
                    dueDate, 
                    statusPayment, 
                    daysLate: DaysLate(statusPayment, dueDate), 
                    statusLabel: SetStatus(statusPayment, dueDate )
                }));
                console.log('addPropriedadeStatus', addPropertyStatus)
                
                setRegistered(addPropertyStatus)
            }else{
                console.log('Error', error);
            }
        }
        fetch();
    }, [])
        
    return (

        <WrapPages>

            <Header fullName={fullName} />
            {
                loading &&
                <LoadingOverlay>
                    <Spinner
                        as="span"
                        animation="border"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Carregando os dados...</span>
                </LoadingOverlay> 
            }
            {
                registered && registered.length == 0
                ?<S.Empty>
                    <TextC.Display level={2} >
                        Nenhum cadastro
                    </TextC.Display>
                    <TextC.Body level={2}>
                        Não encontramos nenhum cadastro em nossa base de dados.
                    </TextC.Body>
                </S.Empty> 
                :<S.Content>
                    <ListHistoricalPlot data={registered}/>
                </S.Content>
            }


        </WrapPages>
    )
}

export default PlotHistory