import * as S from './styled'

const BadgeCustom = ({ bg, textColor, borderColor, children }) => {
    console.log('bg', bg);
    
    return (
        <S.StyledBadge $bg={bg} $textColor={textColor} $borderColor={borderColor}>
            {children}
        </S.StyledBadge>
    );
};

export default BadgeCustom