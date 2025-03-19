import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding: .8rem 2rem;

`;
export const Card = styled.a`
    /* border: 1px solid red; */
    width: 240px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .8rem;
    padding: .8rem;
    background-color: ${Theme.Colors.grey100};
    //box-shadow: ${Theme.Shadow.sh700};

    border-radius: 8px;
    transition: 350ms;
    &:hover {
        width: 250px;
        height: 58px;
       // box-shadow: ${Theme.Shadow.sh502};
        border-bottom: 4px solid ${Theme.Colors.blue400} ;
        /* background-color: ${Theme.Colors.blue500};  */
    }


`;
export const CardSvg = styled.div`
    /* border: 1px solid red; */
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 .2rem;
    & svg {
        width: 100%;
        height: 100%;
        color: ${Theme.Colors.green800};
    }

`;
export const CardName = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    
    & span {
        width: 100%;
        padding: .2rem;
        color: ${Theme.Colors.grey700};
    }
`;