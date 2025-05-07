import styled from "styled-components"; 
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;  
    flex-direction: column;
    justify-content: center;   
    gap: .4rem;
    padding: .8rem 0;
    margin-bottom: 1rem; 
    & span{
        color: ${Theme.Colors.grey600};
    }
    & span:first-child {
        color: ${Theme.Colors.green800};
    }
`;

export const WrapDataParcel = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column; 
    gap: .6rem;
    padding: .4rem .8rem;
    background-color: ${Theme.Colors.grey100};
    border-left: 4px solid ${Theme.Colors.blue400};
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