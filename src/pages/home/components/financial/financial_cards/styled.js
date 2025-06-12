import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";

const StyledCard = css`
    width: 300px;
    min-width: 250px;
    height: 100px;
    min-height: 120px;
    position: relative; /* Adicionado para posicionar o pseudo-elemento */
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 1rem .8rem;
    margin: 0 auto; /* O justify-content: center; no WrapCards não funcionou  */
    box-shadow: ${Theme.Shadow.sh900};
    border-radius: 8px;
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
`;

export const WrapCards = styled.div`
    /* border: 1px solid blue; */
    max-height: 200px;
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 1rem ;
    overflow: auto;
`;

export const WrapCard = styled.div`
    /* border: 1px solid red; */
    ${StyledCard}
    border-left: 5px solid ${({$borderColor}) => $borderColor};
`;

export const SectionHeader = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    & span{
        font-weight: 500;
        letter-spacing: 0.8px;
    };
    & span:nth-child(2){
        font-weight: 900;
        font-style: italic;
        letter-spacing: 0.9px;
        color: ${(props) => props.$bgColor};
    };
`;

export const SectionBody = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    & span{
        font-size: 1em;
        font-weight: 500;
        letter-spacing: 1px;

    };
`;

export const SectionIconFloating = styled.div`
    position: absolute;
    bottom: 10px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem;
    border: 2px solid ${(props) => props.$bgColor};
    border-radius: 100px;
    
    & svg{
        font-size: 2em;
        color: ${(props) => props.$bgColor};
    }
`;