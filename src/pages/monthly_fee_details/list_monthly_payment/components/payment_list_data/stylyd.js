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
  flex-direction: column;
  padding: 0;
  border-bottom: 2px solid ${Theme.Colors.grey400};
`;

export const WrapSection = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 0rem;
    padding: 0rem .8rem;
`;

export const WrapRow = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: space-between; 
    padding: .2rem 1rem;
    & span {
      margin-bottom: 0.2rem;
      font-weight: 500;
      color: ${ Theme.Colors.gray500};
    }
`;
export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: .2rem 1rem;
    margin: .4rem 0 .8rem 0;
    & button {
      ${styledButton};
    }
`;