import * as S from './styled'
import { TextC } from '../../../../../Typography';

const SectionsFirst = ({dueDate, statusText, styledStatus}) => {
    const { bg, daysLate } = styledStatus;

    return (
        
        <S.Container>
            <S.WrapDate $fontColor={bg}>
                <TextC.Title level={1}> {dueDate} </TextC.Title> 
            </S.WrapDate>

            <S.WrapStatus $bgColor={bg}>
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