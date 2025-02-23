import styled, { css } from "styled-components";
import { Theme } from "../../../../../../theme";


const StyledButton = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 12px;
    border: none;
    box-shadow: none !important ; 
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

        & button {
            width: 70%;
        }
    }
`;


export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    /* margin-top: 1rem; */
`;

export const SectionPrime = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    justify-content: center;
    padding: .2rem ;
    margin: .4rem 0;
`;
export const SectionSecondary = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: .8rem;
    padding: .2rem;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: .4rem;
    }
`;

export const WrapButtonContained = styled.div`
    /* border: 1px solid blue; */
    width: 30%;
    & button{
        ${StyledButton}
        background-color: ${Theme.Colors.green800};
    }
    @media (max-width: 768px) {
        width: 60%;
    }
`;
export const WrapButtonContainedDanger = styled.div`
    /* border: 1px solid blue; */
    width: 50%;
    & button{
        ${StyledButton}
        background-color: ${Theme.Colors.red800};
    }
    @media (max-width: 768px) {
        width: 60%;
    }
`;
export const WrapButtonOutline = styled.div`
    /* border: 1px solid blue; */
    width: 30%;
    & button{
        ${StyledButton}
        border: 1px solid  ${Theme.Colors.red600}; 
    }
    @media (max-width: 768px) {
        width: 60%;
    }
`;