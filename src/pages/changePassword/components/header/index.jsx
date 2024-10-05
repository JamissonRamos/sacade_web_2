import * as S from "./styled"
import { TextC } from "../../../../components/Typography"


const Header = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Alterar Senha</TextC.Title>
            <TextC.Body level={1}> Altere sua própria senha. </TextC.Body>
        </S.Container>
    ) 
}

export default Header