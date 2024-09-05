import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Steps = styled.div`
    /* border: 1px solid red; */
    max-width: 800px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin: 0 auto;
    &::after {
        content: "";
        width: 380px;
        position: absolute;
        top: 20px;
        border-bottom: 2px solid ${Theme.Colors.grey600};
    }

    @media (max-width: 768px) {
        max-width: 320px;
        margin: 1rem auto;
    }
    @media (max-width: 375px) {
        max-width: 300px;
        margin: 1rem auto;
        &::after {
            width: 300px;
    }
    }

`;
export const Step = styled.div`
/* border: 1px solid red; */
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .4rem;
    padding: 1rem;
    background-color: ${Theme.Colors.white800};
    z-index: 1;
    & span, svg {
        color: ${Theme.Colors.grey600}
    }
    
    &.active > svg{
        color: ${Theme.Colors.green800};
    }

    &.active > span{
        color: ${Theme.Colors.green800};
    }

    @media (max-width: 768px) {
        width: 80px;
        padding: .8rem;
        & span{
            display: none;
        }
        & svg {
            font-size: 1.3em;
        }
}
    @media (max-width: 375px) {
        width: 20px;
        padding: .4rem;
    }
`;