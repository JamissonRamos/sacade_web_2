import styled from "styled-components";
import { Theme } from "../../../../../theme";

export const Container = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 1rem; */
    /* box-shadow: ${Theme.Shadow.sh900}; */
    /* border-radius: 4px; */
    overflow: auto;
    /* overflow: visible; */

`;

export const WrapTitle = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    padding:  1rem;
    & span{
        color: ${Theme.Colors.grey500}
    }
`;
