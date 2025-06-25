import styled from "styled-components"; 
import { Theme } from "../../../../../theme";

export const Container = styled.div`
    border: 1px solid red;
    width: 100%;
    min-width: 320px;
    height: 80%;
    padding-bottom: 1rem;
    overflow: auto;

    /* @media (max-width: 768px) {
        height: 58%;
    } */


    @media (max-width: 425px) {
        height: 80%;
    }
`;
