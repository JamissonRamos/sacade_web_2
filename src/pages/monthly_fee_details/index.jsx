import { useEffect, useState } from 'react';
import { WrapPages } from '../../components/Wrappe/pages'
import Header from './header'
import CardMonthlyFee from './card_monthly_fee';
import WrepButtons from './buttons';
import { useNavigate } from 'react-router-dom';
import ListMonthlyPayment from './list_monthly_payment';
import { useMonthlyFee } from '../../hooks/monthlyFee';
import * as S from './styled';
import { ConvertDateBrUSS } from '../monthly_payment/scripts';
import DeleteMonthlyFee from './delete_monthly_fee';
const MonthlyFeeDetails = () => {
    const [parcelData, setParcelData] = useState([]); 
    const [allPaymentMonthlFee, setAllPaymentMonthlyFee] = useState([]); 
    const [totalValueMonthlyFee, setTotalValueMonthlyFee] = useState(0); //Pegar o valor total da mensalidade dentro do card, onde é calculado o valor total da mensalidade 
    const [statusMonthlyFee, setStatusMonthlyFee] = useState(false); //Pegar o status da mensalidade para desabilitar o botão de pagamento caso seja status fechado
    const [showModalDelete, setShowModalDelete] = useState(false); //Controla o modal de exclusão
    const [idToDelete, setIdToDelete] = useState(null); //Receber o id da mensalidade a ser excluida;

    const navigate = useNavigate();

    const { documentsID, loading } = useMonthlyFee.useGetDocumentsIDMonthlyFee();

    // Função para calcular o valor total dos pagamentos
    const subTotalPayment = allPaymentMonthlFee.reduce((acc, item) => acc + item.amountPaid, 0);

    const buttonPay = () => {
        
        navigate('/monthlyPayment', { state: { uidMonthlyFee: parcelData[0].id, idForm: 1, subTotalPayment} });
    }

    const buttonDelete = (id) => {
        // console.log('delete', id);
        setShowModalDelete((prevState) => !prevState);
        setIdToDelete(id);
        
        //navigate('/monthlyPayment', { state: { uidMonthlyFee: parcelData[0].id, idForm: 2, subTotalPayment, idPayment: id} });
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
        //statusLabel
        setStatusMonthlyFee(dataParcel[0].statusLabel === 'Fechado' ? true : false);
    }, []);

    //Buscas todos' os pagamento relacionado a mensalidade
    useEffect(() => {

        if(!parcelData[0]?.id) return;
        let uidMonthlyFee = parcelData[0].id || '';

        const fetchData = async () => {
            const result = await documentsID(uidMonthlyFee);
            const { success, data, message } = result;
            if (success) {
                //console.log('dta', data);
                
                //Ordena data por data de pagamento
                data.sort((a, b) => new Date(ConvertDateBrUSS(b.paymentDate)) - new Date(ConvertDateBrUSS(a.paymentDate)));

                setAllPaymentMonthlyFee(data);
            } else {
                console.log('Erro ao recuperar os dados:', message);
            }
        };
        fetchData();

    }, [parcelData]);

    //Função para volta a lista de parcela mais tamebm limpar o local storage
    const handleClickButton = (e) => {
        const { name, id } = e.currentTarget

        switch (name) {
            case 'cancel':
                //Retiaar essa função, pois não é mais necessário
                // buttonCancel();
                break;
            case 'createrPay':
                buttonPay();
                break;
            case 'delete':
                buttonDelete(id);
                break;
            default:
                console.log('Algo saiu errado');
                break;
        }
    }

    // const handleShowModalDelete = () => { 
    //     setShowModalDelete((prevState) => !prevState);
    // };

    return (

        <WrapPages>
            <Header />
            <S.Container>
                <CardMonthlyFee 
                    data={parcelData} 
                    setTotalValueMonthlyFee={setTotalValueMonthlyFee}
                />

                <WrepButtons 
                    clickButton={handleClickButton}
                    statusMonthlyFee={statusMonthlyFee}
                />

                <ListMonthlyPayment 
                    loading={loading}
                    data={allPaymentMonthlFee}
                    totalValueMonthlyFee={totalValueMonthlyFee}
                    clickButton={handleClickButton}
                />
            </S.Container>

            {
                showModalDelete &&
                    <DeleteMonthlyFee
                        showModalDelete={buttonDelete}
                        uid={idToDelete}
                    />

            }
        </WrapPages>
    )
}

export default MonthlyFeeDetails