import styled from "styled-components";
import { Theme } from "../../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    height: 100%;
    & textarea {
        height: 150px;
    }
    & textarea:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
        & svg {
            color: ${Theme.Colors.green800};
        }
    }
`;
