import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: .8rem;
    box-shadow: ${Theme.Shadow.sh900};
    border-radius: 4px;
    overflow: auto;
`;

export const WrapTitle = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    padding: .8rem 0;
    & span{
        color: ${Theme.Colors.grey500}
    }
`;
