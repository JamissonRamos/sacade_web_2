import styled from "styled-components";
import { Theme } from "../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 16px 0;
    overflow-y: auto;
`;
export const Card = styled.div`
    /* border: 1px solid red; */
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: ${Theme.Colors.white800} ;
    box-shadow: ${Theme.Shadow.sh800};
    border-radius: 12px;
`;
export const Header = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    padding: 2px 0;
`;
// export const CircleLetterName = styled.div`
//     width: 40px;
//     height: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: ${Theme.Colors.blue100};
//     border-radius: 20px;
//     font-weight: 900;
//     font-size: 18.1px;
//     line-height: 25px;
//     text-transform: uppercase;
//     color: ${Theme.Colors.blue800};
// `;

export const Name = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    & span {
        font-weight: 700;
        font-size: .8em;
        line-height: 13px;
        color: ${Theme.Colors.green800};
    }
`;
export const Body = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;

export const Footer = styled.div`
    /* border: 1px solid red;    */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 16px;
    margin-top: 1.8rem;

`;
export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: center;
    & button {
        height: 28px;
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${Theme.Colors.green800};
        font-size: .8em;
    }

`;

