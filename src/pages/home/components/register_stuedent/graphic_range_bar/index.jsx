import * as S from './styled';
import { StyledBadgeColor } from '../script';
import { TextC } from '../../../../../components/Typography';


const GraphicBar = ({data}) => {
    // Transformar o objeto em um array de objetos com label e value
    const formattedData = Object.entries(data).map(([label, value]) => ({
        label,
        value
    }));

    const countRanger = Object.keys(data).length;

    return (
        <S.Container>
            {
                formattedData && formattedData.map(({label, value}, i) => {
                    const updatedRange = label.replace(/_/g, ' e ')
                    const colors = StyledBadgeColor(label) // Obter cores para o badge
                    const widthBar = Math.floor((value / countRanger) * 100);

                    return (
                        <S.Row key={i}>
                            <S.Label>
                                <TextC.Label level={3}> {updatedRange} </TextC.Label>
                                <TextC.Label level={3}> {value} </TextC.Label>
                                
                            </S.Label>

                            <S.BarContainer>

                                <S.Bar 
                                    percentage={widthBar} bgColor={colors.bg} 
                                />

                            </S.BarContainer>

                        </S.Row>
                    )
                })
            }
        </S.Container>
    )
}

export default GraphicBar