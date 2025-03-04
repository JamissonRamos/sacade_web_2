import styled, {css} from "styled-components";
import { Theme } from "../../../../../../../theme";

const StyledButton = css`
    /* width: 100%; */
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
    
    @media (max-width: 425px) {
        width: 40%;
    }
`;

export const Container = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    min-width: 310px;
    height: 90%;
    display: flex;
`;

export const FormCreate = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding-bottom: .2rem;
    & label {
        display: inline-block;
        margin: 0;
        font-size: .8em;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: ${Theme.Colors.green800};
    }
    & form input:focus, form .input-group input:focus, form select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
        & svg {
            color: ${Theme.Colors.green800};
        }
    }
    overflow: auto;
    @media (max-width: 425px) {
        padding-bottom: 3.8rem;
    }
`;

export const WrapButtonUpdateCancel = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    padding: .2rem .4rem;
    & button {
        ${StyledButton};
    }
    @media (max-width: 425px) {
        justify-content: center;
    }
`;
