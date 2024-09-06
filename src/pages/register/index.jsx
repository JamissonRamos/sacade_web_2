import * as S from './styled'
import { TextC } from '../../components/Typography';
import { Button, Form } from 'react-bootstrap';
import { Theme } from '../../theme';
import { useNavigate } from 'react-router-dom';
import { useStepper } from '../../hooks/use_stepper/useStepper';
import { FieldUsers } from './fields';

const Register = () => {
  const navigate = useNavigate();
  const formFields = [
    <FieldUsers.DataUser key={'DataUser'}/>,
    <FieldUsers.Address key={'Address'}/>,
    <FieldUsers.EndRegister key={'EndRegister'}/>
  ]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useStepper(formFields)

  const handleSubmit = (e) =>{ 
    changeStep(currentStep + 1, e)
  }

  return (
    <S.Container>
      <S.WrapPages>
        <S.HeaderPage>
          <TextC.Headline level={3}>Cadastrar Usuário</TextC.Headline>
          <S.WrapTextInfo>
            <TextC.Body level={2}>Vamos registrar um novo usuário. Lembre-se: se você já tem um cadastro, pode fazer o seu login.</TextC.Body>
          </S.WrapTextInfo>
          <S.WrapButtonHeader>
            <Button  
              onClick={() => navigate(`/login`)}> 
                <span> Fazer Login </span>
            </Button>
          </S.WrapButtonHeader>
          <S.WrapImg>
            <img src={Theme.ImgC.SecurityRemoveBg} alt="Logo de Segurança"  />
          </S.WrapImg>
        </S.HeaderPage>
        <S.BodyPage>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <S.FormFields>
            { currentComponent }
          </S.FormFields>
          <S.WrapButtonCounterPage>
            <S.ButtonsStep>
              {!isFirstStep &&
                <Button
                  type="button"
                  variant="success"
                  size="sm"
                  onClick={() => changeStep(currentStep - 1)}>
                    <Theme.Icons.MdOutlineArrowBackIos />
                </Button>
              }
              {!isLastStep &&
                  <Button
                    type="submit"
                    variant="success"
                    size="sm">
                      <Theme.Icons.MdOutlineArrowForwardIos />
                  </Button>
              }
            </S.ButtonsStep>
            <S.CounterPage>
              <TextC.Label level={5}>
                {currentStep + 1}/{formFields.length}
              </TextC.Label>
            </S.CounterPage>
          </S.WrapButtonCounterPage>
        </Form>
        </S.BodyPage>
      </S.WrapPages>
    </S.Container>
  )
}

export default Register