import { useLocation } from "react-router-dom";
import { WrapPages } from "../../../components/Wrappe/pages";
import Header from "./header";
import { useEffect } from "react";
import { FetchDocuments } from "./scripts";


const PlotHistory = () => {
    const location = useLocation();  // Captura o UID da URL
    const { uid, fullName } = location.state || {};  // Captura o UID do estado de navegação

    useEffect(() => {

        
        FetchDocuments(uid)

    }, [])
    
    return (

        <WrapPages>

            <Header fullName={fullName} />
        </WrapPages>
    )
}

export default PlotHistory