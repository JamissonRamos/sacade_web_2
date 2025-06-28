import styled from 'styled-components'; // Usando styled-components para estilização
import { Theme } from '../../theme';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .3rem 1rem;
    border-radius: 0.65rem;
    background-color: ${(props) => props.$bg || Theme.Colors.blue2800};
    border: .075rem solid ${(props) => props.$borderColor || "transparent"};
    & span {
        display: inline-block;
        font-size: .7em;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 14px;
        color: ${(props) => props.$textColor || Theme.Colors.white800};
    }

    @media (max-width: 425px) {
        padding: .2rem 1rem;

        & span {
            font-size: .6em;
            line-height: 24px;
        }
    }
`;