import * as S from './styled'
import { TextC } from '../../../../../Typography';

const SectionsFirst = ({dueDate, daysLate, statusText, styledStatus}) => {

    return (
        
        <S.Container>
            <S.WrapDate $fontColor={styledStatus}>
                <TextC.Title level={1}> {dueDate} </TextC.Title> 
            </S.WrapDate>

            <S.WrapStatus $bgColor={styledStatus}>
                {
                    daysLate > 0 &&
                        <S.WrapDaysLate>
                            <TextC.Body> {daysLate} </TextC.Body>
                        </S.WrapDaysLate>
                }
                <TextC.Body> {statusText} </TextC.Body>
            </S.WrapStatus>
        </S.Container>
    )
}

export default SectionsFirst