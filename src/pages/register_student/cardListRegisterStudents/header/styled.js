import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";


const ButtonContainedStyles = css`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 8px 12px;
    border-radius: 6px;
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
    margin-bottom: .6rem;
    & span {
        color: ${Theme.Colors.grey500}
    }
    & span:first-child {
        color: ${Theme.Colors.green800}
    }
`;
export const WrapText = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    padding: .2rem 0;
    & strong {
        color: ${Theme.Colors.yellow500}
    }
`;
export const WrapButtonCreate = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    & button {
        ${ButtonContainedStyles};
    }
`;