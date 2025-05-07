import styled from "styled-components";
import { Theme } from "../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    /* padding: 0 .4rem ; */
    
`;

export const Form = styled.form`
    /* border: 1px solid blue; */
    width: 100%;
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

export const WrapButtons = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;      
    align-items: center;
    justify-content: space-between;
    @media (max-width: 520px) {
        flex-direction: column;
        gap: 1rem; 
        padding: .2rem 0;
    }
    @media (max-width: 425px) {
        flex-direction: row;
    }
    @media (max-width: 375px) {
        flex-direction: column;
    }
`;