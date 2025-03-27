import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    padding: .2rem .4rem;
    overflow: auto;
`;

export const Cards = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    padding: .2rem .4rem;
`;

export const Card = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: .2rem .6rem 1.4rem .6rem;
    border-bottom: 2px solid ${Theme.Colors.grey600};
    background-color: ${props => props.$alternate ? Theme.Colors.grey200 : Theme.Colors.white};
`;

export const SectionFirst = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    gap: .4rem;
`;

export const WrapIndex = styled.div`
    /* border: 1px solid red; */
    width: auto;
    padding: .2rem;
    margin-right: .4rem;
    & span {
        font-weight: 900;
        color: ${Theme.Colors.grey800};
    }
`;

export const WrapName = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: start;
    padding: .2rem 0;
    & span{
        font-weight: 500;
        color: ${Theme.Colors.grey800};
    }
`;

export const SectionSecond = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .4rem;
`;

export const CarddDtaInstallment = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: .8rem;
`;

export const WrapError = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    & svg {
        padding: 2px;
        border-radius: 100px;
        background-color: ${(props) => (props.$error ? Theme.Colors.red800 : Theme.Colors.green800)};
        font-size: 1.2em;
        color: ${Theme.Colors.white800};
    }
    @media (max-width: 475px) {
        font-size: .8em;
    }
`;







