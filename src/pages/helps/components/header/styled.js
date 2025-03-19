import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    padding: 2rem 0;
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
            font-size: 1.4em;
        }
        & span {
            font-size: 1em;
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
        }
    }
`;
export const WrapSearchBar = styled.div`
    /* border: 1px solid red; */
    width: 60%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: .2rem ;
    border-radius: 8px;
    background-color: ${Theme.Colors.grey100};
    box-shadow: ${Theme.Shadow.sh700};
    & svg {
        width: 10%;
        font-size: 1.2rem;
        font-weight: 500;
        color: ${Theme.Colors.green800};
    }
    & input {
        width: 90%;
        height: 60%;
        background-color: transparent;
    }
    @media (max-width: 700px) {
        width: 90%;
        height: 40px;
        gap: .4rem;
        & svg {
            width: 10%;
            font-size: 1rem;
        }
        & input {
            height: 100%;
        }
    }
`;