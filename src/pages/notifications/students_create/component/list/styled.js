import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";


const StyledText = css`
    @media (max-width: 768px) {
        & span {
            font-size: 1em;
        }
    }
    @media (max-width: 425px) {
        & span {
            font-size: .8em;
        }
    }

`;

export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 350px;
    height: 100%;
    padding-right:  1rem;
    overflow: auto;
`;

export const Cards = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    overflow: auto;
`;

export const Card = styled.div`
    /* border: 1px solid red; */
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .8rem .6rem;
    margin-bottom: .6rem;
    margin: 0 auto 12px auto;
    /* border-left: 5px solid  ${Theme.Colors.grey500}; */
    border-left: 5px solid ${props => props.$checkedItems 
            ? Theme.Colors.green800 
            : Theme.Colors.grey500};
    border-radius: 4px;
    box-shadow: ${Theme.Shadow.sh900};
    & .form-check-inline {
        margin: 0;
    }
    cursor: pointer;
`;

export const WrapContent = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
`;

export const WrapIndex = styled.div`
    margin-right: 6px;
    ${StyledText};
`;

export const WrapName = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    ${StyledText};
`;

export const CircleLetterName = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Theme.Colors.blue100};
    border-radius: 20px;
    & span {
        font-weight: 900;
        font-size: 18.1px;
        text-transform: uppercase;
        color: ${Theme.Colors.blue800};
    }

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
        & span {
            font-size: 16.1px;
        }
    }
    @media (max-width: 425px) {
        width: 20px;
        height: 20px;
        & span {
            font-size: 12px;
        }
    }
`;

export const WrapStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    & span{
        text-align: center;
        text-transform: uppercase; 
        font-weight: 500;
        font-size: 0.65em;
        ${StyledText};
    }
`;

