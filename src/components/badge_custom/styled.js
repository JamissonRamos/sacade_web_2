import styled from 'styled-components'; // Usando styled-components para estilização

import { Theme } from '../../theme';

export const StyledBadge = styled.div`
    display: inline-block;
    padding: .3rem 1rem;
    border-radius: 0.65rem;
    background-color: ${(props) => props.bg || Theme.Colors.blue2800}; // Cor de fundo padrão
    border: .075rem solid ${(props) => props.borderColor || "transparent"};
    & span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .6rem;
        font-size: .7em;
        color: ${(props) => props.textColor || Theme.Colors.white800}; // Cor do texto padrão
        & span {
            width: 20px;
            height: 20px;
            display: flex;
            background-color: white;
            border-radius: 100px;
            font-size: 1.4em;
            font-weight: 500;
            text-align: center;
            color: ${(props) => props.textColor || Theme.Colors.grey600};
        }
    }
`;