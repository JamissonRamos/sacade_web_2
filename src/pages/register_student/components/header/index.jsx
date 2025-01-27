import * as S     from "./styled"
import { TextC }  from "../../../../components/Typography"

const Header = () => {
    return (
        <S.Container>
            <S.WrapText>
                <TextC.Title level={2}> Ficha do Alunos </TextC.Title>
                <TextC.Body level={2}> Escolha um aluno para revisar sua ficha. </TextC.Body>
            </S.WrapText>
        </S.Container>
    ) 
}

export default Header