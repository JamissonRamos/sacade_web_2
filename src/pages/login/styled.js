import styled from "styled-components";
import { Theme } from "../../theme";

export const Container = styled.div`
    /* border: 1px solid green; */
    width: 100vw;
    min-width: 320px;
    height: 100vh;
    display: flex;
    justify-content: center;
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
        padding: .4rem;
    }
    @media (max-width: 320px) {
        padding: .4rem 1rem;
        
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
        flex-direction: column;
    }
`;
export const LeftPanel = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
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
        flex: .4;
        justify-content: start;
        padding: 0;
        border-radius: 0 0 20% 20%;
        box-shadow: ${Theme.Shadow.sh700}; 
    }
`;
export const TitleOne = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    padding: .2rem 0;
    & span {
        color: ${Theme.Colors.white800};
    }
    @media (max-width: 768px) {
        & span {
            
            font-size: 1.2em;
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
    gap: 1rem;
    padding: 1rem 0;
    & span {
        text-align: center;
        color: ${Theme.Colors.grey400};
    }
    @media (max-width: 768px) {
        padding: .2rem 0;
        gap: .4rem;
        & span {
            padding: 0 1rem;
            font-size: .8em;
        }
    }
    @media (max-width: 425px) {
        & span {
            padding: 0 .8rem;;
        }
    }
    @media (max-width: 375px) {
        & span {
            padding: 0rem;;
        }
    }

`;
export const WrapButtonRegister = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: center;
    padding: .2rem 0;
    & button {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border: none;
        font-size: 1em;
        font-weight: 500;
        color: ${Theme.Colors.white800};
        background-color: ${Theme.Colors.yellow500}; //yellow500
        &:hover{
            color: ${Theme.Colors.white800};
        }
        & svg{
            font-size: 1.2em;
        }
    }
    @media (max-width: 768px) {
        height: 36px;
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
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
export const WrapHeader = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .4rem;
    flex: 1.2;
    padding: .8rem 0;
    & > img {
        max-width: 70%;
        max-height: 70%;
        object-fit: fill;
    }
    & span {
        color: ${Theme.Colors.green800}
    }
    @media (max-width: 768px) {
        flex: 1;
        gap: 0rem;
        padding: 0;
        & > img {
        max-width: 40%;
        max-height: 70%;
        }
        & span {
            font-size: 1em;
            line-height: 20px;
            /* display: none; */
        }
    }

`;
export const WrapForm = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 4;
    & form {
        /* border: 1px solid blue; */
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column; 
        gap: .8rem;    
    }
`;
export const FormFields = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    max-height: 280px;
    gap: 1rem;
    flex: 1;
    overflow: auto;
    & label {
        display: inline-block;
        margin: 0;
        font-size: 1em;
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
    @media (max-width: 768px) {
        max-height: 220px;
    }
`;
export const WrapFooterForm = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem 0;
    transition: color 0.9s;
    & button {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: ${Theme.Colors.green800};
        border-color: ${Theme.Colors.green800};
        &:hover{
            color: ${Theme.Colors.white800}
        }
    }
    @media (max-width: 768px) {
        & button {
            width: 40%;
        }
    }

`;