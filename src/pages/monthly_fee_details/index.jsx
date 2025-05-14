import { useEffect, useState } from 'react';
import { WrapPages } from '../../components/Wrappe/pages'
import Header from './header'
import CardMonthlyFee from './card_monthly_fee';
import WrepButtons from './buttons';
import { useNavigate } from 'react-router-dom';
import ListMonthlyPayment from './list_monthly_payment';

const MonthlyFeeDetails = () => {
    const [parcelData, setParcelData] = useState([]); 
    const navigate = useNavigate();

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
    }, []);

    const buttonCancel = () => {
        localStorage.removeItem('parcelData');
        navigate(-1);
    }

    const buttonPay = () => {
        console.log('pagamento');
        navigate('/monthlyPayment', { state: { uidMonthlyFee: parcelData[0].id, idForm: 1} });
    }

    const buttonUpdate = () => {
        console.log('Editar');
        navigate('/monthlyPayment', { state: { uidMonthlyFee: parcelData[0].id, idForm: 2} });
    }

    //Função para volta a lista de parcela mais tamebm limpar o local storage
    const handleClickButton = (e) => {
        const { name } = e.currentTarget

        switch (name) {
            case 'cancel':
                buttonCancel();
                break;
            case 'createrPay':
                buttonPay();
                break;
            case 'updatePay':
                buttonUpdate();
                break;
            default:
                console.log('Algo saiu errado');
                break;
        }
    }

    return (

        <WrapPages>
            <Header />
            <CardMonthlyFee data={parcelData} />
            <WrepButtons clickButton={handleClickButton}/>
            <ListMonthlyPayment clickButton={handleClickButton}/>
            
        </WrapPages>
    )
}

export default MonthlyFeeDetails