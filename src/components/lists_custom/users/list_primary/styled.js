import styled from "styled-components";
import { Theme } from "../../../../theme";


export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    /* overflow-y: auto; */
    padding: .2rem;

`;

export const WrapButton = styled.button`
    /* border: 1px solid blue; */
    width: 100%;
    padding: 1rem .6rem;
    margin-bottom: .6rem;
    border-left: 5px solid ${({$isActive}) => ($isActive ? Theme.Colors.red800 : Theme.Colors.green800)};
    border-radius: 4px;
    box-shadow: ${Theme.Shadow.sh900};
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: ${Theme.Colors.grey100};
    }
`;

export const WrapText = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .1rem;
    margin-bottom: .8rem;
    & span {
        color: ${Theme.Colors.red500 };
        font-weight: 500;
    }
`;

export const Card = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .8rem;
    /* justify-content: space-around; */
`;

export const SectionPrime = styled.div`
    /* border: 1px solid red; */
    min-width: 250px;
    flex: 5;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: .2rem 0;
`;
export const WrapIndex = styled.div`
    width: 10px;
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
`;

export const SectionSecondary = styled.div`
    /* border: 1px solid red; */
    min-width: 120px;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    
`;

export const Status = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    
    & span {
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 16px;
        text-transform: uppercase;
    }
`;