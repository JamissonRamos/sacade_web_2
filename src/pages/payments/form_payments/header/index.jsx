import * as S from "./styled"
import { TextC } from "../../../../components/Typography"

const Header = () => {

    return (
        <S.Container>
            <S.WrapText>
                <TextC.Title level={2}> Pagar Parcela </TextC.Title>
                <TextC.Body level={2}> Formulário para pagamento da parcela escolhida. </TextC.Body>
            </S.WrapText>
        </S.Container>
    ) 
}

export default Header