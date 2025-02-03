import * as S from './styled';
import { TextC } from '../../../../../components/Typography';
import { useState } from 'react';

const HeaderForm = ({fullname,  checkForm}) => {
    const [tipeForm] = useState(!checkForm ? "Cadastrar" : "Atualizar")

    return (
        <S.Container>
            <TextC.Title level={2}> {tipeForm} Ficha do Aluno</TextC.Title>
            <TextC.Body level={2}> Essa é a ficha do aluno: <strong>{fullname}</strong> </TextC.Body>
        </S.Container>
    )
}

export default HeaderForm