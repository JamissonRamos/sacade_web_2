import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 430px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: .6rem .4rem;
    overflow-y: auto;
`;

export const WrapButton = styled.button`
    /* border: 1px solid blue; */
    width: 100%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: 1rem .6rem;
    margin-bottom: .6rem;
    border-left: 5px solid ${(props) => (props.$borderLeft)};
    border-radius: 4px;
    box-shadow: ${Theme.Shadow.sh900};
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: ${Theme.Colors.grey100};
    }
`;