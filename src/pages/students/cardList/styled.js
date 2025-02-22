import styled from "styled-components";
import { Theme } from "../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 330px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    padding: .2rem .4rem;
    overflow-y: auto;
`;
export const WrapButton = styled.button`
    /* border: 1px solid blue; */
    width: 100%;
    padding: 1rem .6rem;
    margin-bottom: .6rem;
    border-left: 5px solid ${(props) => (props.$isMinor ? Theme.Colors.red800 : Theme.Colors.green800)};
    /* border-left: 5px solid ${Theme.Colors.green800}; */
    border-radius: 4px;
    box-shadow: ${Theme.Shadow.sh900};
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: ${Theme.Colors.grey100};
    }
`;
export const WrapText = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .1rem;
    & span {
        color: ${Theme.Colors.red500 };
        font-weight: 500;
    }
`;