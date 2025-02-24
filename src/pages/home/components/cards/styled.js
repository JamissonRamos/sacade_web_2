import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Card = styled.div`
    /* border: 1px solid red; */
    
    max-width: 300px;
    display: flex;
    align-items: center;
    
    gap: .2rem;
    padding: 1rem .8rem;
    background: ${Theme.Colors.white800};
    box-shadow: ${Theme.Shadow.sh600};
    border-radius: 8px;
    @media (max-width: 575px) {
        width: 100%;
        gap: 1rem
    }
`;
export const WrapImg = styled.div`
    /* border: 1px solid red; */
    width: 36px;
    height: 36px;
    & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;
export const WrapText = styled.div`
    /* border: 1px solid red; */

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;
`;
export const Title = styled.div`
    /* border: 1px solid red; */

    display: flex;
    align-items: center;
    & span {
        font-size: 1em;
        font-weight: 700;
        color: ${Theme.Colors.green800};
    }

`;
export const SubTitle = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    & span {
        font-size: .8em;
        font-weight: 500;
        text-transform: uppercase;
        color: ${Theme.Colors.grey600};
    }
`;

