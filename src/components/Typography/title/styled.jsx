import styled, {css} from "styled-components";
import {Theme} from '../../../theme';

const stylesText = {
    5: {
        fontSize: '32px',
        letterSpacing: '0px',
        fontWeight: '400',
        lineHeight: '40px',
    },
    4: {
        fontSize: '28px',
        letterSpacing: '0px',
        fontWeight: '400',
        lineHeight: '36px',
    },
    3: {
        fontSize: '24px',
        letterSpacing: '0px',
        fontWeight: '400',
        lineHeight: '32px',
    },
    2: {
        fontSize: '20px',
        letterSpacing: '0.25px',
        fontWeight: '400',
        lineHeight: '28px',
    },
    1: {
        fontSize: '18px',
        letterSpacing: '0px',
        fontWeight: '400',
        lineHeight: '24px',
    },
};


export const Title = styled.span`
    ${({ $level = 5}) => css`
        font-size: ${stylesText[$level]?.fontSize};
        font-weight: ${stylesText[$level]?.fontWeight};
        letter-spacing: ${stylesText[$level]?.letterSpacing};
        line-height: ${stylesText[$level]?.lineHeight};
        color: ${Theme.Colors.grey800};
    `}
`;