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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 2;
    color: ${Theme.Colors.green800};
    @media (max-width: 425px) {  
        padding: 0;
        flex: none;
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