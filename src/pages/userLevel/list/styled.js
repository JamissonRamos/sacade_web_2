import styled from "styled-components";
import { Theme } from "../../../theme";

export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    /* max-height: 340px;   */
`;
export const TableHeader = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 30px;
    background-color: transparent;
`;
export const TableRow = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${Theme.Colors.grey400};
    &:nth-child(even) {
        background-color: transparent;
    }
    @media (max-width: 768px) {
        & .flex-Colum {
            flex-direction: column;
        }
    }
`;
export const TableHeaderCell = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    flex: ${({$flex}) => $flex ? $flex : 1};    
    padding: 8px;
    /* border-bottom: 1px solid ${Theme.Colors.grey300}; */
    & > span {
        font-style: normal;
        font-weight: 800;
        font-size: 12.8px;
        line-height: 13px;
        text-align: left;
        text-transform: uppercase;
        color: ${Theme.Colors.grey500};
    }
`;

export const TableBody = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: calc(100% - 30px);
    padding-bottom: 1rem;
    overflow-y: auto;
`;
export const TableBodyCell = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    flex: ${({$flex}) => $flex ? $flex : 1};    
    padding: .6rem 10px;


`;
export const CircleLetterName = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Theme.Colors.blue100};
    border-radius: 20px;
    font-weight: 900;
    font-size: 21.1px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${Theme.Colors.blue800};
`;