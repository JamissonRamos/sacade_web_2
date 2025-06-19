import styled from "styled-components"; 
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 70%;
    padding-bottom: 1rem;
    overflow: auto;

    & thead tr th, tbody tr td {
        font-size: .8em;
        font-weight: 500;
    }
    & tbody tr td {
        color: ${Theme.Colors.grey800};
    }
    & tbody tr:nth-child(odd) {
        background-color: red; /* Cor de fundo padrão */
    }
`;