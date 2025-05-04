import * as S from './styled'

const ListPay = ({clickButton}) => {
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
                {/* Ajusta possição do botão coloquei so para ver como fica a logica do botão */}
                <li>
                    <button
                        name='update'
                        onClick={clickButton}
                    >Editar</button>
                </li>
            </ul>
        </S.Container>
    )
}

export default ListPay