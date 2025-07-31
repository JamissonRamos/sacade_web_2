import * as S from "./styled"
import { TextC } from "../../../../components/Typography"
import { Button } from "react-bootstrap"
import { Theme } from "../../../../theme"
import { useNavigate } from "react-router-dom"

const Header = ({fullFirstName}) => {
    const nameStudent = fullFirstName || ""
    const navigate = useNavigate();
    return (
        <S.Container>
            <TextC.Title level={2}> Lista de Responsáveis </TextC.Title>
            <TextC.Body level={2}> Todos os Reesposáveis pelo aluno: <S.WrapNameStudent>{nameStudent}</S.WrapNameStudent> </TextC.Body>
            <S.WrapButtonCreate>
                <Button
                    variant="success"
                    onClick={() => navigate("/responsibleStudents/form_create")}
                >
                    <Theme.Icons.MdAdd />
                    <span>Novo Cadastro</span>
                </Button>
            </S.WrapButtonCreate>
        </S.Container>
    ) 
}

export default Header