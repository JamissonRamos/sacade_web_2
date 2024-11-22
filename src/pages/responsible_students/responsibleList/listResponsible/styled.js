import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

const StyledButton = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 0;
    border-radius: 4px;
    background-color: transparent;
    border: .75px solid;
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
    @media (max-width: 768px) {
        max-width: 40%;
        padding: 6px 0;
    }
`;

const StyledEdit = css`
    color: ${Theme.Colors.green800};
    &:hover{
        background-color: ${Theme.Colors.green800};
        color: ${Theme.Colors.white800};
    }
`;
const StyledDelete = css`
    color: ${Theme.Colors.red800};
    &:hover{
        background-color: ${Theme.Colors.red800};
        color: ${Theme.Colors.white800};
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 1rem; // definir um espaço de elemento;
    border: .75px solid ${Theme.Colors.grey400};
    box-shadow: ${Theme.Shadow.sh900};
    border-radius: 12px;
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const Wrap  = styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .8rem;
    margin-bottom: .4rem;
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
    & span {
        ${StyledText};
    }
`;
export const Status = styled.div`
    /* border: 1px solid blue; */
    flex: 1.6;
    & span {
        ${StyledText};
    }
    @media (max-width: 768px) {
        text-align: center;
    }
`;
export const WrapButtons = styled.div`
    /* border: 1px solid blue; */
    flex: 2;
    display: flex;
    justify-content: space-around;
    gap: .8rem;
    @media (max-width: 768px) {
        justify-content: center;
    }
    
    
`;
export const WrapButtonDelete = styled.button`
    ${StyledButton}
    ${StyledDelete}
    border-color: ${Theme.Colors.red800};
`;
export const WrapButtonEdit = styled.button`
    ${StyledButton}
    ${StyledEdit}
    border-color: ${Theme.Colors.green800};
`;