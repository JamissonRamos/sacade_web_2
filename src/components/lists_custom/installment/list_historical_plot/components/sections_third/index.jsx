import { TextC } from '../../../../../Typography'
import * as S from './styled'

const SectionsThird = ({styledStatus, daysLate, newValorParcela, fineInterestValues }) => {
    const { bg } = styledStatus;
    const { newInterestDailyMoney } = fineInterestValues;
    
    return (
    
        <S.Container>
            <S.WrapValue $fontColor={bg}>
                <TextC.Title level={1}  > Total Parcela </TextC.Title>

                {
                    daysLate && daysLate > 0 
                    ?
                        <S.WrapShowTaxes>
                            <TextC.Body level={1} > 4,80 </TextC.Body>
                            <TextC.Body level={1} > {newInterestDailyMoney} </TextC.Body>
                        </S.WrapShowTaxes>

                    :   null
                }
                <TextC.Title level={1}  > {newValorParcela} </TextC.Title>
            </S.WrapValue>
        </S.Container>
    )
}

export default SectionsThird;