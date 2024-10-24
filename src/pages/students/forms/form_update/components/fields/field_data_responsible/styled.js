import styled, { css } from "styled-components";
import { Theme } from "../../../../../../../theme";

const TextCustom = css`
    font-size: 1em;

`;

const StyledButton = css`
    width: 50%;
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
`;

export const Container = styled.div`

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

export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 0 1rem;
    margin-top: .8rem;
    & button {
        ${StyledButton}
    }
`;

export const DividingLine = styled.hr`
    /* border: 1px solid red; */
    width: 100%;
    color: ${Theme.Colors.grey300};
    border: 1px solid;
`;

export const WrapListResponsible = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;
`;
export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    padding: .2rem .3rem;
    /* background-color: ${Theme.Colors.red400}; */
    border-left: 5px solid ${Theme.Colors.yellow800};
    border-radius: 7px;
    @media (max-width: 600px) {
        flex-direction: column;
        border-left: none;
        border-bottom: 1px solid  ${Theme.Colors.grey400};
    }
`;


export const WrapData = styled.div`
    /* border: 1px solid red; */
    width: 76%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
        width: 100%;
    }
    
`;


export const FullName = styled.div`
    /* border: 1px solid red; */
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    & span {
        ${TextCustom};

    }
`;
export const RelationshipLevel = styled.div`
    /* border: 1px solid red; */
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    & span {
        ${TextCustom};

    }
    
`;

export const WrapListButtons = styled.div`
    /* border: 1px solid red; */
    width: 20%;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    /* padding: 0 1rem; */
    & button {
        ${StyledButton}
    }
    @media (max-width: 600px) {
        width: 40%;
        height: 32px;
    }
    
`;

