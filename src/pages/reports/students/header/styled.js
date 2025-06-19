import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-bottom: 1rem;
`;
export const WrapTexts = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    & span {
        color: ${Theme.Colors.grey500};
    }
    & span:first-child {
        color: ${Theme.Colors.green800};
    }
`;