import * as S from "./styled"
import { TextC } from "../../../../../components/Typography"

const Header = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Configuração Parcelas </TextC.Title>
            <TextC.Body level={2}> Taxas e Juros para Cobrança de Parcelas Atrasadas </TextC.Body>
        </S.Container>
    ) 
}

export default Header