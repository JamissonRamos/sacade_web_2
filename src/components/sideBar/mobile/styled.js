import styled from "styled-components";
import { Theme } from "../../../theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    /* border: 1px solid blue; */
    width: 100vw;
    min-width: 320px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 0 1rem;
    z-index: 1000;
    overflow: auto;
`;
export const WrapMenu = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
`;
export const WrapNavigation = styled(Link)`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    transition: border-bottom .3s;
    &:hover {
        border-bottom: 3px solid ${Theme.Colors.blue400};
    }
`;
export const WrapNavigationCircule = styled(Link)`
    /* border: 1px solid red; */
    width: 80px;
    height: 80px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    background-color: ${Theme.Colors.blue400}; 
    border: 6px solid ${Theme.Colors.grey500}; 
    border-radius: 50%;
    transform: translate(-42%);
    z-index: 10;
    box-shadow: ${Theme.Shadow.sh300};
    transition: .4s;
    @media (max-width: 375px) {
        width: 70px;
        height: 50px; 
        position: relative;
        bottom: 2px;
        border-radius: 10%;   
        box-shadow: none;    
    }
`;
export const IconNavCircule = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .4s;
    & svg {
        font-size: 2em;
        color: ${Theme.Colors.grey500};   
    }

    &:hover{
        font-size: 1.4em;
    }
`;
export const IconNav = styled.div`
    /* border: 1px solid red; */
    width: 44%;
    transition: .4s;
    & svg {
        width: 100%;
        height: 100%;
        color: ${Theme.Colors.grey500};   
    }
`;
export const LabelNav = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    padding: 0;
    & span {
        color: ${Theme.Colors.grey500};
    }
`;