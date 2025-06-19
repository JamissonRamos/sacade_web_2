import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-bottom: 1rem;
`;
export const WrapTexts = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    & span {
        color: ${Theme.Colors.grey500};
    }
    & span:first-child {
        color: ${Theme.Colors.green800};
    }

`;
export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
`;
export const Button = styled.button`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 9px;
    /* background-color: ${Theme.Colors.grey100}; */
    background-color: transparent;
    border-radius: 4px;
    color: ${Theme.Colors.green800};
    transition: all 0.4s ;

    & svg {
        font-size: 1.4em;
    }

    &:hover {
        background-color: ${Theme.Colors.grey200};
        font-size: 1.1em;
    }
`;