import styled from "styled-components";

export const Container = styled.div`
    /* border: 1px solid green; */
    width: 100vw;
    height: 100vh;
    padding: 1rem ;

    overflow: auto;
    transition: margin 0.4s; 
    @media (max-width: 768px) {
        border: 1px solid red;
    }
    @media (max-width: 425px) {
        border: 1px solid blue;
    }


`;
