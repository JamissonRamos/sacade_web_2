import styled from "styled-components";
import { Theme } from "../../../theme";

export const Form = styled.form`
    /* border: 1px solid blue; */
    min-width: 320px;
    height: 80%;
    padding: 0 .8rem 1rem .8rem;
    & label {
        display: inline-block;
        margin: 0;
        font-size: .8em;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: ${Theme.Colors.green800};
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