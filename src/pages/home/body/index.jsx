import * as S from "./styled";
import Cards from "../components/cards";

/* 
    Cria o hooks para pegar todoas as parcelas e mostra no home;


*/
const Body = () => {
    const {Students } = Cards;
    return (
        <S.Container>
            <S.SectionCards>
                <S.WrapStudents>
                    <Students />
                </S.WrapStudents>

                <S.WrapPayments>
                    pagamentos
                </S.WrapPayments>

                <S.WrapRanges>
                    faixas
                </S.WrapRanges>
            </S.SectionCards>
        </S.Container>
    ) 
}

export default Body