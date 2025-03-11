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
    @media (max-width: 540px) {
        align-items: flex-start;
        flex-direction: column;
        gap: 20px
    }
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
export const WrapCurrentHistory = styled.div`
    /* border: 1px solid blue; */
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem ;
    border-radius: 20px;
    background-color: ${Theme.Colors.green700};
    svg {
        font-weight: 900;
        text-align: center;
        color: ${Theme.Colors.red700};
    }
    &.star{
        svg{
            color: ${Theme.Colors.green800};
        }
    }
`;
export const WrapIndexDataUpdate = styled.div`
    /* border: 1px solid blue;  */
    display: flex;
    align-items: center;
    gap: .8rem;
`;

export const WrapIndex = styled.div`
    /* border: 1px solid blue;  */
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const WrapValueIndex = styled.div`
    /* border: 1px solid blue;  */
    & span {
        font-size: 1em;
        font-weight: 700;
        color: ${Theme.Colors.grey800};
    }
    @media (max-width: 600px) {
        & span {
            font-size: .9em;
            font-weight: 900;
        }
    }
`;

export const WrapGraduation = styled.div`
    /* border: 1px solid blue;  */
    & span {
        font-size: 1em;
        font-weight: 600;
        color: ${(props) => props.$colors || "transparent"}; 
        text-transform: uppercase

        
    }
    @media (max-width: 600px) {
        & span {
            font-size: .9em;
            font-weight: 900;
        }
    }
`;
export const WrapTrackDegrees = styled.div`
    /* border: 1px solid blue;  */
    display: flex;
    align-items: center;
    & span {
        font-size: 11px;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 16px;
        text-transform: uppercase;
    }
    & strong {
        font-size: 12px;
    }
`;

export const WrapObservation = styled.div`
    /* border: 1px solid blue;  */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.4rem;
    & span {
        font-size: 1em;
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
        color: ${(props) => props.$colors || "transparent"}; 
    }
`;