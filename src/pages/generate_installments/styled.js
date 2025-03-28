import styled, { css } from "styled-components";
import { Theme } from "../../theme";

const StyledButton = css`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0;
    border-radius: 4px;
    box-shadow: none;
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
    & .btn-success:disabled, .btn-success.disabled, 
        fieldset:disabled .btn-success,
        .btn:disabled, .btn.disabled, 
        fieldset:disabled .btn  
    {
        box-shadow: none;
    }
    @media (max-width: 768px) {
        width: 60%;
    }
`;

export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: .8rem;
    @media (max-width: 425px) {
        justify-content: flex-start;
    }
`;

export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    text-align: center;
    color: ${Theme.Colors.green800};
    @media (max-width: 425px) {
        padding: 0;
        & span:first-child{
            font-size: 1.2rem;
            font-weight: 500;
        }
        & span:last-child{
            font-size: 1rem;
        }
    }
`;

export const SectionList = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 80%;
    padding-bottom: 3rem;
    margin-top: .4rem;
    overflow-x: auto;
    & .form-check .form-check-input {
        /* Modificando o checkBox  */
        float: none;
        margin-left: 0;
    }
    & label {
        color: ${Theme.Colors.blue700};
    }
    @media (max-width: 475px) {
        height: 74%;
    }
`;

export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem;
    & button {
        ${StyledButton}
    } 
`;