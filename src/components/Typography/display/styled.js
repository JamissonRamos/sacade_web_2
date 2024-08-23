import styled, {css} from "styled-components";
import {Theme} from '../../../theme';

const stylesText = {
    1: {
        fontSize: '24px',
        letterSpacing: '0px',
        fontWeight: '400',
        lineHeight: '32px',
    },
    2: {
        fontSize: '34px',
        letterSpacing: '0.25px',
        fontWeight: '400',
        lineHeight: '40px',
    },
    3: {
        fontSize: '48px',
        letterSpacing: '0px',
        fontWeight: '400',
        lineHeight: '56px',
    },
    4: {
        fontSize: '60px',
        letterSpacing: '-0.5px',
        fontWeight: '400',
        lineHeight: '72px',
    },
    5: {
        fontSize: '96px',
        letterSpacing: '-1.5px',
        fontWeight: '300',
        lineHeight: '112px',
    }
};

export const Display = styled.span`
    ${({ $level = 5}) => css`
        font-size: ${stylesText[$level]?.fontSize};
        font-weight: ${stylesText[$level]?.fontWeight};
        letter-spacing: ${stylesText[$level]?.letterSpacing};
        line-height: ${stylesText[$level]?.lineHeight};
        color: ${Theme.Colors.grey800};
    `}
`;
