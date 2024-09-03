//Styled
import { Container, InputGroup, Col, Form, Row } from 'react-bootstrap';
import * as S from './styled'
//Hooks
import { useState } from 'react';
import { Theme } from '../../../../theme';

const DataUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  return (

      <S.Container>
        <Container>
          <Row >
            <Col sm={5} className="mb-3">
              <Form.Group controlId="formGridFirstName">
                <Form.Label >Nome</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Digite seu primeiro nome" 
                  isInvalid={false}
                />
                <Form.Control.Feedback type="invalid" >
                  erro no nome
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={7} className="mb-3">
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control 
                  type="text"  
                  name='lastName' 
                  placeholder="Digite seu segundo nome" 
                  ///{...register("lastName")}
                  isInvalid={false} //!!errors.lastName
                />
                <Form.Control.Feedback type="invalid" >
                  erro sobrenome
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row >
            <Col sm={12} className="mb-3">
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name='emailUser' 
                  placeholder="Digite seu email" 
                  //{...register("emailUser")}
                  isInvalid={false} //!!errors.lastName
                  />
                  <Form.Control.Feedback type="invalid" >
                    erro email
                  </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row >
            <Col sm={6} className="mb-3">
              <Form.Group controlId="formGridBirthDate">
                <Form.Label>Data Nascimento</Form.Label>
                <Form.Control 
                  type="date" 
                  name='birthDate' 
                 // placeholder="Digite seu email" 
                  //{...register("emailUser")}
                  isInvalid={false} //!!errors.lastName
                  />
                  <Form.Control.Feedback type="invalid" >
                    erro data nascimento
                  </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group controlId="formGridGender">
                <Form.Label>Gênero</Form.Label>
                <Form.Select>
                  <option>Selecione um Gênero</option>
                  <option value="1">Homem</option>
                  <option value="2">Mulher</option>
                  <option value="3">Outros</option>
                </Form.Select>
                
                  <Form.Control.Feedback type="invalid" >
                    erro gênero
                  </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row >
            <Col sm={6} className="mb-3">
              <Form.Group controlId="formGridNewPassword">
                <Form.Label>Nova Senha</Form.Label>
                <InputGroup>
                  <Form.Control 
                    type={showPassword ? 'text' : 'password'}
                    name='newPassword' 
                    placeholder="Digite sua nova senha" 
                    //{...register("password")}
                    isInvalid={false} //!!errors.lastName
                  />
                  <InputGroup.Text onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
                    {showPassword ? <Theme.Icons.MdVisibility /> : <Theme.Icons.MdVisibilityOff  />}
                  </InputGroup.Text>
                </InputGroup>
                <Form.Control.Feedback type="invalid" >
                  erro nova senha
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Group controlId="formGridConfirmPassword">
                <Form.Label>Confirma Senha</Form.Label>
                <InputGroup>
                  <Form.Control 
                    type={showPasswordConfirm ? 'text' : 'password'} 
                    name='confirmPassword' 
                    placeholder="Confirme sua senha" 
                    //{...register("password")}
                    isInvalid={false} //!!errors.lastName
                  />
                  <InputGroup.Text onClick={toggleShowPasswordConfirm} style={{ cursor: 'pointer' }}>
                    {showPasswordConfirm ? <Theme.Icons.MdVisibility /> : <Theme.Icons.MdVisibilityOff  />}
                  </InputGroup.Text>
                </InputGroup>
                <Form.Control.Feedback type="invalid" >
                  erro confirma senha
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </S.Container>

  )
}

export default DataUser