import styled from "styled-components";
import { Theme } from "../../theme";

export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    min-width: 300px;
    /* height: 80%; */
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    }
`;

export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 310px;
    max-height: 76%;
    padding-bottom: .8rem;
    overflow: auto;
`;