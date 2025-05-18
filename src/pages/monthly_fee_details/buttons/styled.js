import styled, { css } from "styled-components";
import { Theme } from "../../../theme";

const styledButton = css`
    width: 60%;
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
        font-size: .8em;
        font-weight: 500;
        color: ${Theme.Colors.white800};
    }
    &:hover {
        transform: scale(1.02);
    }
    @media (max-width: 768px) {
        width: 80%;
        padding: .4rem .8rem;
        & span{
            font-size: .8em;
        }
    }
    @media (max-width: 425px) {
        padding: .4rem .6rem;
    }

    @media (max-width: 375px) {
        & span{
            font-size: .8em;
        }
    }
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    margin-bottom: 1rem;
`;

export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    padding: .4rem 1rem;
    border-bottom: 2px solid ${Theme.Colors.grey400}; 
    
    button {
        background: ${Theme.Colors.green800};
        ${styledButton}
        margin-bottom: 1rem;
    }
`;