import styled from "styled-components";
import { Theme } from "../../../theme";

export const WrapForms = styled.div`
    border: 1px solid red;
    width: 100%;
    
    /* height: 90%; */
    @media (max-width: 768px) {
        height: 90%;
    }
    @media (max-width: 500px) {
        min-width: 400px;
        height: 86%;
        overflow: auto;
    }
`;

