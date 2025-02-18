import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    padding: .2rem .4rem;
    overflow-y: auto;
`;
export const WrapButton = styled.button`
    /* border: 1px solid blue;   */
    width: 100%;
    padding: 1rem .6rem;
    margin-bottom: .6rem;
    border-left: 5px solid ${(props) => props.$colors || "transparent"}; 
    //border-left: 5px solid ${Theme.Colors.green800};
    border-radius: 4px;
    box-shadow: ${Theme.Shadow.sh900};
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: ${Theme.Colors.grey100};
    }
`;
export const Card = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: .2rem;
`;
export const SectionPrime = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: .2rem 0;
`;
export const SectionSecondary = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    padding: .2rem 0;
`;
export const WrapIndexDataUpdate = styled.div`
    /* border: 1px solid blue;  */
    display: flex;
    align-items: center;
    gap: .8rem;
`;
export const WrapIndex = styled.div`
    /* border: 1px solid blue;  */
    & span {
        font-weight: 500;
        color: ${Theme.Colors.grey800};
    }
`;
export const WrapGraduation = styled.div`
    /* border: 1px solid blue;  */
    & span {
        font-size: 1em;
        font-weight: 500;
        color: ${(props) => props.$Colors || "transparent"}; 
        text-transform: uppercase


    }
`;
export const WrapTrackDegrees = styled.div`
    /* border: 1px solid blue;  */
    display: flex;
    align-items: center;
    & span {
        font-size: 10px;
        letter-spacing: 0.4px;
        font-weight: 500;
        line-height: 16px;
        text-transform: uppercase;
    }
    & strong {
        font-size: 12px;
    }
`;

export const WrapDataUpdate = styled.div`
    /* border: 1px solid blue;  */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    & span {
        font-size: .8em;
        font-weight: 600;
    }
    & svg {
        font-size: 1.2em;
        color: ${(props) => props.$Colors || "transparent"}; 
    }
`;