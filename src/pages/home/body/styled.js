import styled from "styled-components";
import { Theme } from "../../../theme";



export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    padding: .2rem 0;
    margin-bottom: .4rem;
`;
export const SectionCards = styled.div`
    /* border: 1px solid red; */

    display: flex;
    flex-wrap: wrap; /* Permite que os itens quebrem para baixo */
    justify-content: flex-start; /* Centraliza os itens */
    gap: 10px; /* Espaço entre os cards */
    padding: .2rem;
`;
export const Card = styled.div`
    /* border: 1px solid red; */
    max-width: 254px;
    display: flex;
    align-items: center;
    gap: .2rem;
    padding: .8rem ;
    background: ${Theme.Colors.white800};
    box-shadow: ${Theme.Shadow.sh2100};
    border-radius: 8px;
`;
export const WrapImg = styled.div`
    /* border: 1px solid red; */
    width: 36px;
    height: 36px;
    & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;
export const WrapText = styled.div`
    /* border: 1px solid red; */

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;
`;
export const Title = styled.div`
    /* border: 1px solid red; */

    display: flex;
    align-items: center;
    & span {
        /* font-size: 2em; */
        color: ${Theme.Colors.green800};
    }
    @media (max-width: 1024px) {
        & span {
            font-size: .6em;
        }
    }

`;
export const SubTitle = styled.div`
    /* border: 1px solid red; */

    display: flex;
    align-items: center;
    & span {
        color: ${Theme.Colors.grey700};
    }
    @media (max-width: 1024px) {
        & span {
            font-size: .6em;
        }
    }

`;

