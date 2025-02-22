import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Card = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const SectionPrime = styled.div`
    /* border: 1px solid red; */
    flex: 5;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: .2rem 0;
    @media (max-width: 375px) {
        flex: auto;
    }
`;
export const SectionSecondary = styled.div`
    /* border: 1px solid red; */
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding: .2rem 0;
    @media (max-width: 375px) {
        flex: auto;
    }
`;
export const WrapIndex = styled.div`
    /* border: 1px solid red; */
    width: auto;
    padding: .2rem;
    margin-right: .4rem;
    & span {
        font-weight: 500;
        color: ${Theme.Colors.grey800};
    }
`;
export const CircleFirstLetterNome = styled.div`
    /* border: 1px solid red; */
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-right: .8rem;
    background: ${Theme.Colors.blue100};
    border-radius: 20px;
    font-weight: 900;
    font-size: 20.1px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${Theme.Colors.blue800};
    @media (max-width: 425px) {
        font-size: 18.1px;
    }
    @media (max-width: 375px) {
        width: 20px;
        height: 20px;
        padding: .8rem;
        margin-right: .6rem;
        font-size: 14.75px;
    }
`;
export const Name = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: start;
    padding: .2rem 0;
    text-align: start;
    font-size: 1rem;
    letter-spacing: 0.4px;
    font-weight: 500;
    line-height: 16px;
    color: ${Theme.Colors.grey800};
    @media (max-width: 425px) {
        font-size: .9rem;
    }
    @media (max-width: 375px) {
        font-size: .8em;
        letter-spacing: 0.6px;
        line-height: 16px;
    }
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
        text-transform: uppercase;
    }
`;