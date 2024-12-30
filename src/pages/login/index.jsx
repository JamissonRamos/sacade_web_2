import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { TextC } from '../../components/Typography';
import { Alert, Button, Container, Form, InputGroup, Spinner } from 'react-bootstrap';
import { Theme } from '../../theme';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Validations } from '../validations'
import { useLogin } from '../../hooks/login';


const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, reset, formState:{ errors } } = useForm(
    {
      resolver: yupResolver(Validations.LoginSchema)
    }
  );

  const { loginIn, isLoadingLogin, errorLogin } = useLogin.useLoginIn()

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    let result;
    result = await loginIn(data)

    if (result.success){
      navigate('/')
    }
    
    reset()
  }

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

            <S.WrapTextRegister>
              <TextC.Body level={2}>Se você ainda não está cadastrado, não se preocupe! Basta clicar no botão abaixo para se registrar.</TextC.Body>
            </S.WrapTextRegister>

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
            <TextC.Headline level={1}>Faça seu login</TextC.Headline>
          </S.WrapHeader>

          <S.WrapForm>
            <Form onSubmit={handleSubmit(onSubmit)} >
              <S.FormFields >
                <Container className="mb-4"  >
                  <Form.Group className="mb-4 p-1" controlId="formGridEmail">
                    <Form.Label >Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name='email' 
                        placeholder="Digite seu email de acesso" 
                        {...register("email")}
                        isInvalid={!!errors.email} //!!errors.emailUser
                      />
                      <Form.Control.Feedback  type="invalid" >
                        {errors.email && errors.email.message}
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formGridPassword">
                    <Form.Label className="mb-0">Senha</Form.Label>
                    <InputGroup className="p-1">
                      <Form.Control 
                        type={showPassword ? 'text' : 'password'}
                        name='password' 
                        placeholder="Digite sua senha" 
                        {...register("password")}
                        isInvalid={!!errors.password}
                      />
                      <InputGroup.Text onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
                        {showPassword ? <Theme.Icons.MdVisibility /> : <Theme.Icons.MdVisibilityOff  />}
                      </InputGroup.Text>
                    <Form.Control.Feedback type="invalid" >
                      {errors.password && errors.password.message}
                    </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group >
                </Container>
              </S.FormFields>
            </Form>
            <S.WrapFooterForm>

              <S.WrapButtonLogin>
                <Button
                  type='submit'
                  variant="outline-success"
                  disabled={isLoadingLogin ? true : false}
                >
                  {
                    isLoadingLogin ?  
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Carregando...</span>
                      </> :
                      <>
                        <Theme.Icons.MdLogout />
                        <span>Login</span>
                      </>
                  }
                  
                </Button>

              </S.WrapButtonLogin>

              <S.WrapButtonScreen>
                <Button 
                  variant='outline-success'
                  onClick={() => navigate('/splashScreen')}
                >
                  <span> Ir para a Página Inicial </span>
                </Button>
              </S.WrapButtonScreen>

            </S.WrapFooterForm>

          </S.WrapForm>

        </S.PanelRight>

      </S.WrapPages>

      <S.Error>
        {
          errorLogin && <Alert variant={'danger'}> {errorLogin} </Alert>
        }
      </S.Error>
    </S.Container>
  )
}

export default Login