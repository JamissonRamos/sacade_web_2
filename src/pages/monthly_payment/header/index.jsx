import { TextC } from '../../../components/Typography'
import * as S from './styled'

const Header = ({idForm}) => {
    const title = idForm  == 1 ? 'Pagar Mensalidade' : 'Atualizar Mensalidade';
    const subTitle = idForm  == 1 
    ? 'Neste formulário, você pode efetuar o pagamento da mensalidade.' 
    : 'Este formulário permitirá a atualização dos dados de pagamento.';
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