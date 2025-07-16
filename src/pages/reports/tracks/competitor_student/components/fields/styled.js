import styled from "styled-components";
import { Theme } from "../../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;

    padding: .8rem 0;

    select {
        width: 200px;
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
        display: flex;
        justify-content: flex-end;
    }
`;




