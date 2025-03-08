
import styled, { css } from "styled-components";

const StyledWrapCards = css`
    display: flex;
    flex-wrap: wrap; /* Permite que os itens quebrem para baixo */
    justify-content:center;
    gap: 1.4rem; 
    padding: 1rem ;
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    justify-content: center;
    padding: .2rem 0;
    @media (max-width: 1024px) {
        width: 100%;
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