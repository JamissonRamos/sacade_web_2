import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

const StyledButton = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 8px;
    border-radius: 4px;
    background-color: transparent;
    border: .75px solid;
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
    @media (max-width: 768px) {
        padding: 6px 8px;
    }
`;

const StyledOutline = css`
    color: ${Theme.Colors.green800};
    &:hover{
        background-color: ${Theme.Colors.green800};
        & span {
            color: ${Theme.Colors.white800};
        }

    }
`;

const StyledText = css`
    font-style: normal;
    font-weight: 800;
    font-size: 12.8px;
    line-height: 13px;
    text-align: left;
    text-transform: uppercase;
    color: ${Theme.Colors.grey600};
    text-transform: uppercase;
    @media (max-width: 768px) {
        font-size: 12px;
        font-weight: 500;
        line-height: 8px;
    }
    @media (max-width: 425px) {
        font-size: 10px;
        font-weight: 500;
        line-height: 8px;
    }
`;

export const Content = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: .8rem; //Quando gerar barra de rolagem;
    overflow: auto;
`;
export const CardItem = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Wrap  = styled.div`
    /* border: 1px solid blue; */
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .2rem;
`;

export const WrapNameCircule  = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: start;
    gap: .4rem;
`;

export const Index = styled.div`
    /* border: 1px solid blue; */
    flex: .4;
    & span {
        ${StyledText};
    }
`;
export const CircleLetterName = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: .8rem;
    background: ${Theme.Colors.blue100};
    border-radius: 20px;
    font-weight: 900;
    font-size: 21.1px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${Theme.Colors.blue800};
    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
        margin-right: .4rem;
        font-size: 16.1px;
    }
    
`;
export const Name = styled.div`
    /* border: 1px solid blue; */
    flex: 3.8;
    padding: 0 .2rem;
    & span {
        ${StyledText};
    }
`;
export const Status = styled.div`
    /* border: 1px solid blue; */
    padding: 0 .2rem;
    & span {
        ${StyledText};
    }
    @media (max-width: 768px) {
        text-align: center;
    }
`;
export const WrapButtons = styled.button`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: .8rem;
    ${StyledButton};
    ${StyledOutline};


`;
