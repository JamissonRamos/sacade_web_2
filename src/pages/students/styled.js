import styled from "styled-components";
import { Theme } from "../../theme";

export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 80%;
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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