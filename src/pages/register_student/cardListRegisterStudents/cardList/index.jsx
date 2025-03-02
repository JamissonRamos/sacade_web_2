import * as S                               from './styled';
import { TextC }                            from '../../../../components/Typography';
import BadgeCustom                          from '../../../../components/badge_custom';
import { Theme }                            from '../../../../theme';
import { useNavigate }                      from 'react-router-dom';
import { useEffect, useState }              from 'react';
import { FilterSortDate, StyledBadgeColor } from './scripts';

const CardList = ({data, fullname }) => {
    const [ newData, setNewData] = useState(false);
    const navigate = useNavigate();

    const handleShowFormUpdate = async (uid) => { 
        navigate('/registerStudent/formsController', { state: { idRegister: uid, fullname: fullname,  checkForm: false } });
    };

    useEffect(() => {

        const processedData = FilterSortDate(data);
    
        // Atualiza o estado com os dados processados
        setNewData(processedData);
        
    }, [data])

    return (
        <S.Container>
        {
            newData && newData.map(({uid, dateUpdate, graduation, range, degrees, observation, currentHistory}, i) => {
                
                const colors = StyledBadgeColor(range) // Obter cores para o badge
                const updatedRange = range.replace(/_/g, ' e ');
                return (

                    <S.WrapButton 
                        key={uid} 
                        $colors={range === 'branca' ? '#f3f4f4' : colors.bg}
                        onClick={() => handleShowFormUpdate(uid)}
                    >
                        
                        <S.Card > 
                        
                            <S.SectionPrime>
                                
                                <S.WrapIndexDataUpdate>
                                    
                                    <S.WrapIndex>

                                        {
                                            currentHistory
                                            ? 
                                                <S.WrapCurrentHistory className='star'>
                                                    <Theme.Icons.MdStarBorderPurple500 /> 
                                                </S.WrapCurrentHistory>
                                            : 
                                                <S.WrapCurrentHistory>
                                                    <Theme.Icons.MdOutlineArrowDownward/>
                                                </S.WrapCurrentHistory>
                                        }
                                        <S.WrapValueIndex>
                                            <TextC.Body level={4}> {i + 10} </TextC.Body>
                                        </S.WrapValueIndex>

                                    </S.WrapIndex>

                                    <S.WrapGraduation
                                        $colors={range === 'branca' ? '#7c7c7c' : colors.bg}
                                    >
                                        <TextC.Title level={1}>  {graduation}  </TextC.Title>

                                    </S.WrapGraduation>

                                </S.WrapIndexDataUpdate>
                                
                                <S.WrapTrackDegrees>   
                                    <BadgeCustom bg={colors.bg} textColor={colors.textColor} borderColor={colors.borderColor}>
                                        <TextC.Body level={4}> {updatedRange} <span> {degrees} </span> </TextC.Body>
                                </BadgeCustom>

                                </S.WrapTrackDegrees>

                            </S.SectionPrime>

                            <S.SectionSecondary>
                                <S.WrapObservation>
                                    <TextC.Body level={2}>
                                        {observation}
                                    </TextC.Body>
                                </S.WrapObservation>

                                <S.WrapDataUpdate
                                    $colors={range === 'branca' ? '#7c7c7c' : colors.bg}
                                >
                                    <Theme.Icons.MdCalendarMonth />
                                    <TextC.Body level={2}> {dateUpdate} </TextC.Body>

                                </S.WrapDataUpdate>
                            </S.SectionSecondary>
                        </S.Card>
                    </S.WrapButton>
                )})  
        }
        </S.Container>
    )
}

export default CardList