import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";


const StyledSections = css`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .2rem;
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 330px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    padding: .6rem .4rem;
    overflow-y: auto;
`;
export const WrapButton = styled.button`
    /* border: 1px solid blue; */
    width: 100%;
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

export const SectionsFirst = styled.div`
    /* border: 1px solid blue; */
    ${StyledSections}
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

export const SectionsSecond = styled.div`
    /* border: 1px solid red; */
    ${StyledSections}
    justify-content: space-evenly;
    
`;

export const WrapInterestRates = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    padding: .2rem .6rem;
    background-color: ${Theme.Colors.grey200};
    border-radius: 8px;
`;
export const WrapLabel = styled.div`
    /* border: 1px solid red; */
    padding: .2rem;
    border-bottom: 3px solid ${(props) => (props.$borderBColor)};
    & span{
        font-weight: 900;
        letter-spacing: 1px;
    }
`;
export const WrapFeesMoney = styled.div`
    /* border: 1px solid red; */
    padding: .2rem;
    & span{
        font-size: .8em;
        font-weight: 900;
        letter-spacing: 1px;
    }
    @media (max-width: 425px) {
        padding: 0 .2rem;
        & span {
            font-size: .7em;
        }
    }
`;
export const WrapFeesPercentage = styled.div`
    /* border: 1px solid red; */
    padding: .2rem;
    & span{
        font-size: .8em;
        font-weight: 900;
        letter-spacing: 1px;
    }
    @media (max-width: 425px) {
        padding: 0 .2rem;
        & span{
            font-size: .7em;
        }
    }
`;

export const SectionsThird = styled.div`
    /* border: 1px solid blue; */
    margin-top: .8rem;
    ${StyledSections}
`;

export const WrapValue = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .4rem .8rem;
    border-radius: 4px;
    background-color: ${(props) => props.$fontColor};
    & span {
        /* font-size: 1em; */
        font-weight: 500;
        color: ${Theme.Colors.white800};
    }
`;
export const WrapShowTaxes = styled.div`
    border: 1px solid blue;
    
    display: flex;
    gap: .4rem;
    padding: .2rem;
    & span{
        font-size: .8em;
        font-weight: 400;
        letter-spacing: 1px;
    }
`;

