import * as S     from "./styled"
import { TextC }  from "../../../../components/Typography"

const Header = ({fullname}) => {
    return (
        <S.Container>
            <S.WrapText>
                <TextC.Title level={2}> Histórico de <strong> {fullname} </strong> </TextC.Title>
                <TextC.Body level={2}> Histórico do aluno dentro da academia. </TextC.Body>
            </S.WrapText>
        </S.Container>
    ) 
}

export default Header