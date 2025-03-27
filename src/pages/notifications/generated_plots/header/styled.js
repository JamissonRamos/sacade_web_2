import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Header = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
`;
export const WrapTitle = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    & svg {
        font-size: 1.8em;
        color: ${Theme.Colors.green800};
    }
    & span {
        color: ${Theme.Colors.green800};
    }
`;

export const WrapSubTitle = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    & span {
        color: ${Theme.Colors.grey600};
    }
`;

export const WrapError = styled.div`
    /* border: 1px solid red; */
    display: flex;
    gap: .8rem;
    & svg {
        padding: 2px;
        border-radius: 100px;
        background-color: ${(props) => (props.$error ? Theme.Colors.red800 : Theme.Colors.green800)};
        font-size: 1.2em;
        color: ${Theme.Colors.white800};
    }
    @media (max-width: 475px) {
        font-size: .8em;
    }
`;