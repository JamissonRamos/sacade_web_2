import * as S           from './styled';
import { TextC }        from '../../../../components/Typography';
import BadgeCustom      from '../../../../components/badge_custom';
import { useNavigate }  from 'react-router-dom';

const CardList = ({data, fullname}) => {
    const navigate = useNavigate();

    const handleBadgeColor = (track) => {
        switch (track) {
            case 'branca':
                return { bg: "#FFFFFF", textColor:"#52575C",  borderColor: "#cccccc" }; // Branca com borda cinza
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
                return { bg: "#FFFFFF", textColor:"#52575C",  borderColor: "#cccccc" }; // Padrão (azul sem borda)
        }
    };

    const handleShowFormUpdate = (uid) => { 
        navigate('/registerStudent/formsController', { state: { idRegister: uid, fullname: fullname,  checkForm: false } });
    };

    return (
        <S.Container>

            {data && data.map(({uid, startDate, trackStart, degreesRange, studentDescription}, i) => {
                
                const colors = handleBadgeColor(trackStart) // Obter cores para o badge
                
                return (

                    <S.WrapButton 
                        key={uid} 
                        $colors={trackStart === 'branca' ? '#f3f4f4' : colors.bg}
                        onClick={() => handleShowFormUpdate(uid)}
                    >
                        
                        <S.Card > 
                            <S.SectionPrime>

                                <S.WrapIndexDataUpdate>

                                    <S.WrapIndex>

                                        <TextC.Body level={3}> {i + 1} </TextC.Body>

                                    </S.WrapIndex>

                                    <S.WrapDataUpdate>

                                        <TextC.Body level={2}> {startDate} </TextC.Body>

                                    </S.WrapDataUpdate>


                                </S.WrapIndexDataUpdate>

                                <S.WrapTrackDegrees>   

                                    <BadgeCustom bg={colors.bg} textColor={colors.textColor} borderColor={colors.borderColor}>
                                        <TextC.Body level={3}> {trackStart} <strong> {degreesRange} </strong> </TextC.Body>
                                </BadgeCustom>

                                </S.WrapTrackDegrees>

                            </S.SectionPrime>
                            <S.SectionSecondary>

                                <TextC.Body level={2}> {studentDescription} </TextC.Body>

                            </S.SectionSecondary>
                        </S.Card>

                    </S.WrapButton>
                )})  
            }
        </S.Container>
    )
}

export default CardList