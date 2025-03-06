
import * as S from './styled'
import { StyledBadgeColor } from '../../../../../../../register_student/cardListRegisterStudents/cardList/scripts';
import { TextC } from '../../../../../../../../components/Typography';

const GraphicRangeList = ({data, countRanger }) => {

    return (
        <S.Container>
            {
                data && data.map(({label, value}, i) => {
                    const updatedRange = label.replace(/_/g, ' e ')
                    const colors = StyledBadgeColor(label) // Obter cores para o badge
                    const widthBar = Math.floor((value / countRanger) * 100);
                    const delay = `${i * 0.2}s`;

                    return (
                        <S.Row key={i}>
                            <S.Label>
                                <TextC.Label level={3}> {updatedRange} </TextC.Label>
                                <TextC.Label level={3}> {value} </TextC.Label>
                            </S.Label>

                            <S.BarContainer>

                                <S.Bar 
                                    percentage={widthBar} bgColor={colors.bg} delay={delay}
                                />

                            </S.BarContainer>

                        </S.Row>


                    )
                })
            }
        </S.Container>
    )
}

export default GraphicRangeList





  {/* {Object.entries(data).map((item) => (
                    
                <S.Row key={item.keys}>

                    <S.Label>{item.values}</S.Label>

                    <S.BarContainer>

                        <S.Bar percentage={(item / totalRange) * 100} />

                    </S.BarContainer>
                </S.Row>
            ))} */}