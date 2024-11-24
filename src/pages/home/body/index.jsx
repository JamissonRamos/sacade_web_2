import * as S from "./styled";
import {TextC} from "../../../components/Typography";
import { Theme } from "../../../theme";


const Body = () => {
    return (
        <S.Container>
            <S.SectionCards>
                <S.Card>
                    <S.WrapImg>
                        <img src={Theme.ImgC.CardStudentActive} alt="Alunos Ativos"/>
                    </S.WrapImg>

                    <S.WrapText>
                        <S.Title >
                            <TextC.Label level={2}>57 Alunos</TextC.Label>
                        </S.Title>

                        <S.SubTitle >
                            <TextC.Body level={1}>Total de alunos ativos</TextC.Body>
                        </S.SubTitle>
                        
                    </S.WrapText>
                </S.Card>

                <S.Card>
                    <S.WrapImg>
                        <img src={Theme.ImgC.CardTotalRecebidoMes} alt="Total Recebido no Mes"/>
                    </S.WrapImg>

                    <S.WrapText>
                        <S.Title >
                            <TextC.Label level={3}>R$ 1000.000.000,00</TextC.Label>
                        </S.Title>

                        <S.SubTitle >
                            <TextC.Body level={1}>Total recebido no mês</TextC.Body>
                        </S.SubTitle>
                        
                    </S.WrapText>
                </S.Card>

                <S.Card>
                    <S.WrapImg>
                        <img src={Theme.ImgC.CardTotalAtrasadoMes} alt="Total de Atrasados no Mês"/>
                    </S.WrapImg>

                    <S.WrapText>
                        <S.Title >
                            <TextC.Label level={3}>R$ 100.000.000,00</TextC.Label>
                        </S.Title>

                        <S.SubTitle >
                            <TextC.Body level={1}>Total em atraso no mês</TextC.Body>
                        </S.SubTitle>
                        
                    </S.WrapText>
                </S.Card>
            </S.SectionCards>
        </S.Container>
    ) 
}

export default Body