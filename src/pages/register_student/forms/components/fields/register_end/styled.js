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
    padding: .2rem 0;
`;
export const SectionPrime = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    & span {text-align: center;
        color: ${Theme.Colors.green800};
    }

    @media (max-width: 425px) {
        & > span {
            font-size: .8em;
        }
    }
`;
export const SectionSecondary = styled.div`
    /* border: 1px solid blue; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const WrapButton = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: .2rem 0;
    margin-top: 2rem;
`;

export const WrapButtonContained = styled.div`
    /* border: 1px solid blue; */
    width: 40%;
    & button{
        ${StyledButton}
        background-color: ${Theme.Colors.green800};
    }
`;
export const WrapButtonContainedDanger = styled.div`
    /* border: 1px solid blue; */
    width: 40%;
    & button{
        ${StyledButton}
        background-color: ${Theme.Colors.red800};
    }
`;
export const WrapButtonOutline = styled.div`
    /* border: 1px solid blue; */
    width: 40%;
    & button{
        ${StyledButton}
        border: 1px solid  ${Theme.Colors.red600}; 
    }
`;