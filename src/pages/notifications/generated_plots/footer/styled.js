import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

const StyledButton = css`
    min-width: 100px;
    max-width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.4s ease, color 0.4s;
    cursor: pointer;
    & span {
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    & svg {
        font-size: 1.4rem;
    }
`;

const containedStyles = css`
    border: none;
    transition: background-color 0.4s ease, color 0.4s;
    background-color: ${Theme.Colors.green800};
    & span, svg {
        color: ${Theme.Colors.white800};
    }

    &:hover {
        background-color: ${() => {
        const color =  Theme.Colors.green800; 
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        // Escurecendo a cor em 85 para cada canal RGB
        return `rgb(${Math.max(r - 85, 0)}, ${Math.max(g - 85, 0)}, ${Math.max(b - 85, 0)})`;
    }};
    }
`;

const outlineStyles = css`
    background-color: transparent;
    transition: background-color 0.4s ease, color 0.4s;
    border: .75px solid ${Theme.Colors.red800} ;
    & span, svg {
        color: ${Theme.Colors.red800 };
    }

    &:hover, span:hover {
        background-color: ${() => {
        const color =  Theme.Colors.red800; 
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        // Escurecendo a cor em 85 para cada canal RGB
        return `rgb(${Math.max(r - 85, 0)}, ${Math.max(g - 85, 0)}, ${Math.max(b - 85, 0)})`;
        }};
        & span, svg {
            background-color: transparent;
            color: ${Theme.Colors.white800}; 
        }
    }
`;

export const Footer = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const ButtonOutline = styled.button`
    ${StyledButton}
    ${outlineStyles}
`;

export const ButtonContainer = styled.button`
    ${StyledButton}
    ${containedStyles}
`;