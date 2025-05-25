import styled, { css } from "styled-components"; 
import { Theme } from "../../../../../theme";

const styledButton = css`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  transition: all 0.3s ease-in-out;
  & span {
    font-weight: 500;
    color: ${ Theme.Colors.red800};
  }
  & svg {
      font-size: 1.2rem;
    }
  &:hover { 
    background-color: ${ Theme.Colors.red400};
    border: 1px solid ${ Theme.Colors.red500};
    & span, svg {
      color: ${ Theme.Colors.red600};
    }
  }
  
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const Container = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .6rem ;
`;

export const Card = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  max-width: 800px;
  box-shadow: ${Theme.Shadow.sh700};
  border-top: 10px solid ${Theme.Colors.grey500};
  border-radius: 4px;
  padding: .8rem 0;
`;

export const WrapSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
`;

export const WrapRow = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-between; 
  padding: .2rem .8rem;
  & span {
    margin-bottom: .2rem;
    font-weight: 500;
    color: ${Theme.Colors.grey700};
    
  }
`;

export const WrapButton = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: .2rem 1rem;
  margin: .6rem 0 .4rem 0;
  & button {
    ${styledButton};
  }
`;