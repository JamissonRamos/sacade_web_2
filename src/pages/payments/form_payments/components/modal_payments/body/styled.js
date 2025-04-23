import styled from "styled-components";
import { Theme } from "../../../../../../theme";

export const Container = styled.div``;

export const Form = styled.form`
    /* border: 1px solid blue; */
    min-width: 320px;
    height: 100%;
    & label {
        display: inline-block;
        margin: 0;
        font-size: .8em;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: ${Theme.Colors.green800};
        & .valueInterestRate {
            margin-left: 8px;
            font-size: 1em;
            font-weight: 500;
            letter-spacing: 0.5px;
            line-height: 1.5;
            color: ${Theme.Colors.blue2900};
        }
    }
    & input:focus, .input-group input:focus,  select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
        & svg {
            color: ${Theme.Colors.green800};
        }
    }
    overflow: auto;
`;