import * as S from './styled';
import { WrapPages } from '../../components/Wrappe/pages'
import Header from './header'
import WrepButtons from './buttons';
import CardMonthlyFee from './card_monthly_fee';
import ListMonthlyPayment from './list_monthly_payment';
import DeleteMonthlyFee from './delete_monthly_fee';

import { ConvertDateBrUSS } from '../monthly_payment/scripts';
import { useMonthlyFee } from '../../hooks/monthlyFee';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MonthlyFeeDetails = () => {
    const [parcelData, setParcelData] = useState([]); 
    const [allPaymentMonthlFee, setAllPaymentMonthlyFee] = useState([]); 
    const [totalValueMonthlyFee, setTotalValueMonthlyFee] = useState(0); //Pegar o valor total da mensalidade dentro do card, onde é calculado o valor total da mensalidade 
    const [statusMonthlyFee, setStatusMonthlyFee] = useState(false); //Pegar o status da mensalidade para desabilitar o botão de pagamento caso seja status fechado
    const [showModalDelete, setShowModalDelete] = useState(false); //Controla o modal de exclusão
    const [idToDelete, setIdToDelete] = useState(null); //Receber o id do pagamento a ser excluida;
    const [idParcel, setIdParcel] = useState(null); //Receber o id da mensalidade para ser alterado;

    const navigate = useNavigate();

    const { documentsID, loading } = useMonthlyFee.useGetDocumentsIDMonthlyFee();

    // Função para calcular o valor total dos pagamentos
    const subTotalPayment = allPaymentMonthlFee.reduce((acc, item) => acc + item.amountPaid, 0);

    const buttonPay = () => {
        navigate('/monthlyPayment', { state: { uidMonthlyFee: parcelData[0].id, idForm: 1, subTotalPayment}});
    }

    const buttonDelete = (id) => {
        setShowModalDelete((prevState) => !prevState);
        setIdToDelete(id);
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
        setStatusMonthlyFee(dataParcel[0].statusLabel === 'Fechado' ? true : false);
        setIdParcel(dataParcel[0].id)
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
            case 'createrPay':
                buttonPay();
                break;
            case 'delete':
                buttonDelete(id);
                break;
            default:
                console.log('Opção de Botão Invalida');
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
                        uidPay={idToDelete}
                        uidParcel={idParcel}
                    />

            }
        </WrapPages>
    )
}

export default MonthlyFeeDetails