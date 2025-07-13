import styled, {css} from "styled-components"; 
import { Theme } from "../../../../../../theme";

const styledText = css`
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 1px;
    @media (max-width: 768px) {
        font-size: .8em;
        font-weight: 900;
    }
    @media (max-width: 425px) {
        font-size: .7em;
        font-weight: 900;
    }
`;

export const Container = styled.div`
    /* border: 2px solid blue; */
    width: 100%;
    min-width: 320px;
    max-height: 84%;
    overflow: auto;
    & .custom-table thead tr th {
        background-color: ${Theme.Colors.blue500};
        font-size: .9em;
        font-weight: 900;
        color: ${Theme.Colors.white800}; 
        border: 2px solid ${Theme.Colors.white800}; 
        &.hidle-boder-left {
            border-left: hidden;
        }
        &.hidle-boder-right {
            border-right: hidden;
        }
    }

    & .custom-table tbody tr td, tfoot tr th{
        
        border: none;
    }

    & .custom-table tbody tr {
        
        background-color: blue; 
    }

    & .custom-table tbody tr td {
        color: ${Theme.Colors.grey800};
        font-size: 1em;
        font-weight: 500;
    }

    & .custom-table tbody tr:nth-last-child(odd) td{
        background-color: ${Theme.Colors.grey100};
    }

    & tfoot tr th {
        color: ${Theme.Colors.grey800};
    } 

    @media (max-width: 768px) {
        height: 90%;
    }
    @media (max-width: 600px) {
        & .custom-table thead tr th {
            font-size: 0.8em; 
        }   
        & .custom-table tbody tr td {
            font-size: 0.7em; 
            font-weight: 900;
        }   
    }

    @media (max-width: 425px) {
        height: 80%;
    }
`;

export const WrapFullName = styled.div`
    /* border: 1px solid red; */
    min-width: 140px;
    display: flex;
    align-items: center;
    & span {
        ${styledText}
    }
`;

export const WrapStatus = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    & span {
        ${styledText};
        text-transform: uppercase;
    }
`;

export const WrapNotice = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    padding: .2rem 0;
    & span{
        text-align: center;
        color: ${Theme.Colors.grey700};
    }
`;

export const WrapButton = styled.button`

    display: flex;
    align-items: center;
    gap: 12px;
    padding: .4rem 1rem;
    margin-top: 1.2rem;
    background: transparent;
    border: 1.75px solid ${Theme.Colors.grey500};
    border-radius: 4px;
    transition: all 0.4s;
    & span, svg{
        font-size: 1em;
        font-weight: 700;
        color: ${Theme.Colors.grey500};
    }
    & svg {
        font-size: 1.2em;
    }
    &:hover{
        background-color: ${Theme.Colors.grey500};
        & span, svg{
            color: ${Theme.Colors.grey100};
        }
    }
`;