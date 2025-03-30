import * as S from './styled';
import { TextC } from '../../../Typography';
import { SetStatus } from '../scripts';


const ListHistoricalPlot = ({data}) => {
    console.log('data', data);

    const handleSetStatus = (status, dueDate) => {
    /* Função para definir o status da parcela */

        return SetStatus(status, dueDate)
    }

    return (

        <S.Container>
            {
                data && data.map(({uid, dueDate, value, fees, interestAnnual, interestDaily, interestMonthly, statusPayment}, i) => {
                        const newStatus = handleSetStatus(statusPayment, dueDate)
                        
                    return (
                        <S.WrapButton 
                            key={i}
                            $borderLeft={newStatus.bg}
                        >
                            <S.SectionsFirst>
                                <S.WrapDate> <TextC.Title level={1}> {dueDate} </TextC.Title> </S.WrapDate>
                                <S.WrapStatus $bgColor={newStatus.bg}> <TextC.Body> {newStatus.text} </TextC.Body> </S.WrapStatus>
                            </S.SectionsFirst>
                            
                            <S.SectionsSecond>
                                <div>
                                    label
                                    R$ {fees}
                                    {fees}
                                </div>
                                <div>{interestAnnual}</div>
                                <div>{interestDaily}</div>
                                <div>{interestMonthly}</div>
                            </S.SectionsSecond>
                            <S.SectionsThird>s</S.SectionsThird>

                        </S.WrapButton>
                    )
                })
            }
        </S.Container>
    )
}

export default ListHistoricalPlot