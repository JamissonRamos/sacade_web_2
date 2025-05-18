import { Button } from 'react-bootstrap'
import * as S from './styled'
import { Theme } from '../../../theme';
import { TextC } from '../../../components/Typography';

const WrepButtons = ({clickButton}) => {
    return (
        <S.Container>
            <S.WrapButtons>
                <Button
                    name='createrPay'
                    variant={'success'}
                    onClick={(e) =>  clickButton(e)}
                >   
                    <TextC.Body>Pagar Mensalidades</TextC.Body> 
                    <Theme.Icons.MdAttachMoney/>
                </Button>

            </S.WrapButtons>
        </S.Container>
    )
}

export default WrepButtons