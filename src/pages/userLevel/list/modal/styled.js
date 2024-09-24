import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Name = styled.div`
    /* border: 1px solid red; */
    margin-top: .2rem;
    & span {
        color: ${Theme.Colors.blue500}
    }

`;
export const WrapFormLabel = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    gap: .8rem;
`;