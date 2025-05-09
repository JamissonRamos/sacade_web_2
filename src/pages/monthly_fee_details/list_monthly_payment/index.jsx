import { Button } from 'react-bootstrap'
import { TextC } from '../../../components/Typography'
import * as S from './styled'

const ListMonthlyPayment = ({clickButton}) => {
    return (
        <S.Container>  
            <TextC.Title level={2}>Pagamentos Feitos</TextC.Title>

            <S.Cards>
                <S.Card>
                    <div>
                        <div>
                            data Pagamento
                            100
                        </div>
                        <div>
                            Forma Pagamento
                            dinheiro
                        </div>

                    </div>
                    <div>
                        <div>
                            Acrescimo
                            20,00
                        </div>
                        <div>
                            Desconto
                            0,00
                        </div>
                    </div>

                    <div>

                        Valor Pago  
                        120,00

                    </div>

                    <Button
                        name='updatePay'
                        onClick={(e) => clickButton(e)}
                    >Editar</Button>
                </S.Card>
                <S.Card>
                    2
                </S.Card>


            </S.Cards>
        </S.Container>
    )
}

export default ListMonthlyPayment


// /* 
// <ul>
//                     <li>data</li>
//                     <li>Forma Pagamento</li>
//                     <li>Acrescimos</li>
//                     <li>Descontos</li>
//                     <li>Valor Pago</li>
//                     {/* Ajusta possição do botão coloquei so para ver como fica a logica do botão */}
//                     <li>
//                         <button
//                             name='update'
//                             onClick={clickButton}
//                         >Editar</button>
//                     </li>
//                 </ul>

// */