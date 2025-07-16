import * as S from "./styled"
import { TextC } from "../../../components/Typography"

const Header = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Selecionar Alunos </TextC.Title>
            <TextC.Body level={2}> Escolher os alunos da lista </TextC.Body>
        </S.Container>
    ) 
}

export default Header