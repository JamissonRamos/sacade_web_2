import styled, { css } from "styled-components";
import { Theme } from "../../theme";

const ButtonStyles = css`
    width: 60%;
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
    /* border: 1px solid green; */
    width: 100vw;
    min-width: 320px;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    transition: padding 0.4s; 
    @media (max-width: 425px) {
        padding: 0;
    }
`;
export const WrapPages = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 100%;
    display: flex;
    transition: padding 0.4s; 
    border-radius: 8px;
    box-shadow: ${Theme.Shadow.sh800};  
    @media (max-width: 768px) {
        width: 80%;
        flex-direction: column; 
    }
    @media (max-width: 425px) {
        width: 100%;
        border-radius: 0;
    }
`;
export const LeftPanel = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    position: relative;
    flex: 1.2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: .8rem;
    z-index: 1;
    &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${Theme.Colors.green800};
        z-index: -1;
    }
    @media (max-width: 768px) {
        flex: .3;
        justify-content: center;
        gap: 0;
        padding: .2rem;
        padding-bottom: .6rem;
        border-radius: 0 0 20% 20%;
        box-shadow: ${Theme.Shadow.sh700}; 
    }
`;
export const TitleOne = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    padding: 0;
    & span {
        color: ${Theme.Colors.white800};
    }
    @media (max-width: 768px) {
        & span {
            font-size: 1.1em;
        } 
    }
    @media (max-width: 425px) {
        & span {
            font-size: 1.1em;
        } 
    }
`;
export const WrapImg = styled.div`
    /* border: 1px solid red;    */
    max-width: 300px;
    max-height: 300px;
    & > img {
        max-width: 100%;
        max-height: 100%;
        object-fit: fill;
    }
    @media (max-width: 768px) {
        & > img {
            display: none;
        }
    }
`;
export const WrapRegister = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    & span {
        text-align: center;
        color: ${Theme.Colors.grey400};
    }
    @media (max-width: 768px) {
        padding: .2rem 0;
        & span {
            font-size: .8em;
        }
    }
    @media (max-width: 425px) {
        & span {
            padding: 0 .8rem;
        }
    }
    @media (max-width: 375px) {
        & span {
            padding: 0rem;;
        }
    }

`;
export const WrapTextRegister = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    text-align: center;
    line-height: 0px;
    @media (max-width: 768px) {
        & span {
            font-size: .7rem;
            color: ${Theme.Colors.white800};
        }
    }
`;
export const WrapButtonRegister = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    padding: .2rem 0;
    & button {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border: none;
        font-size: .8em;
        font-weight: 500;
        color: ${Theme.Colors.white800};
        background-color: ${Theme.Colors.yellow500}; //yellow500
        &:hover{
            color: ${Theme.Colors.white800};
        }
        & svg{
            font-size: 1.5em;
        }
    }
    @media (max-width: 768px) {
        height: 42px;
        & button {
            width: 60%;
            font-size: .8em;
            & svg{
                font-size: 1.2em;
            }
        }
    }
`;
export const PanelRight = styled.div`
    /* border: 1px solid blue; */
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    @media (max-width: 768px) {
        padding: 0;
    }
`;
export const WrapHeader = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;
    flex: 1;
    padding: .2rem 0;
    & > img {
        max-width: 60%;
        max-height: 60%;
        object-fit: fill;
    }
    & span {
        color: ${Theme.Colors.green800}
    }
    @media (max-width: 768px) {
        flex: .8;
        gap: 0rem;
        padding: 0;
        & > img {
        max-width: 40%;
        max-height: 70%;
        }
        & span {
            font-size: 1em;
            line-height: 20px;
        }
    }

`;
export const WrapForm = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 100%;
    flex: 3;
    overflow: auto;
    & form {
        /* border: 1px solid blue; */
        width: 100%;
        min-height: 70%;
        max-height: 80%;
    }
`;
export const FormFields = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding: .2rem 0;
    & label {
        display: inline-block;
        margin: 0;
        font-size: 1em;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: ${Theme.Colors.green800};
    }

    & .input-group input:focus ,input:focus, select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
        & svg {
            color: ${Theme.Colors.green800};
        };
    }
    @media (max-width: 768px) {
        /* margin-bottom: 0; */
    }
`;
export const WrapFooterForm = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: .4rem 0;
`;
export const WrapButtonLogin = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & button {
        ${ButtonStyles}
    }
    @media (max-width: 768px) {
        & button {
            width: 60%;
        }
    }
    @media (max-width: 425px) {
        & button {
            width: 80%;
        }
    }
`;
export const WrapButtonScreen = styled.div`
    /* border:1px solid red; */
    width: 100%;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    & button {
        border: none;
        cursor: pointer;
        & span {
            font-size: .7rem;
            font-weight: 500;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: ${Theme.Colors.grey600};
        }
        &:hover {
            background-color: transparent;
            & span{
                color: ${Theme.Colors.blue400};
            }
        }
    }
`;
export const Error = styled.div`
    position: absolute;
    top: 20px;
    right: 30px;
    z-index: 10;
    @media (max-width: 768px) {
        top: 10px;
        right: 0px;
    }
`;