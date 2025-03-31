import styled from "styled-components";
import { Theme } from "../../../../../../theme";

export const Container = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 .2rem;
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