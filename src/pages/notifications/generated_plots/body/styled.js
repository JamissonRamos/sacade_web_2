import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Body = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 1rem 0;
    & span {
        text-align: start;
        color: ${Theme.Colors.grey800};
    }
`;

export const WrapCards = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 0;
`;
