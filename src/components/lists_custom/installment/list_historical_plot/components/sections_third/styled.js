import styled, { css } from "styled-components";
import { Theme } from "../../../../../../theme";

const StyledWrap = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .8rem;
    & span {
        font-size: 1em;
        font-weight: 500;
        color: ${Theme.Colors.white800};
    }
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .2rem;
    margin-top: .8rem;
`;

export const WrapValues = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: .4rem .8rem;
    border-radius: 4px;
    background-color: ${(props) => props.$fontColor};
`

export const WrapValueInterest = styled.div`
    /* border: 1px solid blue; */
    ${StyledWrap}
`;

export const WrapValueInstallment = styled.div`
    /* border: 1px solid blue; */
    ${StyledWrap}
`;

export const WrapSubTotal = styled.div`
    ${StyledWrap}

`;