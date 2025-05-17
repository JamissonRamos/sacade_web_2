import styled from "styled-components";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: .8rem;
    padding: .2rem 0;
`;

export const WrapData = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    & span{
        font-weight: 500;
    }
`;