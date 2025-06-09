import * as S from './styled';
import FinancialCards from "./financial_cards";

const Financial = () => {
    return (
        <S.Container>
            <FinancialCards />
            <div>porcentagem a receber no mes</div>
            <div>grafico do recebido do ano</div>
        </S.Container>
    )
}

export default Financial