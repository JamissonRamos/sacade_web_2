import * as S     from "./styled"
import { TextC }  from "../../../components/Typography"

const Header = () => {
    return (
        <S.Container>
            <S.WrapText>
                <TextC.Title level={2}> Lista Alunos </TextC.Title>
                <TextC.Body level={2}> Escolha um aluno para revisar o status do aluno. </TextC.Body>
            </S.WrapText>
        </S.Container>
    ) 
}

export default Header