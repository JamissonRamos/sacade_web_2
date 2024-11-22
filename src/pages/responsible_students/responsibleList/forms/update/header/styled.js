import styled from "styled-components";
import { Theme } from "../../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    /* height: 20%; */
    display: flex;
    flex-direction: column;
    gap: .4rem;    
    & span {
        color: ${Theme.Colors.grey500}; 
    }
    & span:first-child {
        color: ${Theme.Colors.green800};
    }
    padding-bottom: .8rem;
`;