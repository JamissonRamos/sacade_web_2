import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";

const CustomTabs = css`
    height: 60px;
    /* margin-bottom: 1rem; */
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
            font-size: .7em;
        }
    }
    @media (max-width: 528px) {
        height: 120px;
    }


    @media (max-width: 425px) {
        height: 50px;
    }
    @media (max-width: 409px) {
        height: 90px;
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
            height: 100%;
        }
    }
`;

export const WrapFields = styled.div `
    height: 100%;
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


