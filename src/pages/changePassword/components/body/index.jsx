import { Button, Form} from "react-bootstrap";
import { TextC } from "../../../../components/Typography";
import * as S from './styled';
// import { useState } from "react";
import { Theme } from "../../../../theme";
import FieldsForm from "../fields_form";

const Body = () => {
    // const [showPasswordCurrent, setShowPasswordCurrent] = useState(false);
    // const [showPasswordNew, setShowPasswordNew] = useState(false);
    // const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    // const { uid, email, firstName, lastName } = registered;
    
    // const toggleShowPasswordCurrent = () => {
    //     setShowPasswordCurrent(!showPasswordCurrent);
    // };
    // const toggleShowPasswordNew = () => {
    //     setShowPasswordNew(!showPasswordNew);
    // };
    // const toggleShowPasswordConfirm = () => {
    //     setShowPasswordConfirm(!showPasswordConfirm);
    // };

    return (
        <S.Container>
            <S.Left>
                <S.WrapTextInfo>
                    <TextC.Body level={3}>Vamos mudar sua senha? Lembre-se de escolher uma senha segura e mantê-la apenas para você.</TextC.Body>
                </S.WrapTextInfo>
                <S.WrapImg>
                    <img src={Theme.ImgC.SecureLogin} alt="Logo de Segurança" />
                </S.WrapImg>
            </S.Left>

            <S.Right>
                <Form>
                    <FieldsForm />
                    <S.WrapButtonForm>
                        <Button
                            variant="success"
                            size="sm"
                        >
                            <Theme.Icons.MdUpdate />
                            Muda Senha
                        </Button>
                        <Button
                            variant="outline-danger"
                            size="sm"
                        >
                            <Theme.Icons.MdClose />
                            Cancelar
                        </Button>
                    </S.WrapButtonForm>
            </Form>
            </S.Right>
        </S.Container>
    )
}

export default Body