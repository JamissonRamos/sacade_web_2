import styled, { css } from "styled-components";
import { Theme } from "../../../../../../theme";

const ContainedStyles = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: none;
    background-color: ${Theme.Colors.green800};
    border: none;
    transition: background-color 0.4s ease, color 0.4s;
    & span {
        font-size: .8rem;
        font-weight: 500;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: ${Theme.Colors.white800};
    }
    & svg {
        font-size: 1.2rem;
        color: ${Theme.Colors.white800};
    }
    &:hover {
        box-shadow: none;
        background-color: ${props => {
            const color = props.color || Theme.Colors.green800;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r - 35}, ${g - 35}, ${b - 35})`;
        }};
    }
`;
export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-bottom: .8rem;
    & span {
        color: ${Theme.Colors.grey500};
    }
    & span:first-child {
        color: ${Theme.Colors.green800};
    }

`;
export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: .2rem ;
    & button {
        ${ContainedStyles};
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;