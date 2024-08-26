import styled from "styled-components";

export const Container = styled.div`
    /* border:1px solid orange; */
    flex: 8;
    display: flex;
    flex-direction: column;
    gap: .6rem;
    padding-top: 1rem;
    @media (max-width: 768px) {
        padding-top: 2.2rem;
    }
`;