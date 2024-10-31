import styled from "styled-components";
import { Theme } from "../../theme";

export const HeaderPage = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: .2rem 0;
    margin-bottom: .4rem;
    & span {
        color: ${Theme.Colors.grey500}
    }
    & span:first-child {
        color: ${Theme.Colors.green800}
    }
`;
export const BodyPage = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    max-height: 84%;
    padding-bottom: .8rem;
    overflow: auto;
`;

export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 2;
    color: ${Theme.Colors.green800};
    @media (max-width: 425px) {
        height: 300px;
        padding: 0;
        flex: none;
    }
`;
