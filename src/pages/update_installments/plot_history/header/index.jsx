import * as S from "./styled"

import { TextC } from "../../../../components/Typography"

const Header = ({fullName}) => {
    return (
        <S.Container>
            <S.WrapText>
                <TextC.Title level={2}> Histórico de Parcela(s) de <strong> {fullName}  </strong> </TextC.Title>
                <TextC.Body level={2}> Selecione uma parcela para visualizar seus detalhes. </TextC.Body>

                <div>
                    <div>Todas</div>
                    <div>aberto</div>
                    <div>atraso</div>
                    <div>Fecahdo</div>
                </div>
            </S.WrapText>
        </S.Container>
    ) 
}

export default Header