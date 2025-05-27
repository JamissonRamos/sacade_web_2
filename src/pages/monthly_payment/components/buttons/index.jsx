import * as S from './styled'
import { Button, Spinner } from 'react-bootstrap'
import { TextC } from '../../../../components/Typography'
import { Theme } from '../../../../theme'

const WrapButtons = (props) => {
    const { blockPaymentProcess, clickButton, loadingCreate } = props;

    return (
        <S.Container>
            <S.WrapButtonsAction>
                <S.WrapButtonsCancel>
                    <Button
                        name='cancel'
                        variant='outline-danger'
                        onClick={(e) => clickButton(e)}
                    >
                        <Theme.Icons.MdCancel />
                        <TextC.Label level={4}>Cancelar</TextC.Label>
                        
                    </Button>
                </S.WrapButtonsCancel>

                <S.WrapButtonsUpdatePay>
                    <Button
                        type='submit'
                        variant='success'
                        disabled={blockPaymentProcess || loadingCreate}
                    >
                        {
                            loadingCreate
                            ?   <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span> Pagando Mensalidade... </span>
                                </>
                            :
                                <>
                                    <Theme.Icons.MdPayments />
                                    <TextC.Label level={4}> Pagar Mensalidade </TextC.Label>
                                </>
                        }   
                    </Button>

                </S.WrapButtonsUpdatePay>
            </S.WrapButtonsAction>
        </S.Container>
    )
}

export default WrapButtons