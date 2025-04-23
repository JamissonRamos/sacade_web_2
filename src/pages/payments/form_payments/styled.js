import styled from "styled-components";

import { Theme } from "../../../theme";

export const WrapButton = styled.div`
    width: 100%;
    display: flex;      
    align-items: center;
    justify-content: center;
    padding: .8rem 0;
    margin-bottom: 1rem 0;
    box-shadow: none;
    button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem;
        max-width: 300px;
        padding: .8rem .2rem;
        background: ${Theme.Colors.green800};
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: all .3s ease-in-out;
        & svg{
            font-size: 1.2em;
            color: ${Theme.Colors.white800};
        }
        & span{
            font-size: 1em;
            font-weight: 500;
            color: ${Theme.Colors.white800};
        }
        &:hover {
            transform: scale(1.02);
        }
    }
`;