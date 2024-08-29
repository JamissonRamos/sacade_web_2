import styled, { css } from 'styled-components';
import { Theme } from '../../../theme';


const containerStyles = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    & span {
        font-size: .8rem;
        font-weight: 500;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
    
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
    border: 2px solid ${(props) => props.color || Theme.Colors.blue500} ;
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


export const ButtonCustom = styled.button`
    ${containerStyles}
    ${(props) => {
        return props.$variant === 'contained' ||  props.$variant === undefined
        ? containedStyles
        : props.$variant === 'outline'
        ? outlineStyles
        : null
    }}
    &:disabled {
        opacity: 0.6;
        background-color: ${Theme.Colors.grey600}; 
        border: ${Theme.Colors.blue100}; 
        color: ${Theme.Colors.grey800}; 

        cursor: not-allowed; 
    }
    & svg{
        display: flex;
        font-size: 1em;
    }
    
`;