import styled from "styled-components";
import { Theme } from "../../theme";

const handleHoverBackground = (prop) => {
    const color = prop || Theme.Colors.blue500;
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgb(${r - 85}, ${g - 85}, ${b - 85})`;
}
export const Container = styled.div`
    /* border: 1px solid green; */
    width: 100vw;
    min-width: 320px;
    height: 100vh;
    padding: 1rem 2rem;
    transition: padding 0.4s; 
    overflow: auto;
    @media (max-width: 768px) {
        padding: .6rem;
    }
    @media (max-width: 425px) {
        height: 94vh;
    }
    @media (max-width: 375px) {
        padding: .4rem ;
    }
`;
export const WrapPages = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 100%;
    position: relative;
    display: flex;
    transition: padding 0.4s; 
    border-radius: 8px;
    box-shadow: ${Theme.Shadow.sh800};  
    &::after {
        content: "";
        width: 50%;
        height: 100%;
        position: absolute;
        background-color: ${Theme.Colors.black900};
        opacity: 0.2;
        z-index: -1;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        &::after {
            display: none;
        }
    }
`;
export const HeaderPage = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: .8rem;
    flex: 2;
    padding: 1rem;
    & > span {
        color: ${Theme.Colors.green800}
    }
    @media (max-width: 768px) {
        gap: .2rem;
        flex: 1;
    }
    @media (max-width: 425px) {
        padding: .4rem .8rem;
    }
    @media (max-width: 375px) {
        justify-content: center;
        padding: .4rem 0;
    }
`;
export const WrapTextInfo = styled.div`
    /* border: 1px solid red; */
    display: flex;
    & > span {
        padding: .4rem 0;
        text-align: center;
        color: ${Theme.Colors.grey600}
    }
    @media (max-width: 425px) {
        & > span {
            font-size: .8em;
        }
    }
`;
export const WrapButtonHeader = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .1rem 0;
    transition: background-color 0.4s ease, color 0.4s;
    & > Button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 9px 16px;
        color: ${Theme.Colors.white800};
        background-color: ${Theme.Colors.yellow800};

        &:hover {
            color: ${Theme.Colors.white800};
            background-color: ${handleHoverBackground(Theme.Colors.yellow800)};
        }
        & svg {
            font-size: 1.2em;
        }
    }
    @media (max-width: 768px) {
        align-items: start;
        justify-content: start;
        & > Button {
            width: inherit;
        }
    }
    @media (max-width: 425px) {
        & > Button {
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const WrapImg = styled.div`
    /* border: 1px solid red; */
    & > img {
        max-width: 100%;
        max-height: 100%;
        object-fit: fill;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const BodyPage = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex: 2;
    padding: .4rem 1.4rem;
    @media (max-width: 768px) {
        gap: .2rem;
        flex: 3;
    }
    @media (max-width: 468px) {
        padding: .4rem;
    }
    & form {
        /* border: 1px solid blue; */
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column; 
        justify-content: space-between;
        gap: .8rem;
        @media (max-width: 768px) {
            align-items: center;
        }
    }      
`;

export const FormFields = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const WrapFooterBody = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: .2rem;
    @media (max-width: 768px) {
        width: 80%;
        height: 26%;
    }
    @media (max-width: 468px) {
        width: 80%;
        height: 40%;
    }
`;

export const WrapButtonCounterPage = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .2rem .4rem;
`;

export const ButtonsStep = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 2rem;
    padding: .2rem;
`;

export const ButtonStep = styled.button`
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: none;
    border-radius: 100%;
    background-color: ${Theme.Colors.green800};
    & svg {
        font-size: 1em;
        color:  ${Theme.Colors.white800};
    }
`;

export const CounterPage = styled.div`
    /* border: 1px solid blue; */
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 1rem;
    & span {
        color: ${Theme.Colors.yellow700}
    }
`;

export const ErrorCount = styled.div `
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem 0;
    background-color: ${Theme.Colors.red400};
    font-size: 1em;
    color: ${Theme.Colors.red800};
`;