import styled from "styled-components"; 
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 70%;
    padding-bottom: 1rem;
    overflow: auto;

    & .custom-table tbody tr td, tfoot tr th{
        border: none;

    }

    & thead tr th {
        background-color: ${Theme.Colors.blue500};
        color: ${Theme.Colors.white800}; 
        border: 1px solid ${Theme.Colors.white800}; 
    }

    & thead tr th, tbody tr td {
        font-size: 1em;
        font-weight: 500;
    }
    
    & .custom-table tbody tr {
        background-color: blue; /* Cor de fundo padrão */
    }

    & .custom-table tbody tr:nth-last-child(odd) td{
        background-color: ${Theme.Colors.grey100};/* Cor para linhas ímpares */
    }
    
    & tbody tr td {
        color: ${Theme.Colors.grey800};
    }

    & tfoot tr th {
        color: ${Theme.Colors.grey800};
    }

    @media (max-width: 768px) {
        height: 58%;
    }
    @media (max-width: 600px) {
        .custom-table thead tr th {
            font-size: 0.8em; /* Ajusta o tamanho da fonte */
        }   
        .custom-table tbody tr td {
            font-size: 0.7em; /* Ajusta o tamanho da fonte */
            font-weight: 900;
        }   
    }

    @media (max-width: 425px) {
        height: 50%;
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
        border: 1px solid ${({$bgColor}) => $bgColor === 'HOMEM' ? Theme.Colors.blue2900 : Theme.Colors.red600 };
        border-radius: 50%;
        font-size: 1.5em;
        color: ${({$bgColor}) => $bgColor === 'HOMEM' ? Theme.Colors.blue2900 : Theme.Colors.red600 };
    }
`;

export const Status = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    & span {
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 16px;
        text-transform: uppercase;
    }
`;