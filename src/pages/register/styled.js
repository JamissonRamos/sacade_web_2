import styled from "styled-components";
import { Theme } from "../../theme";

export const Container = styled.div`
    border: 1px solid green;
    width: 100%;
    height: 100%;
    padding:  1rem ;
    transition: margin 0.4s; 
    & > div {
        overflow: hidden;
    }
    @media (max-width: 768px) {
        /* border: 1px solid red; */
    }
    @media (max-width: 425px) {
        /* border: 1px solid blue; */
    }


`;

export const HeaderPage = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    & > span {
        color: ${Theme.Colors.green800}
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
    height: 380px;
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
    height: 60px;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    border-top: 1px solid ${Theme.Colors.grey500};
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
    
`;
