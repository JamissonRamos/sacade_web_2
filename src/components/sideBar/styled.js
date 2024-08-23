import styled, {css} from "styled-components";

export const Container = styled.div`
    border: 1px solid red;
    width: 240px;
    height: 100%;
    position: fixed;
    left: 0;
    padding: .4rem;
    @media (max-width: 768px) {
        width: 80px;
    }
    @media (max-width: 425px) {
        width: 100%;
        height: 80px;
        z-index: 10;
    }
    ${({$isValueScreen}) => $isValueScreen ? 
        css` bottom: 0; ` : 
        css` top: 0; `
    }
`;