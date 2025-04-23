import * as S from './styled'
import { TextC } from '../../../../../../components/Typography'

const Header = () => {
    return (
        <S.Container>
            <TextC.Display level={1} >Pagar parcela</TextC.Display>
            <TextC.Body level={2} >Está pronto para efetuar o pagamento da parcela?</TextC.Body>
        </S.Container>
    )
}

export default Header