import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";

const styledButton = css`
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    padding: .4rem 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all .3s ease-in-out;
    & button{
        border-radius: 8px;
    }
    & svg{
            font-size: 1.2em;
            color: ${Theme.Colors.white800};
        }
    & span{
        font-size: 1em;
        font-weight: 500;
        color: ${Theme.Colors.white800};
    }
    &:hover {
            transform: scale(1.02);
    }
    @media (max-width: 768px) {
        padding: .4rem .8rem;
        & span{
            font-size: .8em;
        }
    }
    @media (max-width: 425px) {
        padding: .2rem .6rem;
        & span{
            font-size: .7em;
        }
    }
    @media (max-width: 375px) {
        & span{
            font-size: .8em;
        }
    }
`;

const styledOutline = css`
    background: transparent;
    border: 1px solid ${Theme.Colors.red800};
    & svg{
        color: ${Theme.Colors.red800};
    }
    & span{
        color: ${Theme.Colors.red800};
    }
    &:hover {
        & span{
            color: ${Theme.Colors.white800};
        }
        & svg{
            color: ${Theme.Colors.white800};
        }
    }

`;

const styledWrepCancelPay = css`
    width: 100%;
    display: flex;
    align-items: center;    
    justify-content: center;
    padding: 0 .8rem;
`;
export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding: .2rem 0;
`;

export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;      
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 520px) {
        flex-direction: column;
        gap: 1rem; 
        padding: .2rem 0;
    }
    @media (max-width: 425px) {
        flex-direction: row;
    }
    @media (max-width: 375px) {
        flex-direction: column;
    }
`;

export const WrapButtonCancel = styled.div`
    /* border: 1px solid red; */
    ${styledWrepCancelPay}
    button {
        ${styledButton};
        ${styledOutline}
    }
`;

export const WrapButtonPay = styled.div`
    /* border: 1px solid red; */
    ${styledWrepCancelPay}
    button {
        background: ${Theme.Colors.green800};
        ${styledButton}
    }
`;