import styled, { css } from "styled-components"
import { Theme } from "../../theme"

const styledCard = css`
    width: 300px;
    
    padding: 1rem .8rem;
    border-radius: 4px;
    box-shadow: ${Theme.Shadow.sh900}; 
    transition: padding 0.4s; 
    & button{
        width: 100%;
    }
    @media (max-width: 425px) {
        width: 200px;
    }

`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100vw;
    height: 100vh;
    min-width: 320px;
    padding: .8rem;
    /* background-color:  ${Theme.Colors.grey400}; */
    @media (max-width: 768px) {
        padding: .8rem;
    }
    @media (max-width: 425px) {
        padding: 0;
    }
    overflow: auto;
`;

export const Content = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    display: flex;
    align-items: center;
    padding: .8rem;
    @media (max-width: 425px) {
        padding: 0;
    }
`;
export const Cards = styled.div`
    /* border: 1px solid blue; */

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 1rem 0;
    overflow: auto;
    @media (max-width: 768px) {
        padding: .8rem 1rem;
    }
    @media (max-width: 425px) {
        /* flex-direction: column; */
    }
    
`;
export const Card = styled.div`
    /* border: 1px solid red; */
    /* width: 100%;
    max-width: 300px; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background-color:  ${Theme.Colors.grey200};
    ${styledCard}
`;

export const SectionPrime = styled.div`
    /* border: 1px solid red; */

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

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
        min-height: 100px;
        max-height: 100px;
    }


`;
export const WrapText = styled.div`
    /* border: 1px solid red; */
    min-height: 100px;
    max-height: 100px;
    text-align: center;

    & span {
        color: ${Theme.Colors.grey500};
        
    }

    @media (max-width: 425px) {
        & span {
            font-size: .7em;
        }
    }
`;
export const SectionSecondary = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    padding: .2rem;
`;
export const WrapButton = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & button {
        font-size: .6em;
        font-weight: 500;
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



