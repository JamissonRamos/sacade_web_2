import styled from "styled-components"; 
import { Theme } from "../../../theme";

export const WrapPages = styled.div`
/* border: 1px solid blue; */
    width: 100%;
    height: 100%; 
    padding: 1.4rem .8rem;
    border-radius: 8px;
    overflow-y: auto;
    box-shadow: ${Theme.Shadow.sh800};  
    transition: padding 0.4s, margin 0.4s;
    @media (max-width: 768px) {
        padding: .8rem;
    }
    @media (max-width: 425px) {
        padding: .4rem;
        margin: 0;
        box-shadow: none;
    }
    
`;