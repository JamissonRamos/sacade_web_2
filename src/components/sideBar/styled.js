import styled, {css} from "styled-components";
import { Theme } from "../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 240px;
    height: 100%;
    position: fixed;
    left: 0;
    padding: .4rem;
    background-color: ${Theme.Colors.blue600};
    transition: width 0.4s;
    @media (max-width: 768px) {
        width: ${({$showSidebar}) => $showSidebar ? '80px' : '240px'} ;
    }
    @media (max-width: 425px) {
        width: 100%;
        height: 72px;
        padding: 0;
        border-radius: 30px 30px 0 0;
        z-index: 10;
        overflow: auto;
    }   
    ${({$isValueScreen}) => $isValueScreen ? 
        css` bottom: 0; ` : 
        css` top: 0; `
    }
`;