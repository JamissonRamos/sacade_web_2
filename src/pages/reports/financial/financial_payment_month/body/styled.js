import styled from "styled-components";
import { Theme } from "../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 90%;
`;

export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: center;
    padding: .4rem;
    margin-top: 1rem;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 9px 16px;
    background-color: transparent;
    border: 2px solid ${Theme.Colors.green800};
    border-radius: 4px;
    transition: all 0.5s ;
    & span, svg {
        font-size: .9em;
        color: ${Theme.Colors.green800};
    }
    & svg {
        font-size: 1.4em;
    }
    &:hover {
        background-color: ${Theme.Colors.green800};
        font-size: 1.1em;
        & span, svg {
            color: ${Theme.Colors.grey100};
        }
    }

    @media (max-width: 425px) {
        padding: 6px 12px;
        border: 1px solid ${Theme.Colors.green800};
        & span, svg {
            font-size: .8em;
        }
        & svg {
            font-size: 1.2em;
        }
    }

`;