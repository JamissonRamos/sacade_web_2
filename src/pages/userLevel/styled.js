import styled from "styled-components";
import { Theme } from "../../theme";

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
    border-bottom: 1px solid ${Theme.Colors.grey600};
    &:nth-child(even) {
        background-color: transparent;
    }
`;
export const TableHeaderCell = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    flex: ${({$flex}) => $flex ? $flex : 1};    
    padding: 8px;
    /* border-bottom: 1px solid ${Theme.Colors.grey300}; */
    & span {
        font-style: normal;
        font-weight: 800;
        font-size: 12.8px;
        line-height: 13px;
        text-align: left;
        text-transform: uppercase;
        color: ${Theme.Colors.grey500};
    }
`;