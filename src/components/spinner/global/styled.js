import styled from "styled-components";
import {Theme } from "../../../theme"

export const LoadingOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: ${Theme.Colors.black800}; 
    z-index: 9999; /* Aparece sobre outros conteúdos */

    & > span {
        color: ${Theme.Colors.yellow800};
    }
`;