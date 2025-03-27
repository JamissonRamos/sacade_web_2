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
    padding: 1rem .6rem;
    border-bottom: 3px solid ${Theme.Colors.green800};
    background-color: ${props => props.$alternate ? Theme.Colors.grey200 : Theme.Colors.white};
    @media (max-width: 768px) {
        flex-direction: column;
        gap: .8rem;
    }
`;

export const SectionFirst = styled.div`
    /* border: 1px solid red; */
    width: 40%;
    display: flex;
    align-items: center;
    gap: .4rem;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const WrapIndex = styled.div`
    /* border: 1px solid red; */
    width: auto;
    padding: .2rem;
    margin-right: .4rem;
    & span {
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
        color: ${Theme.Colors.grey800};
    }
`;

export const SectionSecond = styled.div`
    /* border: 1px solid red; */
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .4rem;
    @media (max-width: 768px) {
        width: 100%;
    }

`;

export const CarddDtaInstallment = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .8rem;
    border-bottom: 2px solid ${Theme.Colors.grey100};
    @media (max-width: 768px) {
        justify-content: space-around;
    }
`;
export const WrapError = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    & svg {
        width: 20px;
        height: 20px;
        border-radius: 100px;
        background-color: ${(props) => (props.$error ? Theme.Colors.red800 : Theme.Colors.green800)};
        color: ${Theme.Colors.white800};
    }
`;







