import styled from "styled-components"; 
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 66%;
    padding-bottom: 1rem;
    overflow: auto;

    & thead tr th, tbody tr td {
        font-size: 1em;
        font-weight: 500;
    }
    
    & tbody tr td {
        color: ${Theme.Colors.grey800};
    }

    & tfoot tr td {
        padding: 0 auto;
        color: ${Theme.Colors.grey800};
        font-weight: 900;
    }

    & tfoot tr th {
        padding: 0;
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