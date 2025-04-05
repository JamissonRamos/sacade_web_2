import styled from "styled-components";
import { Theme } from "../../../../theme";


export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    overflow: auto;
`;

export const WrapText = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    padding: .2rem 0;
    & span {
        color: ${Theme.Colors.grey500}
    }
    & span:first-child {
        color: ${Theme.Colors.green800}
    }
    & strong {
        color: ${Theme.Colors.yellow700};
    }
`;

export const WrapFilterMenu = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 470px;
    display: flex;
    gap: .6rem;
    padding: .4rem 1rem;
    margin-top: .8rem;
    overflow: auto;
`;

export const WrapButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    padding: .3rem  .9rem;
    border-radius: 20px;
    background-color: ${Theme.Colors.grey200};
    transition: background-color 0.4s ease, color 0.4s;
    & span{
        font-size: .7em;
        font-weight: 900;
        letter-spacing: 1px;
        color: ${Theme.Colors.grey600};
    }
    &:hover {
        background-color: ${Theme.Colors.grey100};
        & span{
            color:  ${Theme.Colors.grey600};
        } 
    }

    &.active {
        background-color: ${Theme.Colors.yellow400};
        border-color: ${Theme.Colors.yellow400};
        & span{
            color:  ${Theme.Colors.grey100};
        }
    }

    @media (max-width: 600px) {
        padding: .2rem  .8rem;
        & span{
            font-size: .7em;
        }
    }
`;

export const WrapTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;