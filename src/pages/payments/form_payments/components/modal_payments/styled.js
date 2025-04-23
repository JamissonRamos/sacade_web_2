import styled from "styled-components";
import { Theme } from "../../../../../theme";

export const Container = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 900px;
    max-height: 80vh;
    position: fixed;
    top: 40vh;
    left: 50%;
    /* left: calc(240px); */
    transform: translate(-350px, -40%);
    padding: .8rem;
    background: ${Theme.Colors.white800};
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
    z-index: 10;
    animation-duration: .8s;
    animation-name: formModal;
    overflow: auto;
    @keyframes formModal {
        from {
            top: 0%;
        }
        to {
            top: 40%;
        }
    }
    @media (max-width: 1024px) {
        width: 70%;
        transform: translate(-200px, -40%);
    }
    @media (max-width: 768px) {
        width: 80%;
        transform: translate(-280px, -30%);
    }
    @media (max-width: 425px) {
        width: 95%;
        transform: translate(-10px, -40%);
    }
`;

export const Content = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;