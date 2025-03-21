//Styled
import * as S from './styled'
//Hooks
import { Container, InputGroup, Form } from 'react-bootstrap';
import { useState } from 'react';
import { Theme } from '../../../../theme';
import { TextC } from '../../../../components/Typography';
import { mask } from 'remask';

const DataUser = ({register, setValue, errors}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const capitalizedValue = (e) => {
      const inputValue = e.target.value.trim();
      // Capitaliza a primeira letra de cada palavra
      const capitalizedWords = inputValue.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
      const newValue = capitalizedWords.join(' ');
      setValue(e.target.name, newValue); // Atualiza o valor no React Hook Form
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };
  const handleChange = (e) => {
    const maskedValue = mask(e.target.value, ['(99) 9 9999-9999']);
    setValue('phoneUsers', maskedValue)
  }

  return (
      <S.Container>
        <S.WrapTitleStepper>
          <TextC.Title level={1} >Vamos preencher alguns dados pessoais. </TextC.Title>
        </S.WrapTitleStepper>
        <Container className="my-2">
          <Form.Group className="mb-4 p-1" controlId="formGridFirstName">
            <Form.Label > Nome *</Form.Label>
            <Form.Control 
              type="text" 
              name="firstName"
              placeholder="Digite seu primeiro nome" 
              {...register("firstName")}
              isInvalid={!!errors.firstName}
              onBlur={(e) => capitalizedValue(e)}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName && errors.firstName.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4 p-1" controlId="formGridLastName">
            <Form.Label> Sobrenome *</Form.Label>
            <Form.Control 
              type="text"  
              name='lastName' 
              placeholder="Digite seu segundo nome" 
              {...register("lastName")}
              isInvalid={!!errors.lastName} 
              onBlur={(e) => capitalizedValue(e)}
            />
            <Form.Control.Feedback type="invalid" >
              {errors.lastName && errors.lastName.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4 p-1" controlId="formGridEmail">
            <Form.Label> Email *</Form.Label>
            <Form.Control 
              type="email" 
              name='emailUser' 
              placeholder="Digite seu email" 
              {...register("emailUser")}
              isInvalid={!!errors.emailUser} //
              />
              <Form.Control.Feedback type="invalid" >
                {errors.emailUser && errors.emailUser.message}
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4 p-1" controlId="formGridPhoneUsers">
            <Form.Label>Celular</Form.Label>
            <Form.Control 
              type="text" 
              name='phoneUsers' 
              placeholder="Digite seu número celular" 
              {...register("phoneUsers")}
              isInvalid={!!errors.phoneUsers}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid" >
              {errors.phoneUsers && errors.phoneUsers.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4 p-1" controlId="formGridBirthDate">
            <Form.Label> Data Nascimento *</Form.Label>
            <Form.Control 
              type="date" 
              name='birthDate' 
              {...register("birthDate")}
              isInvalid={!!errors.birthDate}
              />
              <Form.Control.Feedback type="invalid" >
                {errors.birthDate && errors.birthDate.message}
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4 p-1" controlId="formGridGender">
            <Form.Label> Gênero *</Form.Label>
            <Form.Select
              name='gender' 
              {...register("gender")}
              isInvalid={!!errors.gender}
            >
              <option value="">Selecione um Gênero</option>
              <option value="1">Homem</option>
              <option value="2">Mulher</option>
              <option value="3">Outros</option>
            </Form.Select>
            
              <Form.Control.Feedback type="invalid" >
                {errors.gender && errors.gender.message}
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4 p-1" controlId="formGridNewPassword">
            <Form.Label> Nova Senha *</Form.Label>
            <InputGroup>
              <Form.Control 
                type={showPassword ? 'text' : 'password'}
                name='newPassword' 
                placeholder="Digite sua nova senha" 
                {...register("newPassword")}
                isInvalid={!!errors.newPassword} //!!errors.lastName
              />
              <InputGroup.Text onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
                {showPassword ? <Theme.Icons.MdVisibility /> : <Theme.Icons.MdVisibilityOff  />}
              </InputGroup.Text>
            </InputGroup>
            <Form.Control.Feedback type="invalid" >
              {errors.newPassword && errors.newPassword.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4 p-1" controlId="formGridConfirmPassword">
            <Form.Label> Confirma Senha *</Form.Label>
            <InputGroup>
              <Form.Control 
                type={showPasswordConfirm ? 'text' : 'password'} 
                name='confirmPassword' 
                placeholder="Confirme sua senha" 
                {...register("confirmPassword")}
                isInvalid={!!errors.confirmPassword} 
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

export default DataUser


/* 
  - fazer um teste {errors.lastName && errors.lastName.message} retirar o errors.lastName &&
    ja que dentro do control tem o isInvalid={!!errors.lastName} que valida ou não o erro;


*/