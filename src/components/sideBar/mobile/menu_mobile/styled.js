import styled from "styled-components";
import { Theme } from "../../../../theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    /* border: 1px solid ; */
    width: 100vw;
    height: 90vh;
    position: fixed;
    bottom: 0px;
    left: 0;
    padding: .8rem .4rem 1.2rem .4rem;
    background-color: ${Theme.Colors.grey400};
    border-radius: 20px 20px 0 0;
    overflow: auto;
    z-index: 12;
    transition: height .4s ease 0s;
    animation: myAnim 2s ease 0s 1 normal none;
    @keyframes myAnim {
        0% {
            animation-timing-function: ease-in;
            opacity: 0;
            transform: translateY(250px);
        }

        38% {
            animation-timing-function: ease-out;
            opacity: 1;
            transform: translateY(100);
        }
        55% {
            animation-timing-function: ease-in;
            transform: translateY(20px);
        }


    }       

`;
export const Header = styled.div`
    /* border: 1px solid ; */
    width: 100%;
    height: 14%;
    display: flex;
    justify-content: center; 
`;
export const WrapText = styled.div`
    /* border: 1px solid ; */
    flex: 1.8;
    display: flex;
    align-items: center;
    justify-content: center;
    & span {
        color: ${Theme.Colors.blue400}
    }

`;
export const WrapIcon = styled.div`
    /* border: 1px solid ; */
    width: 24px;
    height: 24px;
    margin-right: .1rem;
    border-radius: 100%;
    box-shadow: ${Theme.Shadow.sh900};

`;

export const Main = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: .8rem;

`;
export const WrapNavigation = styled.div`

    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: .4rem ;
    /* border-bottom: 1px solid ${Theme.Colors.blue500}; */
`;

export const WrapHeaderNavigation = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: .2rem;

    & div > svg {
        margin-right: 6px;
        font-size: .8em;
    }
`;

export const Navigation = styled(Link)`
    /* border: 1px solid red; */
    height: 38px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 1rem;
    background-color: ${Theme.Colors.grey400};
    box-shadow: ${Theme.Shadow.sh600};
    border-radius: 8px;

`;
export const IconNav = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    & svg {
        font-size: 1.5em;
        color: ${Theme.Colors.blue500}

    }
`;
export const LabelNav = styled.div`
    /* border: 1px solid red; */
    & span {
        color: ${Theme.Colors.blue400}
    }
`;


