import { useLocation } from "react-router-dom";
import { WrapPages } from "../../../components/Wrappe/pages";
import Header from "./header";
import { useEffect, useState } from "react";
import { FetchDocuments } from "./scripts";
import { useInstallments } from "../../../hooks/installments";
import { LoadingOverlay } from "../../../components/spinner/global/styled";
import { Spinner } from "react-bootstrap";
import  * as S from './styled'
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
            const result = await FetchDocuments(getDocuments, uid)
            const { success, data, error } = result;

            if(success){
                setRegistered(data)
            }else{
                console.log('Error', error);
            }
        }
        fetch();
    }, [])
    

    console.log('registered', registered);
    
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