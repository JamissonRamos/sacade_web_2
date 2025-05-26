import styled, {css} from "styled-components";
import { Theme } from "../../../theme";

const styledWrapContent = css`
    width: 100%;
    display: flex;
    align-items: center;    
    justify-content: space-between;
    & span{
        font-weight: 500;
    }
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    justify-content: center;
    padding: .8rem ;
    margin-top: .6rem;
    @media (max-width: 768px) {
        padding: .2rem;
    }
`;

export const Card = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardHeader  = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    & span {
        font-weight: 500;
        color: ${Theme.Colors.grey600};
    }
`;

export const WrapStatus = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    gap: .4rem;
    padding: .4rem 1rem;
    background-color: ${(props) => (props.$bgColor)};
    border-radius: 4px;
    margin-bottom: .8rem;
    & span {
        font-size: 10.95px;
        font-weight: 800;
        letter-spacing: 1.45px;
        line-height: 16px;
        text-transform: uppercase;
        color: ${Theme.Colors.white800};
    }
`;

export const WrapTitle = styled.div`
    /* border: 1px solid blue;     */
    width: 100%;
    padding: .2rem 0rem;
`;

export const WrapDaysLate= styled.div`
    /* border: 1px solid blue; */
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: ${Theme.Colors.white800};
    & span {
        font-size: .7em;
        font-weight: 900;
        color: ${Theme.Colors.red700};
    } 
`;

export const WrapDate = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    justify-content: space-between;
    padding: .2rem 1rem;
    & span {
        font-weight: 500;
        color: ${(props) => props.$fontColor};
    }
`;

export const CardBody  = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .6rem;
    padding: .2rem 1rem;
    & span {
        color: ${(props) => props.$fontColor};
    }

`;

export const WrapInstallment  = styled.div`
    /* border: 1px solid red; */
    ${styledWrapContent}
`;
export const WrapInterestRates  = styled.div`
    /* border: 1px solid red; */
    ${styledWrapContent}
`;

export const WrapSubTotal  = styled.div`
    /* border: 1px solid red; */
    ${styledWrapContent}
`;