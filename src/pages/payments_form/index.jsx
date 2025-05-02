import { useEffect, useState } from 'react';
import { WrapPages } from '../../components/Wrappe/pages'
import Header from './header'
import Card from './card';
import { Button } from 'react-bootstrap';

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

    console.log('parcelData', parcelData);
    
    return (

        <WrapPages>
            <Header />
            <Card data={parcelData} />
            
            <Button>pagar</Button>

            <hr />
            <h3>Pagamentos Feitos</h3>

            <ul>
                <li>data</li>
                <li>Forma Pagamento</li>
                <li>Acrescimos</li>
                <li>Descontos</li>
                <li>Valor Pago</li>
            </ul>


        </WrapPages>
    )
}

export default PaymentsForm