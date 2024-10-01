import styled, { css } from "styled-components";
import { Theme } from "../../../theme";

const StyledButton = css`
    /* width: 100%; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    & span {
        font-size: .8rem;
        font-weight: 500;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
`;
export const HeaderPage = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: .2rem 0;
    margin-bottom: .4rem;
    & span {
        color: ${Theme.Colors.grey500}
    }
    & span:first-child {
        color: ${Theme.Colors.green800}
    }
`;
export const BodyPage = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    max-height: 84%;
    padding-bottom: .8rem;
    overflow: auto;
    & label {
        display: inline-block;
        margin: 0;
        font-size: .8em;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: ${Theme.Colors.green800};
    }
    & input, select{
        box-shadow: none;
    };
    & input:focus, select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
        & svg {
            color: ${Theme.Colors.green800};
        };
    }
`;

export const WrapButtonDelete = styled.div`
    /* border: 1px solid red; */
    width: 50%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    margin: 0 auto;
    & button {
        ${StyledButton}
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const WrapButtonUpdateCancel = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 12px;
    padding: 0 1rem;
    margin-top: 2rem;
    & button {
        ${StyledButton}
    }
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;