import * as S from './styled';
import { useEffect, useState } from 'react';

const BadgeCustomTrack = (props) => {
    const { track } = props;
    const [styledTrack, setStyledTrack] = useState({});
    
    const styledBadgeTrack = (track) => {
        switch (track) {
            case 'branca':
                return { bg: "#FFFFFF", textColor: "#7c7c7c", borderColor: "#cccccc" }; // Branca com borda cinza
            case 'cinza_branca':
                return { bg: "#9D9D9D", textColor: "#FFFFFF", borderColor: "#cccccc" }; // Cinza com borda branca
            case 'cinza':
                return { bg: "#9D9D9D", textColor: "#FFFFFF", borderColor: "transparent" }; // Cinza sem borda
            case 'cinza_preta':
                return { bg: "#9D9D9D", textColor: "#FFFFFF", borderColor: "#000000" }; // Cinza com borda preta
            case 'amarela_branca':
                return { bg: "#FEBD44", textColor: "#FFFFFF", borderColor: "#cccccc" }; // Amarela com borda branca
            case 'amarela':
                return { bg: "#FEBD44", textColor: "#FFFFFF", borderColor: "transparent" }; // Amarela sem borda
            case 'amarela_preta':
                return { bg: "#FEBD44", textColor: "#FFFFFF", borderColor: "#000000" }; // Amarela com borda preta
            case 'laranja_branca':
                return { bg: "#fd7e14", textColor: "#FFFFFF", borderColor: "#cccccc" }; // Laranja com borda branca
            case 'laranja':
                return { bg: "#fd7e14", textColor: "#FFFFFF", borderColor: "transparent" }; // Laranja sem borda
            case 'laranja_preta':
                return { bg: "#fd7e14", textColor: "#FFFFFF", borderColor: "#000000" }; // Laranja com borda preta
            case 'verde_branca':
                return { bg: "#00A791", textColor: "#FFFFFF", borderColor: "#cccccc" }; // Verde com borda branca
            case 'verde':
                return { bg: "#00A791", textColor: "#FFFFFF", borderColor: "transparent" }; // Verde sem borda
            case 'verde_preta':
                return { bg: "#00A791", textColor: "#FFFFFF", borderColor: "#000000" }; // Verde com borda preta
            case 'azul':
                return { bg: "#003CC7", textColor: "#FFFFFF", borderColor: "transparent" }; // Azul sem borda
            case 'roxa':
                return { bg: "#522ab0", textColor: "#FFFFFF", borderColor: "transparent" }; // Roxa sem borda
            case 'marrom':
                return { bg: "#8b4513", textColor: "#FFFFFF", borderColor: "transparent" }; // Marrom sem borda
            case 'preta':
                return { bg: "#000000", textColor: "#FFFFFF", borderColor: "transparent" }; // Preta sem borda
            case 'coral':
                return { bg: "#FF7F50", textColor: "#FFFFFF", borderColor: "transparent" }; // Coral sem borda
            case 'vermelha_preta':
                return { bg: "#dc3545", textColor: "#FFFFFF", borderColor: "#000000" }; // Vermelha com borda preta
            case 'vermelha':
                return { bg: "#dc3545", textColor: "#FFFFFF", borderColor: "transparent" }; // Vermelha sem borda
            default:
                return { bg: "#FFFFFF", textColor: "#7c7c7c", borderColor: "#cccccc" }; // Padrão (branca com borda cinza)
        }
    };

    const formatRangeName = (track) => {
        if (track === "") return
        // Verifica se tem underscore e substitui por "e"
        if (track.includes("_")) {
            const formatTrack = track.replace(/_/g, " e ");
            return formatTrack.toUpperCase();
        }else{
            return track.toUpperCase();
        }
    }

    useEffect(() =>{
        setStyledTrack(styledBadgeTrack(track))
    }, [track])

    return (
        <S.Container 
            $bg={styledTrack.bg} 
            $textColor={styledTrack.textColor} 
            $borderColor={styledTrack.borderColor}
        >
            <span>
                {formatRangeName(track)}
            </span>
        </S.Container>
    )
}

export default BadgeCustomTrack