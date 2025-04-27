import styled, { css } from "styled-components";

const StyledButton = css`
    width: 20%;
    max-width: 500px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 16px;
    border-radius: 4px;
    transition: background-color 0.4s ease, color 0.4s;
    cursor: pointer;
    & span {
        font-size: .8rem;
        font-weight: 500;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    & svg {
        font-size: 1.2rem;
    }
`;

export const Container = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: .2rem;
`;

export const WrapButtonUpdateCancel = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 8px;
    & button {
        ${StyledButton};
    }
    @media (max-width: 425px) {
        justify-content: center;
    }
`;