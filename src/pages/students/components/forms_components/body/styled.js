import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";

const CustomTabs = css`
    height: 60px;
    margin-bottom: 1rem;
    border: none;
    &.custom-tabs .nav-link {
        width: 100%;
        color: ${Theme.Colors.grey600}; /* Cor do texto das abas */
        border-radius: 0; /* Remover bordas arredondadas */
        font-size: .8em;
    }

    &.custom-tabs a {
        padding: 1rem .8rem ;
    }
    &.custom-tabs .nav-link.active {
        background-color: ${Theme.Colors.blue400}; /* Cor de fundo da aba ativa */
        color: ${Theme.Colors.grey400}; /* Cor do texto da aba ativa */
    }

    @media (max-width: 1024px) {
        &.custom-tabs a {
            padding: .8rem ;
        }
        &.custom-tabs .nav-link {
            
            font-size: .6em;
        }
    }
    @media (max-width: 520px) {

        height: 100px;
    }
`;
const StyledButton = css`
    /* width: 100%; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 4px;
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
    @media (max-width: 425px) {
        width: 50%;
    }
`;



export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    & form {
        /* border: 1px solid blue; */
        width: 100%;
        min-width: 320px;
        height: 100%;
        display: flex;
        flex-direction: column;
        & label {
            display: inline-block;
            margin: 0;
            font-size: .8em;
            font-weight: 500;
            letter-spacing: 0.5px;
            line-height: 1.5;
            color: ${Theme.Colors.green800};
        }
        & input, select{
            box-shadow: none;
        };
        & input:focus, select:focus {
            border-color: ${Theme.Colors.green800};
            box-shadow: none;
            & svg {
                color: ${Theme.Colors.green800};
            };
        }
        & ::placeholder {
            font-size: .9em;
        }
        & .custom-tabs{
            ${CustomTabs}
        }
        @media (max-width: 425px) {
            height: 94%;
        }
    }
`;

export const WrapFields = styled.div `
    height: 100%;
    padding-bottom: .4rem;
    overflow: auto;

    
`;
export const ErrorCount = styled.div `
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem .8rem;
    background-color: ${Theme.Colors.red400};
    font-size: 1em;
    color: ${Theme.Colors.red800};

`;

export const WrapButtons = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 12px;
    /* padding: 0 1rem; */
    margin-top: 1rem;
    & button {
        ${StyledButton}
    }
    @media (max-width: 425px) {
        height: 60px;
        justify-content: center;
    }
`;

