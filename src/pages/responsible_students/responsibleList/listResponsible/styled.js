import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    padding: .2rem .4rem;
    overflow-y: auto;
`;
export const WrapButton = styled.button`
    /* border: 1px solid blue; */
    width: 100%;
    padding: 1rem .6rem;
    margin-bottom: .6rem;
    border-left: 5px solid  ${Theme.Colors.green800};
    border-radius: 4px;
    box-shadow: ${Theme.Shadow.sh900};
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: ${Theme.Colors.grey100};
    }
`;
export const Card = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const SectionPrime = styled.div`
    /* border: 1px solid red; */
    flex: 5;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: .2rem 0;
`;
export const SectionSecondary = styled.div`
    /* border: 1px solid red; */
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding: .2rem 0;
`;
export const WrapIndex = styled.div`
    width: 10px;
    margin-right: .4rem;
    & span {
        font-weight: 500;
        color: ${Theme.Colors.grey800};
    }
`;

export const CircleFirstLetterNome = styled.div`
    /* border: 1px solid red; */
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-right: .8rem;
    background: ${Theme.Colors.blue100};
    border-radius: 20px;
    font-weight: 900;
    font-size: 14.1px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${Theme.Colors.blue800};
`;
export const Name = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: start;
    padding: .2rem 0;
    font-size: 1rem;
    letter-spacing: 0.4px;
    font-weight: 500;
    line-height: 16px;
    color: ${Theme.Colors.grey800};
`;
export const Status = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    & span {
        font-size: .8em;
        letter-spacing: 0.4px;
        font-weight: 500;
        line-height: 16px;
        text-transform: uppercase;
        color: ${Theme.Colors.white800};
    }
`;












































// const StyledButton = css`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 8px;
//     padding: 14px 8px;
//     border-radius: 4px;
//     border: .75px solid  ${Theme.Colors.grey600};
//     background-color: transparent;
//     cursor: pointer;
//     transition: background-color 0.4s ease, color 0.4s;

// `;

// const StyledOutline = css`
//     color: ${Theme.Colors.green800};
//     &:hover{
//         background-color: ${Theme.Colors.yellow800};
//         & span {
//             color: ${Theme.Colors.white800};
//         }

//     }
// `;

// const StyledText = css`
//     font-style: normal;
//     font-weight: 800;
//     font-size: 12.8px;
//     line-height: 13px;
//     text-align: left;
//     text-transform: uppercase;
//     color: ${Theme.Colors.grey600};
//     text-transform: uppercase;
//     @media (max-width: 768px) {
//         font-size: 12px;
//         font-weight: 500;
//         line-height: 8px;
//     }
//     @media (max-width: 425px) {
//         font-size: 10px;
//         font-weight: 500;
//         line-height: 8px;
//     }
// `;

// export const Content = styled.div`
//     /* border: 1px solid red; */
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
//     padding: .8rem; //Quando gerar barra de rolagem;
//     overflow: auto;
// `;
// export const CardItem = styled.div`
//     /* border: 1px solid blue; */
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
// `;

// export const Wrap  = styled.div`
//     /* border: 1px solid blue; */
//     flex: 5;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: .2rem;
// `;

// export const WrapNameCircule  = styled.div`
//     /* border: 1px solid blue; */
//     display: flex;
//     align-items: center;
//     justify-content: start;
//     gap: .4rem;
// `;

// export const Index = styled.div`
//     /* border: 1px solid blue; */
//     flex: .4;
//     & span {
//         ${StyledText};
//     }
// `;
// export const CircleLetterName = styled.div`
//     width: 40px;
//     height: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: .8rem;
//     background: ${Theme.Colors.blue100};
//     border-radius: 20px;
//     font-weight: 900;
//     font-size: 21.1px;
//     line-height: 25px;
//     text-transform: uppercase;
//     color: ${Theme.Colors.blue800};
//     @media (max-width: 768px) {
//         width: 30px;
//         height: 30px;
//         margin-right: .4rem;
//         font-size: 16.1px;
//     }
    
// `;
// export const Name = styled.div`
//     /* border: 1px solid blue; */
//     flex: 3.8;
//     padding: 0 .2rem;
//     & span {
//         ${StyledText};
//     }
// `;
// export const Status = styled.div`
//     /* border: 1px solid blue; */
//     padding: 0 .2rem;
//     & span {
//         ${StyledText};
//     }
//     @media (max-width: 768px) {
//         text-align: center;
//     }
// `;
// export const WrapButtons = styled.button`
//     /* border: 1px solid blue; */
//     width: 100%;
//     display: flex;
//     justify-content: space-around;
//     gap: .8rem;
//     ${StyledButton};
//     ${StyledOutline};


// `;
