import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";

const CustomTabs = css`
    border-bottom: 1px solid red;
    height: 60px;
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
        border-radius: 4px;
    }
    @media (max-width: 1024px) {
        &.custom-tabs a {
            padding: .8rem ;
        }
        &.custom-tabs .nav-link {
            font-size: .8em;
        }
    }
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    & form {
        /* border: 1px solid blue; */
        width: 100%;
        /* min-width: 320px; */
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
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
        & textarea {
            height: 100px;
        };
        & input:focus, select:focus, textarea:focus  {
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
        @media (max-width: 500px) {
            height: 100%;
        }
    }
`;

export const WrapFields = styled.div `

    max-height: 90%;
    padding-bottom: .4rem;
    overflow: auto;
    @media (max-width: 425px) {
        padding-bottom: 3rem;
    }
    
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


