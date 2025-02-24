import styled, { css } from "styled-components";

const StyledWrapCards = css`
    display: flex;
    flex-wrap: wrap; /* Permite que os itens quebrem para baixo */
    justify-content: flex-start; /* Centraliza os itens */
    gap: 10px; /* Espaço entre os cards */
    padding: .4rem ;


`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    padding: .2rem 0;
    margin-bottom: .4rem;
`;

export const SectionCards = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    gap: 10px;
    padding: .4rem ;
`;

export const WrapStudents = styled.div`
    /* border: 1px solid red; */
    ${StyledWrapCards}

    @media (max-width: 575px) {
        width: 100%;
        justify-content: center; 
    }
`;

export const WrapPayments = styled.div`
    /* border: 1px solid red; */
    ${StyledWrapCards}
`;

export const WrapRanges = styled.div`
    /* border: 1px solid red; */
    ${StyledWrapCards}
`;