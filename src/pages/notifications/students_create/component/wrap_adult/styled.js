import styled from "styled-components";
import { Theme } from "../../../../../theme";


export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding: .2rem 0;
    margin: .4rem 0;
    
    & span {
        color: ${Theme.Colors.grey800};
    }

    @media (max-width: 475px) {
        & span {
            font-size: 14px;
            font-weight: 400;
            line-height: 0px;
            letter-spacing: 0.65px;
            color: ${Theme.Colors.grey800};
        }
    }

`;
