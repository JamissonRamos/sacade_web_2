import * as S from './styled';

import { WrapPages } from "../../../components/Wrappe/pages";
import Header from './header';
import Form from './form';

import { useEffect, useState } from "react"

const FormUpdateInstallment = () => {
    const [registered, setRegistered] = useState([]);

    //Remover parcelData local storage
    useEffect(() => {
        const parcelData = localStorage.getItem('parcelData');
        // Verifica se há dados e converte de JSON para objeto
        if (parcelData) {
            const parsedData = JSON.parse(parcelData);
            console.log('parsedData', parsedData);
            
            setRegistered(parsedData)
        } else {
            console.log('Nenhum dado encontrado com a chave parcelData');
        }
        
        return () => {
            localStorage.removeItem('parcelData')
        }
        
    }, [])
    
    return (
            <WrapPages>
                <S.Content>
                    <Header />

                    <Form 
                        registered={registered}
                    /> 
                </S.Content>
            </WrapPages>
    )
}

export default FormUpdateInstallment