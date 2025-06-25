import styled from "styled-components";
import { Theme } from "../../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0;

    select {
        width: 300px;
        max-width: 300px;
        box-shadow: none;
        font-size: .8em;
    };
    select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
    }

    & ::placeholder {
        font-size: 1em;
    }

    & .Custom-Row {
        /* border: 1px solid blue; */
        width: 300px;
        padding-right: .8rem;
    }
`;




