import styled from "styled-components";
import { Theme } from "../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    margin-top: .6rem;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    gap: .4rem;
    padding: .4rem 1rem;
    margin-bottom: .8rem;
    border-bottom: 2px solid ${Theme.Colors.grey400};
`;

export const Cards = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    padding-bottom: .8rem;
`;

export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .2rem;
    padding: 0 .1rem;
    margin-top: 1rem;
    text-align: center;
    color: ${Theme.Colors.green800};
    @media (max-width: 768px) {
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
        & span:last-child{
            font-size: .9em;
        }
    }
`;