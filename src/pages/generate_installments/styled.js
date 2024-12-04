import styled from "styled-components";
import { Theme } from "../../theme";

export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 100%;
    /* overflow: auto; */
    
`;
export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    text-align: center;
    color: ${Theme.Colors.green800};
    @media (max-width: 425px) {
        padding: 0;
        & span:first-child{
            font-size: 1.2rem;
            font-weight: 500;
        }
        & span:last-child{
            font-size: 1rem;
        }
    }
`;

export const SectionList = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 80%;

    padding-bottom: 1rem;
    margin-top: 1rem;
    overflow: auto;

`;


