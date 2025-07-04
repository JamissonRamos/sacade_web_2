import styled, { css } from "styled-components";
import { Theme } from "../../../theme";

const styledCard = css`
    /* border: 1px solid red; */
    width: 240px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .8rem;
    padding: .8rem;
    background-color: ${Theme.Colors.grey100};
    border-radius: 8px;
    transition: 350ms;
    &:hover {
        width: 250px;
        height: 58px;
        border-bottom: 4px solid ${Theme.Colors.blue400};
    }
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding: .8rem .2rem;
    & a{
        ${styledCard};
    }
`;


export const CardSvg = styled.div`
    /* border: 1px solid red; */
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 .2rem;
    & svg {
        width: 100%;
        height: 100%;
        color: ${Theme.Colors.green800};
    }
`;
export const CardName = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    
    & span {
        width: 100%;
        padding: .2rem;
        color: ${Theme.Colors.grey700};
    }
`;
export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 80%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    padding: 0 .1rem;
    text-align: center;
    color: ${Theme.Colors.green800};
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 2rem;
        & span:first-child{
            font-size: 1.6em;
            font-weight: 500;
        }
        & span:last-child{
            font-size: 1em;
        }
    }
    @media (max-width: 425px) {
        & span:first-child{
            font-size: 1.2rem;
            font-weight: 500;
        }
    }
`;