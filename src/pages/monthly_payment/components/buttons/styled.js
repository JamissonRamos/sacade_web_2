import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

const StyledButton = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.4s ease, color 0.4s;
    cursor: pointer;
    & span {
        color: ${Theme.Colors.white800};
    }

    & svg {
        font-size: 1.4em;
    }

    @media (max-width: 768px) {
        & span{
            font-size: .8em;
        }
        & svg{
            font-size: 1em;
        }
    }
`;

export const Container = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
    padding: .2rem 0;
`;

export const WrapButtonDelete = styled.div`
    /* border: 1px solid red; */
    width: 60%;
    display: flex;
    justify-content: center;
    gap: 8px;
    & button {
        ${StyledButton};
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const WrapButtonsAction = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    padding-right: .8rem;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const WrapButtonsUpdatePay = styled.div`
    /* border: 1px solid red; */
    padding: .2rem;
    & button {
        ${StyledButton};
    }
    @media (max-width: 500px) {
        width: 90%;
    }
`;

export const WrapButtonsCancel = styled.div`
    /* border: 1px solid red; */
    padding: .2rem;
    & button {
        ${StyledButton};
        & span {
            color: ${Theme.Colors.red700};
        }
        &:hover{
            & span {
                color: ${Theme.Colors.white800};
            }
            
        }
    }
    @media (max-width: 500px) {
        width: 90%;
    }
`;