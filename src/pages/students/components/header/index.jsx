import * as S from "./styled"
import { TextC } from "../../../../components/Typography"
import { Button } from "react-bootstrap"
import { Theme } from "../../../../theme"

const Header = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Lista de Alunos</TextC.Title>
            <TextC.Body level={1}> Cadastro de alunos no sistema. </TextC.Body>
            <S.WrapButtonCreate>
                <Button
                >
                    <Theme.Icons.MdAdd />
                    <span>Novo Cadastro</span>
                </Button>
            </S.WrapButtonCreate>
        </S.Container>
    ) 
}

export default Header