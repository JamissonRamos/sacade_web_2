import styled, { css, keyframes } from "styled-components";
import { Theme } from "../../../theme";


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
        font-size: 1.2rem;
    }
`;

// Definindo a animação
const slideIn = keyframes`
    0% {
        transform: translateX(100%); /* Começa fora da tela à esquerda */
        opacity: 0; /* Começa invisível */
    }
    20% {
        transform: translateX(50%); /* Começa fora da tela à esquerda */
        opacity: 2; /* Começa invisível */
    }

    100% {
        transform: translateX(0); /* Move para a posição original */
        opacity: 1; /* Fica visível */
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

const outlineStyles =  (color) => css`
    background-color: transparent;
    transition: background-color 0.4s ease, color 0.4s;
    border: .75px solid ${color} ;
    & span, svg {
        color:  ${color};
    }

    &:hover, span:hover {
        background-color: ${() => {
            const hoverColor = color || Theme.Colors.red800;
            const r = parseInt(hoverColor.slice(1, 3), 16);
            const g = parseInt(hoverColor.slice(3, 5), 16);
            const b = parseInt(hoverColor.slice(5, 7), 16);

            // Escurecendo a cor em 85 para cada canal RGB
            return `rgb(${Math.max(r - 85, 0)}, ${Math.max(g - 85, 0)}, ${Math.max(b - 85, 0)})`;
        }};
        & span, svg {
            background-color: transparent;
            color: ${Theme.Colors.white800}; 
        }
    }
`;

export  const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
        max-width: 500px;
        min-width: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    
`;

export  const Content = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    overflow: auto;
`;

export  const Header = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    /* padding: 0 .8rem; */
    & svg {
        font-size: 1.5em;
        color: ${Theme.Colors.green800};
    }
    & span {
        color: ${Theme.Colors.green800};
    }
`;

export  const Body = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    padding: 1rem 0;
    & span {
        text-align: center;
        color: ${Theme.Colors.grey800};
    }
`;

export  const WrapButtonResponsible = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & button {
        max-width: 100%;
        max-height: 100%;
    }

`;
export  const WrapImg = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    /* max-height: 4%; */
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        max-width: 50%;
        max-height: 50%;
        object-fit: contain;
        animation: ${slideIn} 0.8s ease-out forwards; /* Aplica a animação à imagem */
    }

`;

export  const Footer = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: .8rem;
    margin-top: 1rem;
    @media (max-width: 320px) {
        flex-direction: column;
    }
`;

export const ButtonResponsible = styled.button`
    ${StyledButton}
    ${outlineStyles(Theme.Colors.yellow800)}

`;
export const ButtonOutline = styled.button`
    ${StyledButton}
    ${outlineStyles (Theme.Colors.red600)}

`;
export const ButtonContainer = styled.button`
    ${StyledButton}
    ${containedStyles}
`;