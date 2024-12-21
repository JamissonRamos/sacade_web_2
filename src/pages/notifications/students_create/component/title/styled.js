import styled from "styled-components"
import { Theme } from "../../../../../theme";

export  const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .2rem 0;
    & span {
        color: ${Theme.Colors.green800};
    }

`;