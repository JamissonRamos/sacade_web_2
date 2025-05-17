import styled from "styled-components"; 
import { Theme } from "../../../../../theme";

// export const Container = styled.div`
//     border: 1px solid red;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     padding: .4rem .8rem;
//     `;

// export const WrapRow = styled.div`
//     border: 1px solid red;
//     display: flex;

//     padding: .4rem .8rem;
//     border: 1px solid red;
// `;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  & tbody {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${ Theme.Colors.gray100};
  }

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 1rem;
    border: 1px solid ${ Theme.Colors.gray300};
    border-radius: 4px;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem;
  background-color: ${ Theme.Colors.gray200};
  font-weight: 500;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid ${ Theme.Colors.gray300};
  ${({ highlight }) => highlight && `font-weight: bold; color: ${ Theme.Colors.grey500};`}

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-bottom: none;

    &:before {
      content: attr(data-label);
      font-weight: bold;
      display: inline-block;
      width: 50%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;