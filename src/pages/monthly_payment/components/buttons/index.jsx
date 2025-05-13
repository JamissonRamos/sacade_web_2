import { Button } from 'react-bootstrap'
import * as S from './styled'
import { TextC } from '../../../../components/Typography'
import { Theme } from '../../../../theme'

const WrapButtons = (props) => {
    const { idForm, blockPaymentProcess } = props
    return (
        <S.Container>
            {
                idForm !== 1 &&
                <S.WrapButtonDelete>
                    <Button
                        variant='danger'
                    >
                        <Theme.Icons.MdDelete />
                        <TextC.Label level={4} >Excluir</TextC.Label>
                        
                    </Button>
                </S.WrapButtonDelete>
            }

            <S.WrapButtonsAction>
                <S.WrapButtonsCancel>
                    <Button
                        variant='outline-danger'
                    >
                        <Theme.Icons.MdCancel />
                        <TextC.Label level={4}>Cancelar</TextC.Label>
                        
                    </Button>
                </S.WrapButtonsCancel>

                <S.WrapButtonsUpdatePay>
                    <Button
                        variant='success'
                        disabled={blockPaymentProcess}
                    >
                        <Theme.Icons.MdPayments />
                        <TextC.Label level={4}>Pagar Mensalidade</TextC.Label>
                        
                    </Button>

                </S.WrapButtonsUpdatePay>
            </S.WrapButtonsAction>
        </S.Container>
    )
}

export default WrapButtons