import * as S from './styled'
import { Button, Spinner } from 'react-bootstrap'
import { TextC } from '../../../../components/Typography'
import { Theme } from '../../../../theme'

const WrapButtons = (props) => {
    const { idForm, blockPaymentProcess, clickButton, loadingCreate } = props;

    const labelButton = idForm  == 1 
    ? 'Pagar Mensalidade' 
    : 'Atualizar Mensalidade';

    return (
        <S.Container>
            {
                idForm !== 1 &&
                <S.WrapButtonDelete>
                    <Button
                        name='delete'
                        variant='danger'
                        onClick={(e) => clickButton(e)}

                    >
                        <Theme.Icons.MdDelete />
                        <TextC.Label level={4} >Excluir</TextC.Label>
                        
                    </Button>
                </S.WrapButtonDelete>
            }

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
                                    <TextC.Label level={4}> {labelButton} </TextC.Label>
                                </>
                        }   
                    </Button>

                </S.WrapButtonsUpdatePay>
            </S.WrapButtonsAction>
        </S.Container>
    )
}

export default WrapButtons