import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";


const containerStyles = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    & span {
        font-size: .8rem;
        font-weight: 500;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
    
`;

const containedStyles = css`
    background-color: ${Theme.Colors.green800};
    border: none;
    & span {
        color: ${Theme.Colors.white800};
    }
    transition: background-color 0.4s ease, color 0.4s;
    & svg {
        color: ${Theme.Colors.white800};
    }
    &:hover {
        background-color: ${props => {
            const color = props.color || Theme.Colors.green800;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r - 85}, ${g - 85}, ${b - 85})`;
        }};
    }
`;

export const Container = styled.div`
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

export const WrapButtonCreate = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    padding: .2rem ;
    & button {
    
        ${containerStyles};
        ${containedStyles};
    }
`;