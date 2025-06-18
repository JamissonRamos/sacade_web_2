import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;

    & input, select {
        box-shadow: none;
    };
    & input:focus, select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
    }
    & ::placeholder {
        font-size: 1em;
    }
`;




