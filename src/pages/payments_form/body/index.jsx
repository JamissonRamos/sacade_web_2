import * as S from './styled'
import { useNavigate } from 'react-router-dom';
import Buttons from './components/buttons';
import ListPay from './components/listPay';

const Body = () => {
    const navigation = useNavigate();

    const buttonCancel = () => {
        localStorage.removeItem('parcelData');
        navigation(-1);
    }
    const buttonPay = () => {
        console.log('clicou no botão pay');
    }

    //Função para volta a lista de parcela mais tamebm limpar o local storage
    const handleClickButton = (e) => {
        const { name } = e.currentTarget

        switch (name) {
            case 'cancel':
                buttonCancel();
                break;
            case 'pay':
                buttonPay();
                break;
            default:
                console.log('Algo saiu errado');
                break;
        }
    }

    return (
        <S.Container>
            <Buttons 
                clickButton={handleClickButton}
            />
            <ListPay /> 
        </S.Container>
    )
}

export default Body