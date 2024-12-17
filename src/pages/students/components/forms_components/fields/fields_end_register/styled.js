import styled from "styled-components";
import { Theme } from "../../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const WrapTitleStepper = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    padding: .2rem .4rem;
    text-align: center;
    margin-bottom: 1rem;
    & span {
        color: ${Theme.Colors.green800};
    }
    @media (max-width: 768px) {
        & > span {
            font-size: 1em;
        }
    }
    @media (max-width: 425px) {
        & > span {
            font-size: .8em;
        }
    }
`;
export const Panels = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Left = styled.div`
    /* border: 1px solid red;  */
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        max-width: 60%;
        max-height: 60%;
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

    @media (max-width: 768px) {
        & img {
            max-width: 90%;
            max-height: 80%;
        }
    }
`;

export const Right = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: .4rem 0;
    & button {
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 4px;
        transition: background-color 0.4s ease, color 0.4s;
        cursor: pointer;
        & span {
            font-size: .8rem;
            font-weight: 500;
            line-height: 18px;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
        & svg {
            font-size: 1.2rem;
        }
    
        background-color: ${Theme.Colors.green800};
        &:hover {
            background-color: ${props => {
                const color = props.color || Theme.Colors.green800 ;
                const r = parseInt(color.slice(1, 3), 16);
                const g = parseInt(color.slice(3, 5), 16);
                const b = parseInt(color.slice(5, 7), 16);
                return `rgb(${r - 85}, ${g - 85}, ${b - 85})`;
            }};
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        & > span {
            padding: .2rem 0;
            font-size: .8em;
        }
    }
    
`;

