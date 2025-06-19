import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding-right: 1rem;
    & input, select {
        box-shadow: none;
        font-size: .8em;
    };
    & input:focus, select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
    }
    & ::placeholder {
        font-size: 1em;
    }
`;




