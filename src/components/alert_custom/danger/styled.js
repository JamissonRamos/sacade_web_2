import styled, { css, keyframes } from "styled-components";
import { Theme } from "../../../theme";

const StyledVariant = css`
    background-color: ${Theme.Colors.red400} ;
    border-color: ${Theme.Colors.red700};
    color: ${Theme.Colors.red500};
    & svg {
        color: ${Theme.Colors.red700};
    }
    &::before {
        background-color: ${Theme.Colors.red700} ;    
    }
`;

const slideRight = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;
const progress = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

export const AlertCustom = styled.div`
    width: 250px;
    max-width: 300px;
    max-height: 200px;
    position: absolute;
    top: 10%;
    right: 2%;
    display: flex;
    gap: 1rem;
    padding: 1rem  ;
    border: 1px solid;
    border-radius: 8px;
    font-size: .8em;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: .7px;  
    animation: ${slideRight} 0.5s ease-in-out both; 
    z-index: 1000;
    &::before {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 20px;
        animation:  ${progress} 5s linear forwards;
    }
    ${StyledVariant};
`;

export const Closse = styled.button`
    & svg {
        position: absolute;
        top: 4px;
        right: 10px;
        font-size: 1.2rem;
        color: ${Theme.Colors.red500};
        cursor: pointer;
    }
`;

export const WrapContent = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 1rem;
    background-color: transparent;
    color: ${Theme.Colors.red500};
    & > span {
        font-size: 1em;
        font-weight: 500;
        color: ${Theme.Colors.red500};
    }
    & > svg {
        font-size: 2em;
        color: ${Theme.Colors.red500};
    }
`;