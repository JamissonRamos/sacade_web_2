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

    &  tbody tr:nth-last-child(odd) td{
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
        ${styledText}
        text-transform: uppercase;
    }
`;