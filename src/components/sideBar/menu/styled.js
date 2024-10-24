import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Theme } from "../../../theme";


const Sgv = css`
    width: 100%;
    height: 100%;
    color: ${Theme.Colors.grey500};
`;

export const Container = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0rem ;
    /* background-color: ${({$subnav}) => $subnav ? Theme.colors.blue300 : null  }; */
`;

export const Navigator = styled(Link)`
    /* border: 1px solid red; */
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 1rem;
    border-radius: 8px 4px 4px 8px;
    transition: 350ms;
    cursor: pointer;
    &:hover {
        border-left: 6px solid ${Theme.Colors.blue400} ;
        background-color: ${Theme.Colors.blue500}; 
    }
    @media (max-width: 768px) {
        padding: 0 .4rem;
    }
`;

export const WrapItens = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const IconNav = styled.div`
    /* border: 1px solid red; */
    width: 18px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0rem;//margin-left: ${({showSidebar}) => showSidebar ? "0" : "0.8rem"}; 
    transition: width 0.9s, font-size 0.4s; 
    & svg {
        ${Sgv}
        
    }
`;

export const LabelNav = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    padding: 0 .2rem;
    transition: display 0.4s; 
    & span {
        color: ${Theme.Colors.grey500};
    }
    @media (max-width: 768px) {
        display: ${({$showSidebar}) => $showSidebar ? "none" : "flex"}
    }
`;

export const WrapArrowShowSubMenu = styled.div`
    /* border: 1px solid red; */
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
        ${Sgv}
    }
`;

export const SubMenu = styled.div`
    /* border: 1px solid red;  */
    display: flex;
    flex-direction: column;
    gap: .4rem; 
    padding: 0 .8rem;
    background-color: ${Theme.Colors.black900};
    @media (max-width: 768px) {
        justify-content: center;
        padding: 0;
    }
`;
export const DropdownLink = styled(Link)`
    /* border: 1px solid blue; */
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: .4rem;
    padding: 0 .8rem;
    border-radius: 8px 4px 4px 8px;
    transition: 350ms;
    cursor: pointer;
    &:hover {
        border-left: 4px solid ${Theme.Colors.blue400};
        background-color: ${Theme.Colors.blue500};
    }
    @media (max-width: 768px) {
        justify-content: start;
        
    }
`;