import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";


export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    margin-bottom: .8rem;
    & span {
        color: ${Theme.Colors.grey500};
    }
    & span:first-child {
        color: ${Theme.Colors.green800};
    }
`;
export const FullName = styled.div`
    /* border: 1px solid red; */
    display: inline;
    padding: .4rem;
    color: ${Theme.Colors.grey500};
    font-weight: 800;

`;
