import styled, { css } from "styled-components"
import { Theme } from "../../theme"

const styledButton = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 16px;
    & span {
        font-size: .8em;
        font-weight: 500;
    }
    & svg {
        font-size: 1.2em;
    }
`;
const styledCard = css`
    width: 300px;
    padding: 2rem .8rem;
    border-radius: 4px;
    box-shadow: ${Theme.Shadow.sh900}; 
    transition: padding 0.4s; 
    & button{
        width: 100%;
    }
    @media (max-width: 425px) {
        width: 280px;
        padding: 2.4rem 1rem;
    }
`;
export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100vw;
    min-width: 320px;
    height: 100vh;
    overflow: auto;
`;
export const Content = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
        height: auto;
        padding: 2rem 0;
    }
`;
export const Cards = styled.div`
    /* border: 5px solid yellow; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 1rem 0;
    overflow: auto;
    @media (max-width: 768px) {
        padding: .8rem 1rem;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        padding-bottom: 2rem;
    }  
`;
export const Card = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background-color: ${Theme.Colors.grey200};
    ${styledCard}
`;
export const SectionPrime = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const WrapImg = styled.div`
    /* border: 1px solid red; */
    min-height: 200px;
    max-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
        max-width: 90%;
        max-height: 90%;
        object-fit: fill;
    }
    @media (max-width: 425px) {
        max-height: 140px;
        min-height: 140px;
    }
`;
export const WrapText = styled.div`
    /* border: 1px solid red; */
    min-height: 100px;
    text-align: center;
    & span {
        color: ${Theme.Colors.grey500};
    }
    @media (max-width: 425px) {
        & span {
            font-size: 1em;
            font-weight: 500;
        }
    }
`;
export const SectionSecondary = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
`;
export const WrapButton = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem;
    & button {
        ${styledButton};
    }
    & button#buttonLogin{
        border-color: ${Theme.Colors.yellow700};
        color: ${Theme.Colors.yellow700};
        &:hover {
            color: ${Theme.Colors.white800};
            background-color: ${Theme.Colors.yellow700};
        }
    }
`;
export const WrapVersion = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    & span {
        font-size: .7rem;
        font-weight: 800;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: ${Theme.Colors.grey700};
    }
`;