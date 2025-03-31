import styled from "styled-components";
import { Theme } from "../../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .2rem;
    margin-top: .8rem;
`;

export const WrapValue = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .4rem .8rem;
    border-radius: 4px;
    background-color: ${(props) => props.$fontColor};
    & span {
        font-size: 1em;
        font-weight: 500;
        color: ${Theme.Colors.white800};
    }
`;

export const WrapShowTaxes = styled.div`
    border: 1px solid blue;
    display: flex;
    gap: .4rem;
    padding: .2rem;
    & span{
        font-size: .8em;
        font-weight: 400;
        letter-spacing: 1px;
    }
`;

