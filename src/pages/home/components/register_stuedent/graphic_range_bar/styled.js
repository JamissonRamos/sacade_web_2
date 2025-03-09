import styled, {css} from "styled-components";
import { Theme } from "../../../../../theme";


const StyledLabel = css`
    font-size: .8em;
    font-weight: 700;
    text-transform: uppercase;
    color: ${Theme.Colors.grey700};
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Label = styled.span`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .2rem;
    & span {
        ${StyledLabel}
    }
`;

export const BarContainer = styled.div`
    width: 100%;
    height: 8px;
    background-color: #ddd;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
`;

export const Bar = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    background-color:  ${({ bgColor }) => bgColor};
    width: ${({ percentage }) => percentage}%;
    transition: width 0.3s ease-in-out;

    animation: load 0.5s ease-in-out;

    @keyframes load {
        from {
            width: 100%;
        }
        to {
            width: ${({ percentage }) => percentage}%;
        }
    }
`;

export const WrapPercentage = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    padding: 0 .2rem;
    & span {
        ${StyledLabel}
    }
`;
