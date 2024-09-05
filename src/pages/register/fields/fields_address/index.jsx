import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { TextC } from '../../../../components/Typography'
import * as S from './styled'
import { Theme } from '../../../../theme'
import { useState } from 'react'

const Address = () => {
  const [cep, setCep] = useState(''); // Gerencia o estado do CEP

  const handleChange = (e) => {
    setCep(e.target.value); // Atualiza o estado com o valor do input
  };
  const handleClickCep = async () => {
    if (!cep) {
      alert('Por favor, digite um CEP.');
      return;
    }

    try {
      const resp = await fetch(`https://cdn.apicep.com/file/apicep/${cep}.json`);
      const data = await resp.json();
      console.log(data);
      // Adicione qualquer tratamento adicional dos dados aqui
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
      alert('Erro ao buscar o CEP. Tente novamente.');
    }
  }

  return (
    <S.Container>
      <S.WrapTitleStepper>
        <TextC.Headline level={1} >Vamos agora preencher seu endereço. </TextC.Headline>
      </S.WrapTitleStepper>
      <Container>
        <Row >
          <Col className="mb-3 ">
            <Form.Group as={Col} controlId="formGridCep ">
              <Form.Label>Cep</Form.Label>
              <InputGroup>
                <Form.Control 
                  type="text"  
                  name='cep' 
                  placeholder="Digite seu cep" 
                  onChange={handleChange} // Captura a mudança no input
                  ///{...register("lastName")}
                  isInvalid={false} //!!errors.lastName

                />
                <Button 
                  variant='success'
                  onClick={handleClickCep}
                  >
                    <Theme.Icons.MdSearch />
                  </Button>
                </InputGroup>
              <Form.Control.Feedback type="invalid" >
                erro cep
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col  sm={6} className="mb-3">
            <Form.Group as={Col} controlId="formGridResidenceNumber ">
              <Form.Label>Número da Residencia</Form.Label>
              <Form.Control 
                type="text"  
                name='residenceNumber' 
                placeholder="Número da casa" 
                ///{...register("lastName")}
                isInvalid={false} //!!errors.lastName
              />
              <Form.Control.Feedback type="invalid" >
                erro numero da residencia
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={6} className="mb-3">
            <Form.Group as={Col} controlId="formGridFederativeUnit">
              <Form.Label>UF</Form.Label>
              <Form.Control 
                type="text"  
                name='federativeUnit' 
                placeholder="Nome estado UF" 
                ///{...register("lastName")}
                isInvalid={false} //!!errors.lastName
              />
              <Form.Control.Feedback type="invalid" >
                erro 
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col sm={12} className="mb-3">
            <Form.Group controlId="formGridLogadouro">
              <Form.Label >Logadouro</Form.Label>
              <Form.Control 
                type="text" 
                name="logadouro"
                placeholder="Digite seu logadouro" 
                isInvalid={false}
              />
              <Form.Control.Feedback type="invalid" >
                erro no logadouro
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col sm={6} className="mb-3">
            <Form.Group controlId="formGridNeighborhood">
              <Form.Label >Bairro</Form.Label>
              <Form.Control 
                type="text" 
                name="neighborhood"
                placeholder="Digite o nome do see bairro" 
                isInvalid={false}
              />
              <Form.Control.Feedback type="invalid" >
                erro no bairro
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={6} className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control 
                type="text"  
                name='city' 
                placeholder="Digite nome da cidade" 
                ///{...register("lastName")}
                isInvalid={false} //!!errors.lastName
              />
              <Form.Control.Feedback type="invalid" >
                erro cidade
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </S.Container>

)
}

export default Address