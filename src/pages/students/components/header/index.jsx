import * as S from "./styled"
import { TextC } from "../../../../components/Typography"
import { Button } from "react-bootstrap"
import { Theme } from "../../../../theme"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <TextC.Title level={2}> Lista de Alunos</TextC.Title>
            <TextC.Body level={1}> Cadastro de alunos no sistema. </TextC.Body>
            <S.WrapButtonCreate>
                <Button
                    size="sm"
                    onClick={() => navigate("/students/form_create")}
                >
                    <Theme.Icons.MdAdd />
                    <span>Novo Cadastro</span>
                </Button>
            </S.WrapButtonCreate>
        </S.Container>
    ) 
}

export default Header