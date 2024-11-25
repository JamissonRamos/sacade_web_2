import * as S from "./styled"
import { TextC } from "../../../components/Typography"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <TextC.Title level={2}> Lista de Alunos</TextC.Title>
            <TextC.Body level={1}> Todos os alunos cadastro no sistema. </TextC.Body>
        </S.Container>
    ) 
}

export default Header