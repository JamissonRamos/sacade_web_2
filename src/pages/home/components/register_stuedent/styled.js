import styled, {css} from "styled-components";
import { Theme } from "../../../../theme";

const StyledGraphic = css`
    min-width: 320px;
    height: 100%;
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
    max-height: 250px;
    display: flex;
    gap: .8rem;
    padding: .6rem .4rem;
    overflow: auto;
    @media (max-width: 1024px) {
        flex-direction: column;
        max-height: 100%;
    }
`;

export const WrapGraphicBar = styled.div`
    /* border: 1px solid red; */
    width: 60%;
    ${StyledGraphic}
`;

export const WrapGraphicPizza = styled.div`
    /* border: 1px solid blue; */
    width: 40%;
    ${StyledGraphic}
`;