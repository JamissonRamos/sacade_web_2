import  * as S from './styled'

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInstallments } from "../../hooks/installments";
import {  AddPaymentStatusProperties} from "./scripts";

import { WrapPages } from "../../components/Wrappe/pages";
import Header from "./header";
import { LoadingOverlay } from "../../components/spinner/global/styled";
import { Spinner } from "react-bootstrap";
import { TextC } from "../../components/Typography";
import { ListsInstallment } from '../../components/lists_custom/installment'

const PlotHistory = () => {
    const [registered, setRegistered] = useState([]); // full data
    const [filteredData, setFilteredData] = useState([]); // Armazena os dados filtrados
    const [selectedFilter, setSelectedFilter] = useState(""); // Armazena a opção do filtro selecionado
    const [statusCount, setStatusCount] = useState(0); // Armazena os dados filtrados
    const { ListHistoricalPlot } = ListsInstallment;
    const navigate = useNavigate();
    const location = useLocation();  // Captura o UID da URL
    const { uid, typeForm,  fullName } = location.state || {};  // Captura dos atributos do localStorage, typeForm e fullName: 1 = update, 2 = pagamento
    const { getDocuments, loading} = useInstallments.useGetDocuments()

    // Fução para filtrar os status e somar as qtds
    useEffect(() => {
        // Agora, contamos os status
        const statusCountMap = registered.reduce((acc, curr) => {
            const label = curr.statusLabel;
            acc[label] = (acc[label] || 0) + 1;
            acc['Tudo'] = (acc['Tudo'] || 0) + 1;
            return acc;
        }, {});

        setStatusCount(statusCountMap)
    }, [registered]);

    //LOADING
    useEffect(() => {
        const fetch = async () => {
            const result = await getDocuments();
            const { success, data, error } = result;
            if(success){
                const filteredDataUid = data.filter(item => item.uid === uid) || []
                const newFilteredData = AddPaymentStatusProperties(filteredDataUid);
                if(newFilteredData.length > 0){
                    // Caso não tenha parcelas, os valores dos usestate do inicio
                    setRegistered(newFilteredData)
                    setFilteredData(newFilteredData)
                }
            }else{
                console.error('Erro ao buscar os dados:', error);
            }
        }

        fetch();
    }, [])


    //FILTER STATUS
    useEffect(() => {
        //Filtrar as parcelas pelo click dos buttons de filtro
        const filterDataStatus = registered.filter(({statusLabel}) => {
            if (selectedFilter === 'Tudo'){
                return true;
            }
            return statusLabel == selectedFilter;
        })
        setFilteredData(filterDataStatus)
    }, [selectedFilter])

    const handleNavigation = (id) => {
        //Filter somente ua parcela, que vai ser alterda
        const selectDataUid = registered.filter(item => item.id === id) || []       
        //Passar parcela para local storage
        localStorage.setItem('parcelData', JSON.stringify(selectDataUid));
        if(typeForm === 1){
            // Navegação para o update de parcelas    
            navigate('/updateInstallments/formUpdate');        
        }else if(typeForm === 2){
            // Navegação para o update de parcelas    
           // navigate('/plotHistory/form_update');        
        }


    }

    return (

        <WrapPages>
            <Header fullName={fullName} setSelectedFilter={setSelectedFilter} statusCount={statusCount}/>
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
                    </ LoadingOverlay> 
            }

            {
                filteredData && filteredData.length == 0
                ?<S.Empty>
                    <TextC.Display level={2} >
                        Nenhum cadastro
                    </TextC.Display>
                    <TextC.Body level={2}>
                        Não encontramos nenhum cadastro em nossa base de dados.
                    </TextC.Body>
                </S.Empty> 
                :<S.Content>
                    <ListHistoricalPlot data={filteredData} navigation={handleNavigation}/>
                </S.Content>
            }

        </WrapPages>
    )
}

export default PlotHistory