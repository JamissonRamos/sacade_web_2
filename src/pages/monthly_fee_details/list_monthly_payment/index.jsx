import * as S from './styled'
import { Spinner } from 'react-bootstrap'
import { TextC } from '../../../components/Typography'
import { LoadingOverlay } from '../../../components/spinner/global/styled';
import PaymentListData from './components/payment_list_data';

const ListMonthlyPayment = (props) => {
    const { clickButton, loading, data } = props;
    const dataMonthlyFee = data || [];

    return (
        <S.Container>  
            {
                loading &&
                    <LoadingOverlay>
                        <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Carregando os pagamentos...</span>
                    </LoadingOverlay> 
            }
            <S.Header>
                <TextC.Title level={2}> Lista de Pagamento </TextC.Title>
            </S.Header>

            {
                dataMonthlyFee && dataMonthlyFee.length == 0
                ?   <S.Empty>
                        <TextC.Display level={2} >
                            Nenhum pagamento
                        </TextC.Display>
                        <TextC.Body level={2}>
                            Não encontramos nenhum pagamento em nossa base de dados.
                        </TextC.Body>
                    </S.Empty> 
                :   
                    <S.Cards>
                    {
                        dataMonthlyFee?.map(({id, paymentDate, paymentMethod, installmentIncrease, installmentDiscount, amountPaid}, index) => (
                            
                            <PaymentListData key={index}
                                id={id}
                                clickButton={clickButton}
                                loading={loading}
                                paymentDate={paymentDate}
                                paymentMethod={paymentMethod}   
                                installmentIncrease={installmentIncrease}
                                installmentDiscount={installmentDiscount}
                                amountPaid={amountPaid}
                            />
                        ))
                    }
                    </S.Cards>
            }     

        </S.Container>
    )
}

export default ListMonthlyPayment