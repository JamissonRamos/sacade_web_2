import styled from "styled-components";
import { Theme } from "../../../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    padding: .2rem 0;
`;

export const WrapText = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    & span {
        color: ${Theme.Colors.grey500}; 
    }
    & span:first-child {
        color: ${Theme.Colors.green800};
    }
`;