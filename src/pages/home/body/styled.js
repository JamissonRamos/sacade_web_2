import styled, { css } from "styled-components";
import { Theme } from "../../../theme";

const CustomTabs = css`
    border: none;
    display: flex;
    gap: 1rem;
    &.custom-tabs .nav-link {
        width: 100%;
        display: flex;
        gap: 8px;
        border-radius: 8px; /* Remover bordas arredondadas */
        & svg{
            font-size: 1.8em;
            color: ${Theme.Colors.grey500}; /* Cor do texto das abas */
        }
        & span{
            color: ${Theme.Colors.grey500}; /* Cor do texto das abas */
        }
    }

    &.custom-tabs .nav-link.active {
        background-color: ${Theme.Colors.blue400}; /* Cor de fundo da aba ativa */
        color: ${Theme.Colors.grey400}; /* Cor do texto da aba ativa */
    }
    &.custom-tabs a {
        padding: 9px 16px;
    }


    @media (max-width: 1024px) {
        &.custom-tabs .nav-link {
            & svg {
                font-size: 1.6em;
            }
            & span{
                font-size: 1.2em;
            }
        }
    }

    /* @media (max-width: 528px) {
        height: 120px;
    } */
    /* @media (max-width: 425px) {
        height: 50px;
    } */
    /* @media (max-width: 409px) {
        height: 90px;
    } */
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    margin-top: 2rem;
    & .custom-tabs{
        ${CustomTabs}
    }
    /* Content do meu menu */
    & .tab-content{
        /* border: 1px solid red; */
        margin-top: 1rem;
    }

`;

export const SectionStudents = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    gap: 10px;
`;
export const SectionRegisterStudents = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    gap: 10px;
`;