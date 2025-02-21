import styled from "styled-components";
import { Theme } from "../../../../theme";

export const WrapDescription = styled.div`
    /* border: 1px solid red; */
    & span {
        color: ${Theme.Colors.grey600}
    }
`;

export const WrapFormLabel = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    gap: .8rem;
    text-transform: uppercase;
`;

export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    & button {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        & span {
            font-size: .8rem;
            font-weight: 500;
            line-height: 18px;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
    }
    @media (max-width: 320px) {
        flex-direction: column;
    }
`;