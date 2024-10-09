import styled, { css } from "styled-components";
import { Theme } from "../../../../../../theme";


const tabFieldsStyled = css`
    & #tab-fields {
        background-color: ${Theme.Colors.blue600};
        border: none;
    }
    & #tab-fields > li > button {
        height: 100%;
        position: relative;
        font-size: 14px;
        letter-spacing: 0.5px;
        font-weight: 400;
        line-height: 24px;
        color: ${Theme.Colors.grey400};
        border: none;
        border-radius: 0;
        &.active {
            font-weight: 500;
            color: ${Theme.Colors.grey800};
        }
    }
    & .tab-content  {
        /* border: 1px solid red; */
        width: 100%;
        height: 72%;
    }
    
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;

    ${tabFieldsStyled}
`;