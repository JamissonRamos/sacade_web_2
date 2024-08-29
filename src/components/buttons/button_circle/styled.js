import styled, { css } from "styled-components";
import { Theme } from "../../../theme";

const containerStyles = css`
    border: 1px solid red;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem .2rem;
    border-radius: 100%;
    background-color: transparent;
    
    cursor: pointer;
`;

const containedStyles = css`
    background-color: ${(props) => props.color || Theme.Colors.blue500};
    border: none;
    & span {
        color: ${Theme.Colors.white800};
    }
    transition: background-color 0.4s ease, color 0.4s;
    & svg {
        color: ${Theme.Colors.white800};
    }
    &:hover {
        background-color: ${props => {
            const color = props.color || Theme.Colors.blue500;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r - 85}, ${g - 85}, ${b - 85})`;
        }};
    }
`;

const outlineStyles = css`
    background-color: transparent;
    border: 1px solid ${(props) => props.color || Theme.Colors.blue500} ;
    & span {

        color: ${(props) => props.color };
    }
    transition: background-color 0.4s ease, color 0.4s;
    & svg {
        color: ${(props) => props.color };
    }
    &:hover, span:hover {
        color: ${Theme.Colors.white800};
        background-color: ${props => {
            const color = props.color || Theme.Colors.blue900;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r - 35}, ${g - 35}, ${b - 35})`;
        }};
        & svg {
            color: ${Theme.Colors.white800}; 
        }
    }
`;

export const ButtonCircle = styled.button`

    ${containerStyles}

    ${(props) => {
        return props.$variant === 'contained' ||  props.$variant === undefined
        ? containedStyles
        : props.$variant === 'outline'
        ? outlineStyles
        : null
    }}

`;