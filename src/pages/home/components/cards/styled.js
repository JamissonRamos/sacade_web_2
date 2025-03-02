import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Card = styled.div`
    /* border: 1px solid red; */
    width: 100px;
    max-width: 100px;
    height: 100px;
    position: relative;
    display: flex;
    align-items: center;
    gap: .2rem;
    padding: 1rem .4rem;
    background: ${Theme.Colors.white800};
    box-shadow: ${Theme.Shadow.sh900};
    border-radius: 100px;
    overflow: visible;
`;
export const WrapImg = styled.div`
    /* border: 1px solid red; */
    width: 36px;
    height: 36px;
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-30%);
    z-index: 9;
    & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;
export const WrapText = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .2rem;
`;
export const Title = styled.div`
    /* border: 1px solid red; */

    display: flex;
    align-items: center;
    justify-content: center;
    & span {
        font-size: 1em;
        font-weight: 700;
        color: ${Theme.Colors.green800};
    }

`;
export const SubTitle = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    & span {
        font-size: .7em;
        font-weight: 900;
        text-transform: uppercase;
        text-align: center;
        color: ${Theme.Colors.grey600};
    }
`;

