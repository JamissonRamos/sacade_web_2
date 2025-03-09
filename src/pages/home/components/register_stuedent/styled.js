import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    /* max-height: 250px; */
    display: flex;
    justify-content: center;
    padding: .6rem .4rem;
    overflow: auto;
    @media (max-width: 1024px) {
        flex-direction: column;
        max-height: 100%;
    }
`;

export const WrapGraphicBar = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-shadow: ${Theme.Shadow.sh900};
`;

export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    min-width: 300px;
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