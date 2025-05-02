import styled, {css} from "styled-components";
import { Theme } from "../../../theme";

const styledWrapContent = css`
    width: 100%;
    display: flex;
    align-items: center;    
    justify-content: space-between;
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    justify-content: center;
    padding: 1rem ;
    margin-top: .6rem;
`;

export const Card = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 300px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
    padding: .8rem;
    box-shadow: ${Theme.Shadow.sh600};
    border-radius: 6px;
    border-left: 5px solid ${props => props.$BorderColor ? props.$BorderColor : Theme.Colors.primary};
`;

export const CardHeader  = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;   
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

export const CardBody  = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const WrapContentCard  = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .6rem;
    padding: .8rem ;
    border-radius: 4px;
    background-color: ${props => props.$bgColor};
    & span {
        color: ${Theme.Colors.white800};
    }
`;

export const WrapInterestRates  = styled.div`
    /* border: 1px solid red; */
    ${styledWrapContent}
`;
export const WrapInstallment  = styled.div`
    /* border: 1px solid red; */
    ${styledWrapContent}
`;
export const WrapSubTotal  = styled.div`
    /* border: 1px solid red; */
    ${styledWrapContent}
`;