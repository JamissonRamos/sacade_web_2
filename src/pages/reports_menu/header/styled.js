import styled from "styled-components";
import { Theme } from "../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    padding: 2rem 0;
    margin-bottom: 1rem;
    @media (max-width: 700px) {
        padding: .4rem .2rem;
        gap: .2rem;
    }
`;

export const WrapTitleIcone = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: .2rem 0;
    & svg {
        font-size: 2.4em;
        color: ${Theme.Colors.green800};
    }
    & span {
        font-weight: 500;
        color: ${Theme.Colors.grey700};
    }
    @media (max-width: 700px) {
        gap: .4rem;
        & svg {
            font-size: 1.6em;
        }
        & span {
            font-size: 1.4em;
            font-weight: 400;
        }
    }
`;

export const WrapSubTitle = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem 0;
    & span {
        font-weight: 500;
        color: ${Theme.Colors.grey700};
    }
    @media (max-width: 700px) {
        & span {
            font-size: 1.2em;
            font-weight: 400;
        }
    }
`;