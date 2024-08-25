import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

const CssStandard = css`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    max-height: 54px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-bottom: 2px solid ${Theme.Colors.grey300}; */
    @media (max-width: 768px) {
        max-height: 34px;
    }

`;
export const WrapLogo = styled.div`
    /* border: 1px solid red; */
    flex: 1;
    ${CssStandard}
    transition: width 0.4s;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ImgLogo = styled.img`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    object-fit: scale-down;
`;


export const WrapNameBrand = styled.div`
    /* border: 1px solid red; */
    flex: 2;
    ${CssStandard}
    position: relative;
    justify-content: center;
    transition: font-size .5s, display 0.9s;
    & span {
        font-weight: 700;
        letter-spacing: .1em;
        color:${Theme.Colors.grey400}
    }
    & ::before, ::after {
        content: "";
        width: 50%;
        height: 4px;
        position: absolute;
        top: 76%;
        margin: 0 ;
    }
    & ::after {
        left: 0;
        background-color: ${Theme.Colors.red800};
    }
    & ::before {
        right: 0;
        background-color: ${Theme.Colors.blue700};
    }
    @media (max-width: 768px) {
        display: ${({$showSidebar}) => !$showSidebar ? 'flex' : 'none'};
        & span {
            font-size: 22px;
            font-weight: 500;
            letter-spacing: .1em;
        }
        & ::before, ::after {
            height: 3px;
            top: 80%
        }
    }

`;

