import styled from "styled-components"; 

export const Container = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    min-width: 320px;
    height: 80%;
    @media (max-width: 425px) {
        height: 74%;
    }
`;
