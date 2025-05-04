import { Button } from 'react-bootstrap'
import * as S from './styled'
import { Theme } from '../../../../../theme';
import { TextC } from '../../../../../components/Typography';

const WrepButtons = ({clickButton}) => {


    return (
        <S.Container>
            <S.WrapButtons>
                <S.WrapButtonCancel>
                    <Button
                        name='cancel'
                        variant={'danger'}
                        onClick={(e) =>  clickButton(e)}
                    >   
                        <Theme.Icons.MdArrowBack/>
                        <TextC.Body>Lista Parcelas</TextC.Body> 
                    </Button>
                </S.WrapButtonCancel>

                <S.WrapButtonPay>
                    <Button
                        name='pay'
                        variant={'success'}
                        onClick={(e) =>  clickButton(e)}
                    >   
                        <Theme.Icons.MdAttachMoney/>
                        <TextC.Body>Pagar Parcela</TextC.Body> 
                    </Button>
                </S.WrapButtonPay>
            </S.WrapButtons>
        </S.Container>
    )
}

export default WrepButtons