import { TextC } from '../../../components/Typography'
import * as S from './styled'

const Header = () => {
    const title = 'Pagar Mensalidade' ;
    const subTitle = 'Neste formulário, você pode efetuar o pagamento da mensalidade.';
    return (
        <S.Container>
            <TextC.Display level={1}>
                {title}
            </TextC.Display>
            <TextC.Body level={2}>
                {subTitle}
            </TextC.Body>
        </S.Container>
    )
}

export default Header