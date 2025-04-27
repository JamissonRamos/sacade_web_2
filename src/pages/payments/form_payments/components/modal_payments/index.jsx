import * as S from './styled'
import Body from './body'
import Header from './header'
import { useEffect, useState } from 'react'

const ModalPayments = (props) => {
    const { showModal } = props
    const [registerdData, setRegisterdData] = useState({})



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

    
    return (
        <S.Container>
            <S.Content>
                <Header data={registerdData}/> 
                <Body 
                    showModal={showModal}
                />
            </S.Content>
        </S.Container>
    )
}

export default ModalPayments