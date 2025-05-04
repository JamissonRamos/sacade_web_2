import { useEffect, useState } from 'react';
import { WrapPages } from '../../components/Wrappe/pages'
import Header from './header'
import Card from './card';
import Body from './body';

const PaymentsForm = () => {
    const [parcelData, setParcelData] = useState([]); 
        
    //loading data from localStorage
    useEffect(() => {
        //Recuperar array do localStorage
        const dataParcel = JSON.parse(localStorage.getItem('parcelData')) || [];
            
        //Verificar se o array está vazio
        if (dataParcel.length === 0) {
            console.log('parcelData vazio, Alguma coisa errada aconteceu');
            return
        }
        setParcelData(dataParcel);
    }, [])

    return (

        <WrapPages>
            <Header />
            <Card data={parcelData} />
            <Body />

        </WrapPages>
    )
}

export default PaymentsForm