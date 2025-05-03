import * as S from './styled'

const ListPay = () => {
    return (
        <S.Container>  
            <hr />
            
            <h3>Pagamentos Feitos</h3>

            <ul>
                <li>data</li>
                <li>Forma Pagamento</li>
                <li>Acrescimos</li>
                <li>Descontos</li>
                <li>Valor Pago</li>
            </ul>
        </S.Container>
    )
}

export default ListPay