import styled, { css } from "styled-components";
import { Theme } from "../../../../../../../../theme";

const StyledButton = css`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 4px;
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
    @media (max-width: 425px) {
        width: 50%;
    }
`;

export const Container = styled.div`
    & .modal .modal-dialog .modal-content {
        min-width: 350px;
    }
    /* border: 1px solid red; */
    & .was-validated .form-control:invalid, .form-control.is-invalid{
        //Regras para os controles de inputs
        margin-bottom: .2rem;
    }
    & .invalid-feedback{
        //Controle de msg de error
        position: static;
        padding: 0;
        margin-top: .2rem;
        margin-bottom: 0;
    } 
`;

export const DescriptionModal = styled.div`
    & span {
        color: ${Theme.Colors.grey600};
    }
`;
export const WrapFields = styled.div`
    & label {
        display: inline-block;
        margin: 0;
        font-size: .8em;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: ${Theme.Colors.green800};
    }
    & input:focus, select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
        & svg {
            color: ${Theme.Colors.green800};
        }
    }
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
    margin-top: 1rem;
    & button {
        ${StyledButton}
    }
    @media (max-width: 425px) {
        justify-content: center;
    }
`;