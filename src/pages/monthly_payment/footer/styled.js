import styled from "styled-components"; 
import { Theme } from "../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .6rem;
    margin-top: 1rem;
    overflow: visible;
`;

export const WrapDataParcel = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column; 
    gap: .6rem;
    padding: .4rem .8rem;
    background-color: ${Theme.Colors.blue200};
    border-left: 4px solid ${Theme.Colors.grey600};
    border-radius: 4px;
`;

export const WrapField = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span{
        color: ${Theme.Colors.grey600} !important;
        font-weight: 500;
    }
`;

export const WrapNotice = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const WrapText = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding: .2rem .8rem;
    background-color: ${ Theme.Colors.red400};
    border-radius: 4px;
    & span {
        font-weight: 500;
        letter-spacing: .8px;
        color: ${Theme.Colors.red700};
    }
`;
