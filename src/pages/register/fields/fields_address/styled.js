import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    padding: .4rem 0 1rem 0;
    overflow: auto;
    & label {
        display: inline-block;
        margin: 0;
        font-size: .8em;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: ${Theme.Colors.green800};
    }
    & input:focus, select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
        & svg {
            color: ${Theme.Colors.green800};
        }
    }
`;

export const WrapTitleStepper = styled.div`
    /* border: 1px solid green; */
    padding: 0 0 .4rem 0;
    & span {
        color: ${Theme.Colors.green800};
    }

`;