import * as S from './styled'
import Body from './body'
import Header from './header'
import { useEffect, useState } from 'react'

const ModalPayments = (props) => {
    const { showModal } = props
    const [registerdData, setRegisterdData] = useState({})
    //Esses 2 states é para receber o valor digitado e passsar para o header da page
    const [valueDiscount, setValueDiscount] = useState(0)// Recebe o valor de desconto na parcela
    const [valueIncrease, setValueIncrease] = useState(0) //Recebe o valor de acrescimo na parcela
    const [valuePayments, setValuePayments] = useState(0) //Receber o Valor pago
    const [statusPayments, setStatusPayments] = useState(false) //True se parcela foi quitada

    //loading data from localStorage
    useEffect(() => {
        const dataParcel = localStorage.getItem('cardParcelData');
        if (dataParcel) {
            const parsedData = JSON.parse(dataParcel);
            setRegisterdData(parsedData);
        } else {
            console.log('Nenhum dado encontrado no localStorage.');
        }

        return () => {
            // Limpar o state quando o componente for desmontado
            setRegisterdData({});
        }
    }, [])

    // console.log('valuePayments', valuePayments);
    // console.log('statusPayments', statusPayments);
    
    return (
        <S.Container>
            <S.Content>
                <Header 
                    data={registerdData} 
                    valueDiscount={valueDiscount} 
                    valueIncrease={valueIncrease} 
                    valuePayments={valuePayments} 
                    setStatusPayments={setStatusPayments} 
                /> 
                <Body 
                    showModal={showModal}
                    setValueDiscount={setValueDiscount}
                    setValueIncrease={setValueIncrease}
                    setValuePayments={setValuePayments}
                />
            </S.Content>
        </S.Container>
    )
}

export default ModalPayments