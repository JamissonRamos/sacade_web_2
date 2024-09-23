import styled from "styled-components";
import {Theme} from '../../theme';

export const Header = styled.header`
    /* border: 1px solid red; */
    width: 100vw;
    height: 3.8rem;
    min-width: 320px;
    display: flex;
    align-items: center;
    /* padding: 0 24px; */
    margin-left: 240px;
    background-color:${Theme.Colors.blue600};
    transition: margin 0.4s; 
    color: white;
    @media (max-width: 768px) {
        height: 2.6rem;
        margin-left: 80px;
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
        @media (max-width: 425px) {
            width: 100%;
            /* justify-content: ${props => props.status === "Visitante" ? 'flex-start' : 'center'}; */
            //Por enquanto vou aplicar o status permanente no header 
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
    @media (max-width: 425px) {
    }
`;