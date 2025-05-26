import * as S from "./styled"
import { TextC } from "../../../components/Typography"

const Header = () => {

    return (
        <S.Container>
            <S.WrapText>
                <TextC.Title level={2}> Detalhes da Mensalidade </TextC.Title>
                <TextC.Body level={2}> Informações sobre a mensalidade e detalhes do pagamento. </TextC.Body>
            </S.WrapText>
        </S.Container>
    ) 
}

export default Header