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
            <img src={Theme.ImgC.LogoLutaYellow} alt="Logo de Segurança"  />
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
                  <Form.Group className="mb-1" controlId="formGridEmail">
                    <Form.Label >Email</Form.Label>
                    <InputGroup >
                      <InputGroup.Text> <Theme.Icons.MdOutlineAlternateEmail />  </InputGroup.Text>
                      <Form.Control 
                        type="email" 
                        name='email' 
                        placeholder="Digite seu email de acesso" 
                        // {...register("emailUser")}
                        isInvalid={true} //!!errors.emailUser
                      />
                    
                      <Form.Control.Feedback  type="invalid" >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quis doloremque ratione suscipit iure accusantium, deleniti harum accusamus assumenda nobis voluptatum ipsa eos animi omnis eius eaque. Exercitationem dolorem cupiditate dolor recusandae, dolorum a sit libero aliquam explicabo illo esse dolore nemo quasi quis! Et voluptas facere voluptatum cupiditate excepturi sunt modi veritatis quae optio minus, iusto quidem iure, qui deleniti facilis voluptatibus neque. Accusamus, impedit excepturi, pariatur sint vel natus maxime quam laudantium inventore aut aperiam eum ad, maiores consequatur dolor culpa exercitationem amet? Aliquam asperiores minima animi quod ea commodi voluptates esse labore? Distinctio magni beatae obcaecati repellendus ratione nam expedita. Ab provident laborum impedit. Ex porro rerum fugiat ea voluptatibus in aspernatur eaque? Autem, dolore illo tenetur id qui iure accusantium deserunt unde explicabo eum sint sunt, dignissimos cum! Consectetur quae suscipit repellendus ab dignissimos culpa, nostrum, eum ullam totam corporis vel, magni repellat soluta voluptatem sequi facere eos nam facilis dolorum? Nesciunt incidunt modi temporibus accusantium sunt architecto accusamus iste quae eos repellendus, earum aliquam fuga cupiditate veniam laborum asperiores ex doloribus sed. Sed quis cupiditate dicta illum voluptates facilis ipsa unde in nulla repellat distinctio dolore temporibus officia, asperiores facere quas cumque, est sint dolores porro! Dolorum ut a iste nemo aliquid illo cupiditate temporibus aut aperiam earum eaque, vero alias autem maiores accusantium soluta exercitationem quia totam, porro vitae ipsa dolore architecto. Tempora laboriosam, velit cupiditate recusandae commodi enim voluptatum incidunt, a fuga voluptates harum voluptatibus? Illo rerum sed optio at quos consequatur temporibus iure? Debitis quibusdam quasi placeat aspernatur. Saepe inventore odio aut ut eaque, in exercitationem porro illo ea? Similique ea recusandae nihil tempora aperiam dolorum quibusdam quaerat illum eveniet, enim vitae perspiciatis quod dolores harum quisquam ex quasi repellendus vel tempore fugiat voluptates pariatur. Deserunt eos fugiat incidunt excepturi dolorum modi!
                        {/* errors.emailUser && errors.emailUser.message */}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formGridPassword">
                    <Form.Label className="mb-0">Senha</Form.Label>
                    <InputGroup >
                      <InputGroup.Text> <Theme.Icons.MdLock /> </InputGroup.Text>
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