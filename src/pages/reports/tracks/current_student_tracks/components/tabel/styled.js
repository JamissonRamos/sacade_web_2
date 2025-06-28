import styled, {css} from "styled-components"; 
import { Theme } from "../../../../../../theme";

export const Container = styled.div`
    /* border: 2px solid blue; */
    width: 100%;
    min-width: 320px;
    height: 94%;
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
        font-size: .9em;
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

    /* @media (max-width: 425px) {
        height: 50%;
    } */
`;

const styledText = css`
    font-size: 1em;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 16px;
    text-transform: uppercase;
    @media (max-width: 768px) {
        font-size: .8em;
        font-weight: 700;
    }
    @media (max-width: 425px) {
        font-size: .6em;
        font-weight: 900;
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

export const WrapAge = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: .9em;
    font-weight: 900;
    & svg {
        font-size: 1.4em;
        color: ${({$colorFont}) => $colorFont > 17 ? Theme.Colors.green800 : Theme.Colors.red800};
    }

`;

export const WrapSex = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
`;

export const WrapSexText = styled.div`
    /* border: 1px solid red; */
    font-weight: 900;
`;

export const WrapSexIcon = styled.div`
    /* border: 1px solid red; */
    & svg {
        padding: .2rem;
        border: 1px solid ${({$bgColor}) => $bgColor === 'homem' ? Theme.Colors.blue2900 : Theme.Colors.red600 };
        border-radius: 50%;
        font-size: 1.5em;
        color: ${({$bgColor}) => $bgColor === 'homem' ? Theme.Colors.blue2900 : Theme.Colors.red600 };
    }
`;

export const Status = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    & span {
        font-size: .8em;
        font-weight: 900;
        letter-spacing: 1px;
        line-height: 16px;
        text-transform: uppercase;
    }
`;

export const WrapHeightWeight = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    & svg {
        font-size: 1.6em;
        color: ${Theme.Colors.green800};
    }
`;

export const WrapRange = styled.div`
    /* border: 1px solid red; */
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;