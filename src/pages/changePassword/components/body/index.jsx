//CSS
import * as S from './styled';
//Componets
import { TextC } from "../../../../components/Typography";
import { Alert, Button, Form, Spinner} from "react-bootstrap";
import FieldsForm from "../fields_form";
//Hooks
import { useState } from "react";
import { Theme } from "../../../../theme";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../../../validations/index'
import { useUpdatePassword } from '../../../../hooks/changePassword/useUpdatePassword'
import { useNavigate } from "react-router-dom";


const Body = () => {
    const [ msgBox, setMsgBox] = useState(null)
    const navigate = useNavigate();
    const { updatePasswordHandler, loading: loadingPassword, error: errorPassword } = useUpdatePassword();
    
    const { register, handleSubmit, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Validations.ChangePasswordSchema)
    }); 

    const onSubmitForm = async (data) => { 
        const { currentPassword, newPassword} = data;
        const result = await updatePasswordHandler(currentPassword, newPassword)
        if(result){
            setMsgBox({variant: 'success', message: 'Alteração feita com sucesso!'})
            reset();
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    }

    return (
        <>
            {
                errorPassword && <Alert variant={'danger'}> {errorPassword} </Alert>
            }
            {
                msgBox && <Alert variant={msgBox.variant}> {msgBox.message} </Alert>
            }
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
                    <Form onSubmit={handleSubmit(onSubmitForm)}>
                        <FieldsForm  register={register} errors={errors}/>
                        <S.WrapButtonForm>
                            <Button
                                type="submit"
                                variant="success"
                                size="sm"
                                disabled={ loadingPassword ? true : false}
                            >
                                {
                                    loadingPassword ?  
                                    <>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Atualizando...</span>
                                    </> :
                                    <>
                                        <Theme.Icons.MdUpdate />
                                        <span> Muda Senha</span>
                                    </>
                                }
                            </Button>
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => navigate('/')}
                            >
                                <Theme.Icons.MdClose />
                                Cancelar
                            </Button>
                        </S.WrapButtonForm>
                    </Form>
                </S.Right>
            </S.Container>
        </>
    )
}

export default Body