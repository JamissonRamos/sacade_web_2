import * as S from './styled'
import { useNavigate } from 'react-router-dom';
import WrepButtons  from './components/buttons';
import ListPay from './components/listPay';

const Body = () => {
    const navigation = useNavigate();

    const buttonCancel = () => {
        localStorage.removeItem('parcelData');
        navigation(-1);
    }
    const buttonPay = () => {
        navigation('/paymentsForm/form/create');
    }
    const buttonUpdate = () => {
        navigation('/paymentsForm/form/update');
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
            case 'update':
                buttonUpdate();
                break;
            default:
                console.log('Algo saiu errado');
                break;
        }
    }

    return (
        <S.Container>
            <WrepButtons 
                clickButton={handleClickButton}
            />
            <ListPay 
                clickButton={handleClickButton}
            /> 
        </S.Container>
    )
}

export default Body