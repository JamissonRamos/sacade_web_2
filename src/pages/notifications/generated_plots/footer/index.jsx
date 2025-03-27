import * as S from './styled';

import { Theme } from '../../../../theme';

import { useNavigate } from 'react-router-dom';

const Footer = ({url, uid, buttonValue, buttonIcon, buttonNewRegister, clearStoredInstallments}) => {

    const navigate = useNavigate();

    const handleOnClick = (type) => {

        clearStoredInstallments();

        if(type){
            navigate(url, { state: { uid } })
        }else{
            navigate('/generateInstallments')
        }

    } 

    return (
        <S.Footer>

            <S.WrapButtons> 
                <S.ButtonOutline
                    onClick={() => handleOnClick(true)  }
                >
                    <span>{buttonValue}</span>
                    <>{Theme.Icons[buttonIcon]()}</>
                </S.ButtonOutline>
                {
                    buttonNewRegister &&
                    <S.ButtonContainer
                        onClick={() => handleOnClick(false)}
                    >
                        <span>Novo Parcela</span>
                        <Theme.Icons.RxCardStackPlus />
                    </S.ButtonContainer>
                }
            </S.WrapButtons>
        </S.Footer>
    )
}

export default Footer