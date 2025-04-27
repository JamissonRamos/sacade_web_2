import { useEffect, useState } from 'react';
import { WrapPages } from '../../../components/Wrappe/pages'
import Header from './header'
import Card from './components/card';
import ModalPayments from './components/modal_payments';
import * as S from './styled'   
import { Button } from 'react-bootstrap';
import { Theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';


const FormPayments = () => {
    const [parcelData, setParcelData] = useState([]); 
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigate();

    const handleShowModal = () => { 
        /* Função para abrir e fechar modal */
        setShowModal((prevState) => !prevState);
    };

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

        return () => {
            // Limpar o localStorage quando o componente for desmontado
            localStorage.removeItem('cardParcelData');
        }
    }, [])
    
    return (
        <WrapPages>
            <Header />
            <Card 
                data={parcelData} 
            />
            <S.WrapButtons>

                <S.WrapButtonCancel>
                    <Button
                        variant={'danger'}
                        onClick={() =>  navigation(-1)}
                        >   
                        <Theme.Icons.MdArrowBack/>
                        <span>Lista Parcelas</span> 
                    </Button>
                </S.WrapButtonCancel>

                <S.WrapButtonPay>
                    <Button
                        variant={'success'}
                        onClick={() => handleShowModal()}
                    >   
                        <Theme.Icons.MdAttachMoney/>
                        <span>Pagar Parcela</span> 
                    </Button>
                </S.WrapButtonPay>
            </S.WrapButtons>

            {
                showModal && 
                <ModalPayments 
                    showModal={handleShowModal} 
                    
                />
            }

        </WrapPages>
    )
}

export default FormPayments