import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    @media (max-width: 425px) {
        gap: 0;
    }
`;
export const WrapTitleStepper = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    padding: .8rem 0;
    text-align: center;
    & span {
        color: ${Theme.Colors.yellow800};
    }
`;
export const Panels = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Left = styled.div`
    /* border: 1px solid green;  */
    height: 96%;
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        animation: moveUpDown 5s ease-in-out infinite;
    }
    @keyframes moveUpDown {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;

export const Right = styled.div`
    /* border: 1px solid green; */
    flex: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    & > span {
        text-align: center;
        color: ${Theme.Colors.grey600}
    }
    & button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 9px 16px;
        background-color: ${Theme.Colors.green800};
        &:hover {
            background-color: ${props => {
                const color = props.color || Theme.Colors.green800;
                const r = parseInt(color.slice(1, 3), 16);
                const g = parseInt(color.slice(3, 5), 16);
                const b = parseInt(color.slice(5, 7), 16);
                return `rgb(${r - 85}, ${g - 85}, ${b - 85})`;
            }};
        }
        & svg {
            font-size: 1.2em;
        }
    }
    @media (max-width: 768px) {
        flex: 2;
        & > span {
            padding: .2rem 0;
            font-size: .8em;
        }
    }
    
`;