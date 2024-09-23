import styled from "styled-components";
import { Theme } from "../../theme";

export const Container = styled.div `
/* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`   
export const WrapIcon = styled.div `
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    & svg {
        font-size: 5em;
        color: ${Theme.Colors.yellow500}
    }

`
export const WrapText = styled.div `
    /* border: 1px solid red; */
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4rem;

    & span {
        color: ${Theme.Colors.grey600};
    }

    @media (max-width: 1024px) {
        width: 80%;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
`
export const WrapTitle = styled.div `
    display: flex;
    gap: .2rem;

    & span:first-child {
        color: ${Theme.Colors.yellow800}
    }
`;
export const WrapImg = styled.div `
    /* border: 1px solid red; */
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`
export const WrapButton = styled.div `
    /* border: 1px solid red; */
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    & button {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border: none;
        font-size: 1em;
        color: ${Theme.Colors.blue100};
        background-color: ${Theme.Colors.yellow800}; //yellow500
        transition: background-color .4s;
        &:hover{
            color: ${Theme.Colors.blue100};
            background-color: ${Theme.Colors.yellow600}; //yellow500
        }
        & svg{
            font-size: 1.2em;
        }
    }

    @media (max-width: 1440px) {
        width: 40%;
    }
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 375px) {
        width: 100%;
    }

`
