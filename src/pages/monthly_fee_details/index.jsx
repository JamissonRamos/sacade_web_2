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
    const [totalValueMonthlyFee, setTotalValueMonthlyFee] = useState(0); //Pegar o valor total da mensalidade dentro do card, onde é calculado o valor total da mensalidade 
    const navigate = useNavigate();

    const { documentsID, loading } = useMonthlyFee.useGetDocumentsIDMonthlyFee();

    const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split('/');
        return new Date(`${month}/${day}/${year}`);
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
                //Ordena data por data de pagamento
                data.sort((a, b) => parseDate(b.paymentDate) - parseDate(a.paymentDate));

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
                //Retiaar essa função, pois não é mais necessário
                // buttonCancel();
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
            <S.Container>
                <CardMonthlyFee 
                    data={parcelData} 
                    setTotalValueMonthlyFee={setTotalValueMonthlyFee}
                />

                <WrepButtons clickButton={handleClickButton}/>

                <ListMonthlyPayment 
                    loading={loading}
                    data={allPaymentMonthlFee}
                    totalValueMonthlyFee={totalValueMonthlyFee}
                    clickButton={handleClickButton}
                />
                
            </S.Container>

        </WrapPages>
    )
}

export default MonthlyFeeDetails