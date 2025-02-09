import styled from "styled-components";
import { Theme } from "../../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding: .2rem 0;
`;
export const SectionPrime = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    & span {text-align: center;
        color: ${Theme.Colors.green800};
    }

    @media (max-width: 425px) {
        & > span {
            font-size: .8em;
        }
    }
`;
export const SectionSecondary = styled.div`
    /* border: 1px solid blue; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const WrapButton = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem 0;
    margin-top: 2rem;
    & button {
        width: 40%;
        /* height: 100%; */
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 9px 12px;
        border: none;
        box-shadow: none !important ; 
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
                return `rgb(${r - 35}, ${g - 35}, ${b - 35})`;
            }};
        }
    }

    @media (max-width: 425px) {

        & button {
            width: 70%;
        }
    }
`;