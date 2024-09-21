import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { TextC } from '../../components/Typography';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { Theme } from '../../theme';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <S.Container>
      <S.WrapPages>
        <S.LeftPanel>
          <S.TitleOne>
            <TextC.Display level={2}>Seja bem-vindo!</TextC.Display>
          </S.TitleOne>
          <S.WrapImg>
            <img src={Theme.ImgC.LogoLutaYellow} alt="Logo de Segurança" />
          </S.WrapImg>
          <S.WrapRegister>
            <TextC.Body level={2}>Se você ainda não está cadastrado, não se preocupe! Basta clicar no botão abaixo para se registrar.</TextC.Body>
            <S.WrapButtonRegister>
              <Button 
                variant="warning"
                onClick={() => navigate(`/register`)}> 
                  <Theme.Icons.MdPersonAddAlt1 />
                  Fazer Cadastro
              </Button>
            </S.WrapButtonRegister>
          </S.WrapRegister>
        </S.LeftPanel>
        <S.PanelRight >
          <S.WrapHeader>
            <img src={Theme.ImgC.AvatarMan} alt="Logo" />
            <TextC.Headline level={2}>Faça seu login</TextC.Headline>
          </S.WrapHeader>
          <S.WrapForm>
            <Form>
              <S.FormFields >
                <Container className="my-2">
                  <Form.Group className="mb-4" controlId="formGridEmail">
                    <Form.Label s >Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name='email' 
                        placeholder="Digite seu email de acesso" 
                        // {...register("emailUser")}
                        isInvalid={false} //!!errors.emailUser
                      />
                    
                      <Form.Control.Feedback  type="invalid" >
                        {/* errors.emailUser && errors.emailUser.message */}
                        Lorem ipsum dolor sit amet.
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formGridPassword">
                    <Form.Label className="mb-0">Senha</Form.Label>
                    <InputGroup >
                      <Form.Control 
                        type={showPassword ? 'text' : 'password'}
                        name='password' 
                        placeholder="Digite sua senha" 
                        //{...register("newPassword")}
                        isInvalid={false} //!!errors.lastName
                      />
                      <InputGroup.Text onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
                        {showPassword ? <Theme.Icons.MdVisibility /> : <Theme.Icons.MdVisibilityOff  />}
                      </InputGroup.Text>
                    <Form.Control.Feedback type="invalid" >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, et. Accusantium unde neque illo nulla esse expedita recusandae nostrum dolore! {/* {errors.newPassword && errors.newPassword.message} */}
                    </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group >
                </Container>
              </S.FormFields>
              <S.WrapFooterForm>
                <Button
                  variant="outline-success"
                  onClick={() => navigate(`/`)}
                >
                  <Theme.Icons.MdLogout />
                  Login
                </Button>
              </S.WrapFooterForm>
            </Form>
          </S.WrapForm>
        </S.PanelRight>
      </S.WrapPages>
    </S.Container>
  )
}

export default Login