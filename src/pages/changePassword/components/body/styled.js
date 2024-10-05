import styled from "styled-components";
import { Theme } from "../../../../theme";


export const Container = styled.div`
    width: 100%;
    min-width: 320px;
    max-height: 84%;
    display: flex;
    padding-bottom: .8rem;
    overflow: auto;
`;

export const Left = styled.div`
    /* border: 1px solid red; */
    flex: 1.1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap: 16px;
    @media (max-width: 1024px) {
        flex: 1;
        justify-content: center;
        padding: 1rem 0;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const WrapTextInfo = styled.div`
    /* border: 1px solid red; */
    width: 90%;
    display: flex;
    & > span {
        padding: .4rem 0;
        text-align: center;
        color: ${Theme.Colors.grey600}
    }
    @media (max-width: 1024px) {
        & > span {
            padding:  0;
            font-size: .9em;
            text-align: start;
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const WrapImg = styled.div`
    /* border: 1px solid red; */
    & > img {
        max-width: 90%;
        max-height: 90%;
        object-fit: cover;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;
export const Right = styled.div`
    flex: 1;
    & form {
        /* border: 1px solid blue; */
        height: 100%;
    }
`;
export const WrapButtonForm = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;
    padding: 0 1rem;
    margin-top: .6rem;
    & button {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: .5s;
    }
    @media (max-width: 900px) {
        padding: 0;
        justify-content: center;
        & button {
            font-size: .8em;
        
    }
    }
    @media (max-width: 768px) {
        justify-content: center;
    }
`;