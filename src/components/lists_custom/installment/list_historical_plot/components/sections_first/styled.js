import styled from "styled-components";
import { Theme } from "../../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .2rem;
`;

export const WrapDate = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    padding: .2rem ;
    & span {
        font-weight: 500;
        color: ${(props) => props.$fontColor};
    }
`;
export const WrapStatus = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    gap: .4rem;
    padding: .2rem 1rem;
    background-color: ${(props) => (props.$bgColor)};
    border-radius: 9px;
    & span {
        font-size: 10.75px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 16px;
        text-transform: uppercase;
        color: ${Theme.Colors.white800};
    }
`;

export const WrapDaysLate= styled.div`
    /* border: 1px solid blue; */
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: ${Theme.Colors.white800};
    & span {
        font-size: .6em;
        font-weight: 900;
        color: ${Theme.Colors.red700};
    } 
`;