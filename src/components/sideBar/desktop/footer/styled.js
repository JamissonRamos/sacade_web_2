import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    flex: .6;
    padding: 1rem 0;
`;

export const Modal = styled.div`
    /* border: 1px solid red; */
    width: 90%;
    position: absolute;
    bottom: 60px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .2rem;
    padding: 1rem 0;
    transform: translateX(-50%);
    box-shadow: ${Theme.Shadow.sh100};
    animation-duration: .5s;
    animation-name: formModal;
    @keyframes formModal {
        from {
            bottom: 0;
            opacity: .1;
        }
        30%{
            bottom: 30px;
            opacity: .4;
        }
        50%{
            bottom: 50px;
            opacity: .6;
        }
        to {
            bottom: 70px;
            opacity: .8;
        }
    }
`;

export const WrapButtonModal = styled.div `
    /* border: 1px solid red; */
    
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: .2rem 0;
    border-radius: 8px;
    transform: 9s;
    font-size: 1em;
    & :hover{
        background-color: ${Theme.Colors.blue200};
    }
    & svg{
        margin-right: 8px;
        font-size: 1em;
    }
    @media (max-width: 768px) {
        & span {
            /* display: ${ ({showSidebar}) =>  showSidebar ? 'flex' : 'none'}; */
            display: ${({$showSidebar}) => $showSidebar ? "none" : "flex"}
        }
    }
`;