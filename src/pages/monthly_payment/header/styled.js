import styled from "styled-components"; 
import { Theme } from "../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%; 
    display: flex;  
    flex-direction: column;
    justify-content: center;   
    gap: .4rem;
    padding: .2rem 0;
    margin-bottom: 1rem; 
    & span{
        
        color: ${Theme.Colors.grey600};
    }
    & span:first-child {
        color: ${Theme.Colors.green800};
    }
    overflow: visible;
`;