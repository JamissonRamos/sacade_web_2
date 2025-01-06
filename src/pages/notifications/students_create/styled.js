import styled, { css } from "styled-components";
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
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    padding: .8rem 0;

`;

export  const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    & button {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const ButtonResponsible = styled.button`
    ${StyledButton}
    ${outlineStyles(Theme.Colors.yellow800)}
`;
export const ButtonListStudent = styled.button`
    ${StyledButton}
    ${outlineStyles(Theme.Colors.blue900)}
`;
