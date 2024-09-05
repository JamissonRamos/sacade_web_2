import styled from "styled-components";
import { Theme } from "../../theme";

export const Container = styled.div`
    /* border: 1px solid green; */
    width: 100vw;
    height: 100vh;
    padding: .8rem ;
    transition: margin 0.4s; 
    & > div {
        /* border: 1px solid orange; */
        padding: .8rem;
        overflow: hidden;
    }
`;

export const HeaderPage = styled.div`
    /* border: 1px solid red; */
    height: 20%;
    display: flex;
    flex-direction: column;
    margin-bottom: .4rem;
    & > span {
        color: ${Theme.Colors.green800}
    }
    @media (max-width: 375px) {
        height: 24%;

        justify-content: center;
    }

`;
export const WrapTextInfo = styled.div`
    /* border: 1px solid red; */
    display: flex;
    padding: .2rem 0;
    & span {
        color: ${Theme.Colors.grey600}
    }
`;
export const WrapButtonHeader = styled.div`
    /* border: 1px solid red; */
    width: 150px;
    height: 38px;
    display: flex;
    padding: .2rem 0;
`;
export const BodyPage = styled.div`
    /* border: 1px solid red; */
    height: 80%;
    display: flex;
    padding: .2rem 0;
    & form {
        /* border: 1px solid blue; */
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column; 
        gap: 1rem;   
    }

`;

export const FormFields = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const ButtonsStep = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 1rem;
    /* border-top: 1px solid ${Theme.Colors.grey500};    */
    & > button {
        width: 38px;
        height: 38px;
        border: none;
        border-radius: 100%;
        background-color: ${Theme.Colors.green800}
    }
    & > div > button {
        border: none;
        background-color: ${Theme.Colors.green800}
    }

    @media (max-width: 425px) {
        /* border: 1px solid blue; */
    }
    
`;
