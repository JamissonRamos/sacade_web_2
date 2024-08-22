import styled from "styled-components";
import {Theme} from '../../theme';

export const Header = styled.header`
    /* border: 1px solid red; */
    width: 100vw;
    height: 3.5rem;
    display: flex;
    align-items: center;
    /* padding: 0 24px; */
    margin-left: 240px;
    background-color:${Theme.Colors.blue600};
    transition: margin 0.4s; 
    @media (max-width: 768px) {
        height: 4.2rem;
        margin-left: 72px ;
    }
    @media (max-width: 425px) {
        height: 4rem;
        justify-content: center;
        margin-left: 0;
    }
`;

export const UserLogged = styled.div`
    border: 1px solid red;
    width: calc(100% - 240px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & span {
        color: white;
        
    }
`;