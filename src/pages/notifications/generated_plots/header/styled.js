import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Header = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    & svg {
        font-size: 1.8em;
        color: ${Theme.Colors.green800};
    }
    & span {
        color: ${Theme.Colors.green800};
    }
`;