import styled from 'styled-components'; // Usando styled-components para estilização


export const StyledBadge = styled.div`
    display: inline-block;
    padding: 0.1em 1em;
    border-radius: 0.65rem;
    background-color: ${(props) => props.bg || "#007bff"}; // Cor de fundo padrão
    border: .075rem solid ${(props) => props.borderColor || "transparent"};
    & span {
        color: ${(props) => props.textColor || "#ffffff"}; // Cor do texto padrão
    }
`;