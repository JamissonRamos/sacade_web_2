import styled from "styled-components"; 
import { Theme } from "../../../../../../theme";

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
    gap: .4rem;
`;

export const WrapField = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .4rem;
    padding: .2rem .4rem;
    border-left: 4px solid ${Theme.Colors.blue400};
    background-color: ${Theme.Colors.grey100};
    & span{
        color: ${Theme.Colors.grey600} !important;
        font-weight: 500;
    }
`;