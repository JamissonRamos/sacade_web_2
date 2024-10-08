
import  { useState } from 'react'
import  {Container, Form, InputGroup} from 'react-bootstrap'
import  { Theme } from '../../../../theme';
import * as S from './styled';


const FieldsForm = ({register, errors}) => {
    const [showPasswordCurrent, setShowPasswordCurrent] = useState(false);
    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const toggleShowPasswordCurrent = () => {
        setShowPasswordCurrent(!showPasswordCurrent);
    };
    const toggleShowPasswordNew = () => {
        setShowPasswordNew(!showPasswordNew);
    };
    const toggleShowPasswordConfirm = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    };

    return (
        <S.Container>
            <Container>
                <Form.Group className="mb-3 p-1" controlId="formGridCurrentPassword">
                    <Form.Label>Senha Atual</Form.Label>
                    <InputGroup className=" p-1">
                        <Form.Control 
                            type={showPasswordCurrent ? 'text' : 'password'}
                            name='currentPassword' 
                            placeholder="Digite sua senha atual" 
                            {...register("currentPassword")}
                            isInvalid={!!errors.currentPassword} //!!errors.lastName
                        />
                        <InputGroup.Text onClick={toggleShowPasswordCurrent} style={{ cursor: 'pointer' }}>
                            {showPasswordCurrent ? <Theme.Icons.MdVisibility /> : <Theme.Icons.MdVisibilityOff  />}
                        </InputGroup.Text>
                        <Form.Control.Feedback type="invalid" >
                            {errors.currentPassword && errors.currentPassword.message}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                
                <Form.Group className="mb-3 p-1" controlId="formGridNewPassword">
                    <Form.Label>Nova Senha</Form.Label>
                    <InputGroup className=" p-1">
                        <Form.Control 
                            type={showPasswordNew ? 'text' : 'password'}
                            name='newPassword' 
                            placeholder="Digite sua nova senha" 
                            {...register("newPassword")}
                            isInvalid={!!errors.newPassword} //!!errors.lastName
                        />
                        <InputGroup.Text onClick={toggleShowPasswordNew} style={{ cursor: 'pointer' }}>
                            {showPasswordNew ? <Theme.Icons.MdVisibility /> : <Theme.Icons.MdVisibilityOff  />}
                        </InputGroup.Text>
                        <Form.Control.Feedback type="invalid" >
                            {errors.newPassword && errors.newPassword.message}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formGridConfirmPassword">
                    <Form.Label>Confirma Senha</Form.Label>
                    <InputGroup className=" p-1">
                        <Form.Control 
                            type={showPasswordConfirm ? 'text' : 'password'}
                            name='confirmPassword' 
                            placeholder="Confirme sua nova senha " 
                            {...register("confirmPassword")}
                            isInvalid={!!errors.confirmPassword} //!!errors.lastName
                        />
                        <InputGroup.Text onClick={toggleShowPasswordConfirm} style={{ cursor: 'pointer' }}>
                            {showPasswordConfirm ? <Theme.Icons.MdVisibility /> : <Theme.Icons.MdVisibilityOff  />}
                        </InputGroup.Text>
                        <Form.Control.Feedback type="invalid" >
                            {errors.confirmPassword && errors.confirmPassword.message}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Container>
        </S.Container>
    )
}

export default FieldsForm