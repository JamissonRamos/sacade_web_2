import * as S from "./styled"
import { TextC } from "../../../components/Typography"

const Header = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Gerar Parcelas </TextC.Title>
            <TextC.Body level={2}> Selecione os alunos para gerar as parcelas </TextC.Body>
        </S.Container>
    ) 
}

export default Header