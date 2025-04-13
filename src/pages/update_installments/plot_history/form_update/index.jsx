import * as S from './styled';
import { useEffect, useState } from "react"
import { WrapPages } from "../../../../components/Wrappe/pages";
import Header from './header';
import Form from './form';


const FormUpdateInstallment = () => {
    const [registered, setRegistered] = useState([]);

    //Remover parcelData local storage
    useEffect(() => {
        const parcelData = localStorage.getItem('parcelData');
        // Verifica se há dados e converte de JSON para objeto
        if (parcelData) {
            const parsedData = JSON.parse(parcelData);
            setRegistered(parsedData)
        } else {
            console.log('Nenhum dado encontrado com a chave parcelData');
        }
    
        return () => {
            console.log('passou depois')
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