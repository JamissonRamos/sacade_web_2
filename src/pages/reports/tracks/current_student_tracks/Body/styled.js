import styled from "styled-components"; 

export const Container = styled.div`
    border: 1px solid red;
    width: 100%;
    min-width: 320px;
    height: 80%;
    /* padding-bottom: 2rem; */
    @media (max-width: 425px) {
        height: 80%;
    }
`;
