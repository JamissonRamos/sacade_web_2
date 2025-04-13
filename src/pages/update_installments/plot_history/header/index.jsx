import * as S from "./styled"

import { TextC } from "../../../../components/Typography"
import { useState } from "react";

const Header = ({fullName, setSelectedFilter, statusCount}) => {
    const [active, setActive] = useState("Tudo");
    const buttons = ["Tudo", "Em Aberto", "Em Atraso", "Fechado"];

    const handleOnClick = (name) => {
        setActive(name);
        setSelectedFilter(name)
    }

    return (
        <S.Container>
            <S.WrapText>
                <TextC.Title level={2}> Histórico de Parcela(s) de <strong> {fullName}  </strong> </TextC.Title>
                <TextC.Body level={2}> Selecione uma parcela para visualizar seus detalhes. </TextC.Body>

            </S.WrapText>
        
            <S.WrapFilter>
                <S.WrapFilterMenu>
                    {
                        buttons.map((name, i) => (

                            <S.WrapButton
                                key={i}    
                                className={active === name ? "active" : ""}
                                onClick={() => handleOnClick(name)}
                            >
                                <TextC.Label level={3}>{name}</TextC.Label>
                                <TextC.Label level={3}> {statusCount[name]} </TextC.Label>
                                
                            </S.WrapButton>

                        ))
                    }
                </S.WrapFilterMenu>
            </S.WrapFilter>
        </S.Container>
    ) 
}

export default Header