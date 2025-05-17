import { useEffect, useState } from 'react';
import { WrapPages } from '../../components/Wrappe/pages'
import Header from './header'
import CardMonthlyFee from './card_monthly_fee';
import WrepButtons from './buttons';
import { useNavigate } from 'react-router-dom';
import ListMonthlyPayment from './list_monthly_payment';
import { useMonthlyFee } from '../../hooks/monthlyFee';
import * as S from './styled';
const MonthlyFeeDetails = () => {
    const [parcelData, setParcelData] = useState([]); 
    const [allPaymentMonthlFee, setAllPaymentMonthlyFee] = useState([]); 
    const navigate = useNavigate();

    const { documentsID, loading } = useMonthlyFee.useGetDocumentsIDMonthlyFee();

    const buttonCancel = () => {
        localStorage.removeItem('parcelData');
        navigate(-1);
    }

    const buttonPay = () => {
        const subTotalPayment = allPaymentMonthlFee.reduce((acc, item) => acc + item.amountPaid, 0);
        navigate('/monthlyPayment', { state: { uidMonthlyFee: parcelData[0].id, idForm: 1, subTotalPayment} });
    }

    const buttonUpdate = () => {
        console.log('Editar');
        navigate('/monthlyPayment', { state: { uidMonthlyFee: parcelData[0].id, idForm: 2} });
    }


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

    //Buscas todos' os pagamento relacionado a mensalidade
    useEffect(() => {

        if(!parcelData[0]?.id) return;
        let uidMonthlyFee = parcelData[0].id || '';

        const fetchData = async () => {
            const result = await documentsID(uidMonthlyFee);
            const { success, data, message } = result;
            if (success) {
                setAllPaymentMonthlyFee(data);
            } else {
                console.log('Erro ao recuperar os dados:', message);
            }
        };
        fetchData();

    }, [parcelData]);

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
            <ListMonthlyPayment 
                loading={loading}
                data={allPaymentMonthlFee}
                clickButton={handleClickButton}
            />
            
        </WrapPages>
    )
}

export default MonthlyFeeDetails