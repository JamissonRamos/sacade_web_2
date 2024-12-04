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
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
    @media (max-width: 768px) {
        width: 60%;
    }
`;

export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 100%;
    padding-bottom: .8rem;
    /* overflow: auto; */
    
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
    height: 70%;

    padding-bottom: 1rem;
    margin-top: 1rem;
    overflow: auto;

`;

export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    & button {
        ${StyledButton}
    } 

    
`;


