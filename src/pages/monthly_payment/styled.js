import styled from "styled-components"; 
import { Theme } from "../../theme";

export const Content = styled.div`
    border: 1px solid red;
    width: 100%;    
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 425px) {
        height: 94%;
    }
`;

export const Form = styled.form`
    /* border: 1px solid blue; */
    width: 100%;
    min-width: 320px;
    padding-bottom: 1rem;
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
    @media (max-width: 425px) {
        padding-bottom: .8rem;
    }
`;
