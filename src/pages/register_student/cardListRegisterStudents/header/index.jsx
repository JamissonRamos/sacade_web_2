import * as S           from "./styled"
import { TextC }        from "../../../../components/Typography"
import { Button }       from "react-bootstrap"
import { Theme }        from "../../../../theme"
import { useNavigate }  from "react-router-dom"

const Header = ({idStudent, fullname}) => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.WrapText>
                <TextC.Title level={2}> Histórico de <strong> {fullname} </strong> </TextC.Title>
                <TextC.Body level={2}> Histórico do aluno dentro da academia. </TextC.Body>
            </S.WrapText>


            <S.WrapButtonCreate>
                <Button
                    variant="success" 
                    onClick={() => navigate('/registerStudent/formsController', { state: { idStudent: idStudent, fullname: fullname, checkForm: true} })}
                >
                    <Theme.Icons.MdAdd />
                    <span>Novo Cadastro</span>
                </Button>
            </S.WrapButtonCreate>
        </S.Container>
    ) 
}

export default Header