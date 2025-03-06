import styled, { css } from "styled-components";
import { Theme } from "../../../../../../theme";

const StyledGraphic = css`
    min-width: 320px;
    display: flex;
    align-items: center;
    padding: 1rem;
    box-shadow: ${Theme.Shadow.sh900};
    @media (max-width: 1024px) {
        width: 100%;
        justify-content: center;
    } 
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    gap: 8px;
    padding: 1rem;
    @media (max-width: 1024px) {
        flex-direction: column;
    } 
`;

export const GraphicBar = styled.div`
    /* border: 1px solid red; */
    width: 40%;
    ${StyledGraphic}
`;

export const GraphicPizza = styled.div`
    /* border: 1px solid blue; */
    width: 60%;
    ${StyledGraphic}
`;

