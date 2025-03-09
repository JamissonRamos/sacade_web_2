
import styled, { css } from "styled-components";

const StyledWrapCards = css`
    display: flex;
    flex-wrap: wrap; /* Permite que os itens quebrem para baixo */
    align-items: center;
    justify-content: center;
    gap: 1.4rem; 
    padding: 1.6rem 0 .8rem 0;
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    justify-content: center;
    padding: .2rem 0;
    @media (max-width: 1024px) {
        justify-content: center; 
    } 
`;

export const WrapStudents = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    ${StyledWrapCards};
`;
