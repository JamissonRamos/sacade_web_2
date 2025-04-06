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
    const [registered, setRegistered] = useState([]); // full data
    const [selectedFilter, setSelectedFilter] = useState(""); // Armazena a opção do filtro selecionado
    const [filteredData, setFilteredData] = useState([]); // Armazena os dados filtrados
    const [statusCount, setStatusCount] = useState(0); // Armazena os dados filtrados

    const { ListHistoricalPlot } = ListsInstallment;
    const location = useLocation();  // Captura o UID da URL
    const { uid, fullName } = location.state || {};  // Captura o UID do estado de navegação
    const { getDocuments, loading} = useInstallments.useGetDocuments()

    useEffect(() => {
        console.log('passou');
        // Agora, contamos os status
        const statusCountMap = registered.reduce((acc, curr) => {
            const label = curr.statusLabel;
            acc[label] = (acc[label] || 0) + 1;
            acc['Tudo'] = (acc['Tudo'] || 0) + 1;
            return acc;
        }, {});

        console.log('statusCountMap', statusCountMap);
        setStatusCount(statusCountMap)
    }, [registered]);


    //LOADING
    useEffect(() => {
        const fetch = async () => {
            const result = await getDocuments();
            const { success, data, error } = result;
            
            if(success){
                const filteredDataUid = data.filter(item => item.uid === uid) || []

                //Add os atributos de status e dias em atraso
                console.log('filteredDataUid', filteredDataUid);
                
                const addPropertyStatus = filteredDataUid.map(({ dueDate, statusPayment, ...props }) => {
                    const resul = SetStatus(statusPayment, dueDate );
                    const {bg, textLabel} = resul;

                    return {
                        ...props, 
                        dueDate, 
                        statusPayment, 
                        daysLate: DaysLate(statusPayment, dueDate), 
                        statusLabel: textLabel,
                        styledComponent: bg
                    }
                })
                setRegistered(addPropertyStatus)
                setFilteredData(addPropertyStatus)
            }else{
                console.log('Error', error);
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


    return (

        <WrapPages>

            <Header 
                fullName={fullName} 
                setSelectedFilter={setSelectedFilter}
                statusCount={statusCount}
            />

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
                    <ListHistoricalPlot data={filteredData} />
                </S.Content>
            }

        </WrapPages>
    )
}

export default PlotHistory