import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";



const StyledButton = css`
    width: 300px;
    min-width: 250px;
    max-width: 350px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 12px;
    border-radius: 4px;
    transition: background-color 0.4s ease, color 0.4s;
    cursor: pointer;
    & span {
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }
    & svg {
        font-size: 1.4rem;
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
            const hoverColor = color || Theme.Colors.blue500;
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

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;

`;
export const WrapContent = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const WrapTex = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding: .2rem 0;
        
    & span {
        color: ${Theme.Colors.grey800};
    }
    
    @media (max-width: 475px) {
        & span {
            font-size: 10px;
            font-weight: 500;
            line-height: 0;
            letter-spacing: 0.65px;
            color: ${Theme.Colors.grey800};
        }
    }
`;

export const WrapList = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 150px;
    overflow: auto;
`;
export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem 0;
    & button {
        &.btn:disabled{
            border: 0.075px solid ${Theme.Colors.grey600};
            & span, svg{
                color: ${Theme.Colors.grey600};
            }
        }
        ${StyledButton}
        ${outlineStyles(Theme.Colors.blue500)}
    }
`;
