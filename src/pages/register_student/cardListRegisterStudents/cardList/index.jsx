import * as S                   from './styled';
import { TextC }                from '../../../../components/Typography';
import BadgeCustom              from '../../../../components/badge_custom';
import { Theme }                from '../../../../theme';
import { useNavigate }          from 'react-router-dom';
import { useEffect, useState }  from 'react';

const CardList = ({data, fullname, fetchDocumentsLocalStorage }) => {
    const [ newData, setNewData] = useState(false);
    const navigate = useNavigate();
    
    const handleBadgeColor = (track) => {
        switch (track) {
            case 'branca':
                return { bg: "#FFFFFF", textColor:"#7c7c7c",  borderColor: "#cccccc" }; // Branca com borda cinza
            case 'cinza':
                return { bg: "#9D9D9D", borderColor: "transparent" }; // Cinza sem borda
            case 'amarela':
                return { bg: "#FEBD44", borderColor: "transparent" }; // Amarela sem borda
            case 'laranja':
                return { bg: "#fd7e14", borderColor: "transparent" }; // Laranja sem borda
            case 'verde':
                return { bg: "#00A791", borderColor: "transparent" }; // Verde sem borda
            case 'azul':
                return { bg: "#003CC7", borderColor: "transparent" }; // Azul sem borda
            case 'roxa':
                return { bg: "#522ab0", borderColor: "transparent" }; // Roxa sem borda
            case 'marrom':
                return { bg: "#8b4513", borderColor: "transparent" }; // Marrom sem borda
            case 'preta':
                return { bg: "#000000", borderColor: "transparent" }; // Preta sem borda
            case 'vermelha':
                return { bg: "#dc3545", borderColor: "transparent" }; // Vermelha sem borda
            case 'vermelha e preta':
                return { bg: "#dc3545", borderColor: "#000000" }; // Vermelha e Preta com borda preta
            default:
                return { bg: "#FFFFFF", textColor:"#7c7c7c",  borderColor: "#cccccc" }; // Padrão (azul sem borda)
        }
    };

    const handleShowFormUpdate = (uid) => { 
        fetchDocumentsLocalStorage()
        navigate('/registerStudent/formsController', { state: { idRegister: uid, fullname: fullname,  checkForm: false } });
    };

    useEffect(() => {
        // Função para converter a data no formato "dd/MM/yyyy" para um objeto Date
        const parseDate = (dateString) => {
            const [day, month, year] = dateString.split('/');
            return new Date(year, month - 1, day); // Mês é 0-indexado no JavaScript
        }
        // Ordenando o array pelo campo dateUpdate
        data.sort((a, b) => parseDate(b.dateUpdate) - parseDate(a.dateUpdate));
        setNewData(data)
        
    }, [data])

    return (
        <S.Container>
        {
            newData && newData.map(({uid, dateUpdate, graduation, range, degrees, observation, currentHistory}, i) => {
                
                const colors = handleBadgeColor(range) // Obter cores para o badge
                
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
                                    <TextC.Body level={4}> {i + 1} </TextC.Body>

                                </S.WrapIndex>

                                <S.WrapGraduation
                                    $colors={range === 'branca' ? '#7c7c7c' : colors.bg}
                                >
                                    <TextC.Title level={1}>  {graduation}  </TextC.Title>

                                </S.WrapGraduation>
                            </S.WrapIndexDataUpdate>
                            <S.WrapTrackDegrees>   
                                <BadgeCustom bg={colors.bg} textColor={colors.textColor} borderColor={colors.borderColor}>
                                    <TextC.Body level={4}> {range} <span> {degrees} </span> </TextC.Body>
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