import styled from "styled-components";
import { Theme } from "../../theme";

export const HeaderPage = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: .2rem 0;
    margin-bottom: .4rem;
    & span {
        color: ${Theme.Colors.grey500}
    }
    & span:first-child {
        color: ${Theme.Colors.green800}
    }
`;

export const BodyPage = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    max-height: 84%;
    padding-bottom: .8rem;
    overflow: auto;
    & label {
        display: inline-block;
        margin: 0;
        font-size: .8em;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: ${Theme.Colors.green800};
    }
    & input, select{
        box-shadow: none;
    };
    & input:focus, select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
        & svg {
            color: ${Theme.Colors.green800};
        };
    }

    @media (max-width: 425px) {
        max-height: 80%;
    }
`;

export const WrapFields = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding: 1rem 0;
`;