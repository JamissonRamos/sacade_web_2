import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid green; */
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
    & input, select{
        box-shadow: none;
    };
    & .input-group input:focus, select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
        & svg {
            color: ${Theme.Colors.green800};
        };
    }
`;

export const WrapTitleStepper = styled.div`
    /* border: 1px solid green; */
    text-align: center;
    margin-bottom: 1.2rem;
    & span {
        color: ${Theme.Colors.yellow800};
    }

`;