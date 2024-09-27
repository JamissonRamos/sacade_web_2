import styled from "styled-components";
import { Theme } from "../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    overflow-y: auto;
`;
export const WrapButton = styled.button`
    /* border: 1px solid blue; */
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    padding: .2rem .4rem;
    background-color: transparent;
    border-radius: 8px;
    &:hover {
        background-color: ${Theme.Colors.yellow500};
    }
    &::after{
        content: "";
        width: 98%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: ${Theme.Colors.grey400};
    }
`;
export const Card = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
`;
export const CircleFirstLetterNome = styled.div`
    /* border: 1px solid red; */
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Theme.Colors.blue100};
    border-radius: 20px;
    font-weight: 900;
    font-size: 14.1px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${Theme.Colors.blue800};
`;
export const Name = styled.div`
    /* border: 1px solid blue; */
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 12px;
    letter-spacing: 0.4px;
    font-weight: 500;
    line-height: 16px;
    color: ${Theme.Colors.grey800};
`;
export const Status = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    & span {
        font-size: 9px;
        letter-spacing: 0.4px;
        font-weight: 500;
        line-height: 16px;
    }
`;