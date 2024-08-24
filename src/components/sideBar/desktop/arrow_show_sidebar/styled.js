import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Theme } from "../../../../theme";

export const WrapArrow = styled(Link)`
    /* border: 1px solid yellow; */
    width: 20px;
    height: 30px;
    position: fixed;
    top: 2.8rem;
    display: none;
    align-items: center;
    justify-content: center;
    padding-bottom: 12px ;
    border-radius:  0 6px 0 0;
    background-color: ${Theme.Colors.blue600};
    z-index: 10;
    transition: left 0.4s;
    transform: rotate(40deg);
    & > svg {
        font-size: .8em;
        color: ${Theme.Colors.white800};
        transform: rotate(-40deg);
    }
    @media (max-width: 768px) {
        display: flex;
        left: ${({$showSidebar}) => $showSidebar ? '68px' : '228px'} ;
    }
    
`;