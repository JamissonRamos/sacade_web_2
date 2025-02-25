import styled, { css } from "styled-components";

const StyledWrapCards = css`
    display: flex;
    flex-wrap: wrap; /* Permite que os itens quebrem para baixo */
    justify-content: flex-start; /* Centraliza os itens */
    gap: 1.4rem; /* Espaço entre os cards */
    padding: 1rem ;

    /* @media (max-width: 880px) and (min-width: 768px){
        width: 100%;
        justify-content: center; 
    }
    @media (max-width: 680px) {
        width: 100%;
        justify-content: center; 
    } */
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    padding: .2rem 0;
    @media (max-width: 1024px) {
        width: 100%;
        /* flex-direction: column; */
        justify-content: center; 
    } 
`;

export const WrapStudents = styled.div`
    /* border: 1px solid red; */
    ${StyledWrapCards}
`;

export const WrapPayments = styled.div`
    /* border: 1px solid red; */
    ${StyledWrapCards}
`;

export const WrapRanges = styled.div`
    /* border: 1px solid red; */
    ${StyledWrapCards}

`;