import styled from "styled-components";
import {Theme} from '../../theme';

export const Header = styled.header`
    /* border: 1px solid red; */
    width: 100vw;
    min-width: 320px;
    height: 3.8rem;
    display: flex;
    align-items: center;
    margin-left: 240px;
    background-color:${Theme.Colors.blue600};
    transition: margin 0.4s; 
    color: white;
    @media (max-width: 768px) {
        height: 2.6rem;
        margin-left: 80px;
    }
    @media (max-width: 500px) {
        padding-left: 1rem; 
    }
    @media (max-width: 425px) {
        height: 3rem;
        justify-content: start;
        padding: 0 ; 
        margin-left: 0;
    }
`;

export const UserLogged = styled.div`
    /* border: 1px solid red; */
    width: calc(100% - 240px);
    min-width: 320px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    & span {
        color: ${Theme.Colors.grey500};
    };
    @media (max-width: 768px) {
        width: calc(100% - 80px);
    }
    @media (max-width: 500px) {
        justify-content: flex-start;
    }
    @media (max-width: 425px) {
        width: 100%;
        justify-content: flex-start;
        padding-left: 10px;
    }
`;
export const StatusLogged = styled.div`
    /* border: 1px solid red; */
    position: fixed;
    right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    & span {
        color: ${Theme.Colors.white800};
        font-weight: 500;
    };
    @media (max-width: 768px) {
        right: 10px;
    }
    @media (max-width: 320px) {
        right: calc(50% - 150px);
    }
`;