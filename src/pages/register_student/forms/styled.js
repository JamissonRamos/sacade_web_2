import styled from "styled-components";

export const WrapForms = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    @media (max-width: 768px) {
        height: 90%;
    }
    @media (max-width: 500px) {
        min-width: 320px;
        height: 90%;
        overflow: auto;
    }
`;
