
export const ApplyChew = (fieldName, fieldValue) => {
    let maskedValue;

    switch (fieldName) {
        case 'studentHeight':
            maskedValue = FormatHeight(fieldValue);
            break;
        case 'studentWeight':
            maskedValue = FormatWeight(fieldValue);
            break;
        default:
            break;
    }
    return maskedValue;
}

export const FormatHeight = (value) => {
    /* 
        - Função para converter a altura em formato de metros (m) com 2 dígitos antes da vírgula e 2 depois;
        - Limita o valor a 2 dígitos antes da vírgula e 2 dígitos depois.
    */

    if (value === 0) return;
    if (value === '') return;

    // Converte o número para string com 2 casas decimais e substitui o ponto por vírgula
    const valueFormat = value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    
    // Remove todos os caracteres que não são dígitos
    const cleanedValue = valueFormat.replace(/\D/g, '');

    // Limita o número de dígitos antes da vírgula a 2 e depois da vírgula a 2
    const maxLength = 4; // 2 dígitos antes + 2 dígitos depois
    const truncatedValue = cleanedValue.slice(0, maxLength); // Corta o valor para no máximo 4 dígitos

    // Divide por 100 para ajustar as casas decimais (2 casas)
    const numberValue = parseFloat(truncatedValue) / 100;

    if (numberValue > 3.00) {
        return 'm 0,00';
    }

    // Formata o número para o formato de altura com 2 dígitos antes e 2 depois da vírgula
    const formattedValue = numberValue.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return `m ${formattedValue}`;
};

export const FormatWeight = (value) => {
    /* 
        - Função para converter o peso em formato de quilogramas (kg) com duas casas decimais;
        - O usuário começa a digitar de trás para frente, por exemplo: 22, 001 para 1,23 kg.
    */
    if (value === 0) return;
    if (value === '') return;

    // Converte o número para string com 2 casas decimais e substitui o ponto por vírgula
    const valueFormat = value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    // Remove todos os caracteres que não são dígitos
    const cleanedValue = valueFormat.replace(/\D/g, '');
        // Limita o número de dígitos antes da vírgula a 3 e depois da vírgula a 2
        const maxLength = 5; // 3 dígitos antes + 2 dígitos depois
        const truncatedValue = cleanedValue.slice(0, maxLength); // Corta o valor para no máximo 5 dígitos

    // Divide por 100 para ajustar as casas decimais (2 casas)
    const numberValue = parseFloat(truncatedValue) / 100;
        // Formata o número para o formato de peso com 3 dígitos antes e 2 depois da vírgula
        const formattedValue = numberValue.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

    // Formata o número para o formato de peso com duas casas decimais
    return `kg ${formattedValue}`;
};

export const FormatStringNumber = (value) => {
    /* 
        -A função ela vai servir pra converter strings em números para se inserção no banco de dados;
    */
    if (value === 0) return;
    if (value === '') return;

    // Remove a unidade (kg, m, etc.) e espaços em branco
    const valueWithoutUnit = value.replace(/[^0-9,]/g, '').trim();

    // Substitui a vírgula por ponto e converte para número
    const numberValue = parseFloat(valueWithoutUnit.replace(',', '.'));

    return numberValue;
};

export const CapitalizedValue = (fieldValue) => {
    const inputValue = fieldValue;

    // Capitaliza a primeira letra de cada palavra
    const capitalizedWords = inputValue.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    const newValue = capitalizedWords.join(' ');
    return(newValue); // Atualiza o valor no React Hook Form
};

export const ConvertDate = (dateString) => {
    // Função para converter a data YYYY-MM-DD
    const parts = dateString.split("/");
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Retorna no formato "YYYY-MM-DD"
};

export const FormattedDate = (birthDate) => {
    const newDate = new Date(birthDate);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = newDate.getFullYear();
    
    return `${day}/${month}/${year}`;
};

export const AgeCalculation = (birth) => {
    //Função para calcular idade, retorna true >= 18 e false < 18
    const currentDate = new Date(); // Data atual
    const birthDate = new Date(ConvertDate(birth)); // Converter a data recebida em objeto Date

    // Calcular a idade
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    // Ajustar a idade caso o mês ou dia atual seja antes do aniversário
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    // Retornar true se maior ou igual a 18, false caso contrário
    return age >= 18;
};
