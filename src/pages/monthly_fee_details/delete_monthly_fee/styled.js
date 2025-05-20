import styled, { css, keyframes } from "styled-components";
import { Theme } from "../../../theme";

// Defina a animação usando keyframes
const formModalAnimation = keyframes`    
    0% {
        opacity: .6;
        top: 0;
    }
    100% {
        opacity: 1;
    }

`;

const StyledButton = css`
    /* width: 30%; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 16px;
    border-radius: 4px;
    & span {
        font-size: .8rem;
        font-weight: 500;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    & svg {
        text-align: center;
        font-size: 1.2em;
    }
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
`;

export const Container = styled.div`
    /* border-top: 1px solid red; */
    width: 60%;
    min-width: 320px;
    max-width: 90%;
    position: fixed;
    top: 40vh;
    left: 60%;
    border-radius: 8px;
    transform: translate(-50%, -50%);
    padding-bottom: 1rem;
    background: ${Theme.Colors.white800};
    box-shadow: ${Theme.Shadow.sh600};
    z-index: 10;
    animation: ${formModalAnimation} 0.8s ease-in-out both; 
    @media (max-width: 425px) {
        width: 90%;
        left: 50%;
    }
`;

export const Header = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding: .6rem .8rem;
    background: ${Theme.Colors.red800};
    & span {
        font-size: .8em;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0.1em;
        color: ${Theme.Colors.white800}
    }
`;

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .8rem;
`;
export const WrapIcon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem .4rem;
    & svg {
        font-size: 4em;
        color: ${Theme.Colors.red800};
    }
`;
export const WrapTitles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    padding: .2rem .8rem;
    margin-bottom: 1rem;
    & span:last-child{
        color: ${Theme.Colors.red800};
    }
    @media (max-width: 768px) {
        gap: .8rem;
        text-align: center;
    }
`;
export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    padding: .2rem .4rem;
    margin-top: .8rem;
    @media (max-width: 425px) {
        flex-direction: column;
    }
`;
export const WrapButton = styled.div`
    height: 32px;
    
    & button {
        ${StyledButton};

    }
`;
