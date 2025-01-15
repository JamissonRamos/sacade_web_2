import styled from "styled-components";
import { Theme } from "../../../theme";

export const BodyPage = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 74%;
    max-height: 74%; 
    @media (max-width: 425px) {  
        max-height: 66%;
    }
    @media (max-width: 375px) {  
        max-height: 62%;
    }
`;

export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    min-width: 300px;
    /* flex: 2; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 .2rem;
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

export const ContentListResponsible = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 100%;
    padding: .8rem 0;
    overflow: auto;
`;