import styled, { css } from "styled-components";

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

export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 38px;
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