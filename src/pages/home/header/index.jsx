import * as S from "./styled";
import {TextC} from "../../../components/Typography";


const Header = () => {
    return (
        <S.Container>
            <TextC.Title level={2}>Seu Dashboard</TextC.Title>
            <TextC.Body level={2}> Vamos acompanhar como está sua academia? </TextC.Body>
        </S.Container>
    ) 
}

export default Header